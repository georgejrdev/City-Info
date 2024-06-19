import express, { Request, Response } from 'express';
import { makeFormatedResponse } from './utils/makeResponse'

const app = express();
const port = process.env.PORT || 3000;


app.get('/', async (req: Request, res: Response) => {
  
  let city = req.query.city as string;
  let lang = req.query.lang as string;

  if (!city) {
      return res.status(400).send('City and lang parameters are required.');
  }

  if (!lang){
    lang = "en";
  }

  res.send(await makeFormatedResponse(city, lang));
});


app.listen(port, () => {
  console.log(`Server Open: ${port}`);
});