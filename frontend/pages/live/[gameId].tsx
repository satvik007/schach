import Head from 'next/head'
import ChessLayout from '../../components/ChessLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function Live() {
  console.log(`Schach is Open Source! https://github.com/satvik007/schach`)

  const router = useRouter()
  const { gameId } = router.query

  // useEffect(() => {
  //   if (typeof gameId !== 'string') {
  //     router.push('/broke');
  //   }
  // })

  if (typeof gameId !== 'string') {
    return null
  }

  return (
    <>
      <Head>
        <title>Schach Live!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row py-2">
        <div className="flex flex-col items-center"> Left menu </div>

        <ChessLayout className="flex" gameId={gameId} />

        <div className="flex-1 flex-col items-center justify-center"> Right menu </div>
      </main>
    </>
  )
}
