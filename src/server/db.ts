import { MongoClient } from "mongodb"
import { MONGO_URL,DB_NAME } from "./config"

let connectedClient ;
export const connectClient = async () => {
    if(connectedClient) {
        return connectedClient.db(DB_NAME);
    }

    const client = new MongoClient(MONGO_URL);
    await client.connect();
    await client.db(DB_NAME).command({ping : 1});
    console.log("Connected to MongoDB");

    connectedClient = client;
    return client.db(DB_NAME);
}

export const stopClient = async () => {
    await connectedClient?.close();
}
 
