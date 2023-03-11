import React from 'react';
import Table from "./Table";
import TokenAPI from '@/api/tokens';
import Fmt from '@/util/format';

export default function Tokens() {
  const [tokensData, setTokensData] = React.useState();

  const fetchData = () => {
    TokenAPI.getTokens()
    .then(resData => {
      if (resData.errors) {
        throw new Error('Fetching tokens failed!');
      }

      const tokens = resData.data.tokens;

      const formattedTokensData = tokens.map((token) => {
      const tokenDayData = token.tokenDayData[0];
      const { open, close } = tokenDayData;
      let priceChange = (close - open) / open * 100;

      if (Math.round(open) === 0) {
        priceChange = 0
      }

        return [
          `${token.name}(${token.symbol})`,
          `$${Fmt.round(tokenDayData.priceUSD, 2)}`,
           `${Fmt.round(priceChange, 2)}%`,
          `$${Fmt.truncate(token.totalValueLockedUSD)}`
        ]
      })

      setTokensData(formattedTokensData);
    })
  }

  React.useEffect(fetchData, []);

  return(
    <>
      {
        tokensData ?
        <Table
          name='Tokens'
          refresh={fetchData}
          headers={['Token', 'Price Point', 'Price Change', 'TVL(USD)']}
          data={ tokensData }
        /> : <div>'Loading...'</div>
      }
    </>
  );
}