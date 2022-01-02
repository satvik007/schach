import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
// import TwitterProvider from "next-auth/providers/twitter"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

const {GITHUB_ID, GITHUB_SECRET, TWITTER_ID, TWITTER_SECRET} = process.env;

if (!GITHUB_ID || !GITHUB_SECRET || !TWITTER_ID || !TWITTER_SECRET) {
  throw new Error("Missing environment variables")
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
    // TwitterProvider({
    //   clientId: TWITTER_ID,
    //   clientSecret: TWITTER_SECRET
    // })
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise),
  debug: true,
})
