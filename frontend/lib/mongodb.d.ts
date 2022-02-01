import { MongoClient } from 'mongodb'

declare let clientPromise: Promise<MongoClient>
export default clientPromise
