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

        {/*<div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">*/}

        {/*  <a*/}
        {/*    href="https://nextjs.org/docs"*/}
        {/*    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"*/}
        {/*  >*/}
        {/*    <h3 className="text-2xl font-bold">Documentation &rarr;</h3>*/}
        {/*    <p className="mt-4 text-xl">*/}
        {/*      Find in-depth information about Next.js features and API.*/}
        {/*    </p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://nextjs.org/learn"*/}
        {/*    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"*/}
        {/*  >*/}
        {/*    <h3 className="text-2xl font-bold">Learn &rarr;</h3>*/}
        {/*    <p className="mt-4 text-xl">*/}
        {/*      Learn about Next.js in an interactive course with quizzes!*/}
        {/*    </p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://github.com/vercel/next.js/tree/master/examples"*/}
        {/*    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"*/}
        {/*  >*/}
        {/*    <h3 className="text-2xl font-bold">Examples &rarr;</h3>*/}
        {/*    <p className="mt-4 text-xl">*/}
        {/*      Discover and deploy boilerplate example Next.js projects.*/}
        {/*    </p>*/}
        {/*  </a>*/}

        {/*  <a*/}
        {/*    href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
        {/*    className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"*/}
        {/*  >*/}
        {/*    <h3 className="text-2xl font-bold">Deploy &rarr;</h3>*/}
        {/*    <p className="mt-4 text-xl">*/}
        {/*      Instantly deploy your Next.js site to a public URL with Vercel.*/}
        {/*    </p>*/}
        {/*  </a>*/}
        {/*</div>*/}
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
