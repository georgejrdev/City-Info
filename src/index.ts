import express, { Request, Response } from 'express';
import { makeResponse } from './utils/mountResponse'
import { getNews } from './utils/news';

const app = express();
const port = 3000;


app.get('/', async (req: Request, res: Response) => {
  let city = req.query.city as string;
  let lang = req.query.lang as string;

  if (!city) {
      return res.status(400).send('City and lang parameters are required.');
  }

  if (!lang){
    lang = "en";
  }

  const response = await makeResponse(city, lang);
  res.send(response);
});


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});