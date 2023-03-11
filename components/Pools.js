import React from 'react';
import Table from "./Table";
import PoolAPI from '@/api/pools';
import Fmt from '@/util/format';

export default function Pools() {
  const [poolsData, setPoolsData] = React.useState();

  const fetchData = () => {
    PoolAPI.getPools()
    .then(resData => {
      if (resData.errors) {
        throw new Error('Fetching pools failed!');
      }
      const pools = resData.data.pools;

      const formattedPoolsData = pools.map((pool) => {
        const token0 = pool.token0, token1 = pool.token1;
        return [
          `${token0.name}(${token0.symbol}) | ${token1.name}(${token1.symbol})`,
          `$${Fmt.truncate(pool.totalValueLockedUSD)}`,
          `$${Fmt.truncate(pool.poolDayData[0].volumeUSD)}`
        ]
      });

      setPoolsData(formattedPoolsData)
    })
  };

  React.useEffect(fetchData, []);

  return(
    <>
      {
        poolsData ?
        <Table
          name='Pools'
          refresh={fetchData}
          headers={['Pool', 'TVL(USD)', '24H Vol(USD)']}
          data={ poolsData }
        /> : <div>'Loading...'</div>
      }
    </>
  )
}