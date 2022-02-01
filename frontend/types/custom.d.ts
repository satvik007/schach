import { MongoClient } from 'mongodb'
import { Server as NetServer, Socket } from 'net'
import { NextApiResponse } from 'next'
import { Server as SocketIOServer } from 'socket.io'

declare module NodeJS {
  interface Global {
    _mongoClientPromise: Promise<MongoClient> | undefined
  }
}

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: SocketIOServer
    }
  }
}
