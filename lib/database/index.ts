/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

const cached = (global as any).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => { 
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error(
        "Please define the MONGODB_URI environment variable inside .env.local"
    );

    console.log(`MONGODB_URI: ${MONGODB_URI}`)

    cached.promise  = cached.promise || mongoose.connect(MONGODB_URI, {
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn
}