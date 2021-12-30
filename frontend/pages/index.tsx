import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Schach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image
          width={100}
          height={100}
          src="/knight.png"
          alt="Schach logo"
        />
        <h1 className="text-6xl font-bold">
          Willkommen beim{' '}
          <a className="text-blue-600" href="">
            Schach
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          wo Legenden geboren werden
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">

          <div className="flex: 1; display: flex;
/* content styling OPTIONAL*/ align-items: center; justify-content: center; padding: 10vh;
/* background styling */ background-size: cover; background-position: center; background-repeat: no-repeat;
-webkit-flex-wrap: nowrap; flex-wrap: nowrap;">
            <Image className="position: relative w-full background-size: cover"
               width={1920}
               height={1920}
               src="/chess-board.jpg"
               alt="Schach HD"
            />

            <div className="">
              Hello World
            </div>
          </div>


        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/knight.png" alt="Schach Logo" width={20} height={20} className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
