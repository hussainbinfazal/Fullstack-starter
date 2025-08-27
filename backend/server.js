import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';


configDotenv();

const app = express();

app.use(cors());
app.use(express.json());


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