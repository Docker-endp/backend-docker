import server from "./server"

server.listen(server.get("port"), () => {
    console.log(`Backend ejecutandose en el puerto: ${server.get("port")}`);
})