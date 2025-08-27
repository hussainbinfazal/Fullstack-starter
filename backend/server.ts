import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';
import next from 'next';
import { fileURLToPath } from "url";

configDotenv({ path: "./.env" });

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // You can customize the methods allowed
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FRONTEND = process.env.FRONTEND || "react"; 


if(process.env.NODE_ENV === "production") {
  if (FRONTEND === "react") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });

} else if (FRONTEND === "next-static") {
  app.use(express.static(path.join(__dirname, "frontend", "out")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "out", "index.html"));
  });

} else if (FRONTEND === "next-ssr") {
  const dev = process.env.NODE_ENV !== "production";
  const nextApp = next({ dev, dir: path.join(__dirname, "frontend") });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    app.all(/.*/, (req, res) => handle(req, res));
  });
}
}


app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      </head>
      <body>
        <h1>API is running...</h1>
        <p>Check out my GitHub profile: <a href="https://github.com/hussainbinfazal"><i class="fab fa-github"></i></a></p>
        <p>Found this useful? <a href="https://github.com/hussainbinfazal/your-repo-name" style="text-decoration: none">⭐️</a></p>
      </body>
    </html>
  `);
});
app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT);
});