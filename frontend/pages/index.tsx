import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Schach</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex items-center justify-center w-full flex-1 px-20 text-center">
          <div className="w-5/6">
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
          </div>
          <div className="flex flex-col w-1/6">
            <Link href="/login">
              <a className="hover:text-black text-slate-700 py-2 px-4 rounded">
                Anmelden
              </a>
            </Link>
            <Link href="/signup">
              <a className="bg-black hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded mt-3">
                Registrieren
              </a>
            </Link>
          </div>
        </div>


        <div className="flex flex-col items-center justify-center relative mt-6 w-full">

          <Image className="absolute z-0"
                 width={1080}
                 height={1080}
                 objectFit='cover'
                 objectPosition='center'
                 src="/chess-board.jpg"
                 alt="Schach HD"
          />

          <div className="absolute z-10">
            Hello World
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
          <Image src="/knight.png" alt="Schach Logo" width={20} height={20} className="h-4 ml-2"/>
        </a>
      </footer>
    </div>
  )
}
