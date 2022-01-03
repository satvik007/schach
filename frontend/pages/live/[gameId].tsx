import Head from "next/head";
import ChessLayout from "../../components/ChessLayout";
import { useRouter } from 'next/router'
import Script from 'next/script';

export default function Live() {
  console.log(`Schach is Open Source! https://github.com/satvik007/schach`);

  const router = useRouter()
  const { gameId } = router.query

  if (!gameId) {
    router.push('/broke');
  }

  return (
    <>
      <Head>
        <title>Schach Live!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 px-20 py-2 min-h-screen text-center">

        {/*<ChessLayout gameId={gameId}/>*/}

      </main>

    </>
  );
}
