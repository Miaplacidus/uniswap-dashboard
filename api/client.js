import axios from 'axios';

// const client = (query) => {
//   return(
//     fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', {
//       method: 'POST',
//       body: JSON.stringify(query)
//     })
//     .then(res => {
//       return res.json();
//     })
//   )
// }

const client = (query) => {
  return(
    axios.post('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', query)
      .then(res => res.data)
  )
}

export default client;