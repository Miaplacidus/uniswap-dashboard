import client from "./client";

const getTokensQuery = {
  query: `
    {
      tokens(
        first: 30
        orderBy: totalValueLockedUSD
        orderDirection: desc
        subgraphError: allow
      ) {
        id
        symbol
        name
        totalValueLockedUSD
        tokenDayData(first: 1 orderBy: date orderDirection: desc){
          priceUSD
          open 
          close 
        }
      }
    }
  `
};

const TokenAPI = {
  getTokens() {
    return client(getTokensQuery)
  }
};

export default TokenAPI;