import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user!.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

// import { GetServerSideProps } from "next"
// import type { Session } from "next-auth"
// import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";


/** Class to handle the login. */
// export default function Login() {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.

  // return (
  //   <div className="flex flex-col items-center justify-center min-h-screen py-2">
  //     <Head>
  //       <title>Anmeldung zum Schach</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //
  //     <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
  //       <header>
  //         <noscript>
  //           <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
  //         </noscript>
  //       </header>
  //       <h1 className="text-4xl font-bold">Anmeldung zum Schach</h1>
  //
  //
  //
  //       {/*<div className="flex flex-col items-center w-full flex-1 px-20 text-center">*/}
  //
  //       {/*</div>*/}
  //     </main>
  //   </div>
  // );

  //
  // const {data: session, status} = useSession()
  // const loading = status === 'loading'
  // return (
  //   <>
  //
  //   </>
  // )
// }

// Export the `session` prop to use sessions with Server Side Rendering
// export const getServerSideProps: GetServerSideProps<{
//   session: Session | null
// }> = async (context) => {
//   return {
//     props: {
//       session: await getSession(context),
//     },
//   }
// }
