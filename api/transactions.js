import client from "./client";

const getTransactionsQuery = {
  query: `
    {
      transactions(
        first: 30
        orderBy: timestamp
        orderDirection: desc
        subgraphError: allow
      ) {
        id
        timestamp
        mints {
          pool {
            token0 {
              id
              symbol
            }
            token1 {
              id
              symbol
            }
          }
          owner
          sender
          origin
          amount0
          amount1
          amountUSD
        }
        swaps {
          pool {
            token0 {
              id
              symbol
            }
            token1 {
              id
              symbol
            }
          }
          origin
          amount0
          amount1
          amountUSD
        }
        burns {
          pool {
            token0 {
              id
              symbol
            }
            token1 {
              id
              symbol
            }
          }
          owner
          origin
          amount0
          amount1
          amountUSD
        }
      }
    }
  `
};

const TransactionAPI = {
  getTransactions() {
    return client(getTransactionsQuery)
  }
};

export default TransactionAPI;