import {MongoClient} from "mongodb";

declare module NodeJS {
  interface Global {
    _mongoClientPromise: Promise<MongoClient> | undefined;

  }
}
