import client from "./client";

const getPoolsQuery = {
  query: `
    {
      pools(
        first: 10
        orderBy: totalValueLockedUSD
        orderDirection: desc
        subgraphError: allow
        where: { volumeUSD_gt: 0 }
      ) {
        id
        token0 {
          id
          symbol
          name
        }
        token1 {
          id
          symbol
          name
        }
        poolDayData(
          first: 1 
          orderBy: date 
          orderDirection: desc
        ) {
          volumeUSD
        }
        totalValueLockedUSD
      }
    }
  `
};

const PoolAPI = {
  getPools() {
    return client(getPoolsQuery)
  }
};

export default PoolAPI;
