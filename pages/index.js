import Head from 'next/head'
import { Inter } from 'next/font/google'
import Pools from '@/components/Pools'
import Tokens from '@/components/Tokens'
import Transactions from '@/components/Transactions'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Uniswap V3 Subgraph Visualizer</title>
        <meta name="description" content="Uniswap V3 Subgraph" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1 className='page-title'>Uniswap Dashboard</h1>
        </header>
        <Tokens />
        <Pools />
        <Transactions />
      </main>
    </>
  )
}
