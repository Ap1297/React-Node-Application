const env = process.env;

export const PORT = env.PORT ?? 8080;
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGO_URL = "mongodb+srv://dbUser:dbUser@cluster0.3flln.mongodb.net/NamingContest?retryWrites=true&w=majority";
export default {
    PORT,
    HOST,
    SERVER_URL,
};