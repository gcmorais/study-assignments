import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";



const app = Fastify();


app.register(cors);
app.register(appRoutes);


app.listen({
    port: 2222,
}).then(() => {
    console.log('http server running in http://localhost:2222')
})