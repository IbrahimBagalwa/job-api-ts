import http from "http";
import app from "./app";

const server = http.createServer(app);
const port = process.env.PORT || 8000;

const startServer = async () => {
  try {
    server.listen(port, () => {
      console.log(`Server listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
startServer();
