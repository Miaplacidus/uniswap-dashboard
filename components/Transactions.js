import React from 'react';
import Table from "./Table";
import TransactionAPI from '@/api/transactions';
import Fmt from '@/util/format';

export default function Transactions() {
  const [transactionsData, setTransactionsData] = React.useState();

  const fetchData = () => {
    TransactionAPI.getTransactions()
    .then(resData => {
      if (resData.errors) {
        throw new Error('Fetching transactions failed!');
      }

      const transactions = resData.data.transactions
      const formattedTxData = [];

      transactions.forEach((transaction) => {

        ['burn', 'mint', 'swap'].forEach( txType => {
          let txEvents = transaction[`${txType}s`];

          txEvents.forEach( txEvent => {
            const { token0, token1 } = txEvent.pool;

            formattedTxData.push([
              `[${txType}] ${token0.symbol} and ${token1.symbol}`,
              `$${Fmt.truncate(txEvent.amountUSD)}`,
              `${Fmt.truncate(txEvent.amount0)}${token0.symbol}`,
              `${Fmt.truncate(txEvent.amount1)}${token1.symbol}`,
              `${Fmt.ellipsize(txEvent.origin)}`,
              `${Fmt.humanizeTime(transaction.timestamp)}`
            ]);
          });
        });
      });

      setTransactionsData(formattedTxData);
    })
  };

  React.useEffect(fetchData, []);

  return(
    <>
      {
        transactionsData ?
        <Table
          name='Transactions'
          refresh={fetchData}
          headers={['Transaction', 'Total Value', 'Token 1 Amount', 'Token 2 Amount', 'Account', 'Time' ]}
          data={ transactionsData }
        /> : <div>'Loading...'</div>
      }
    </>
  )
};