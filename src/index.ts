import express, { Request, Response } from 'express';
import { getResponse } from './utils/mountResponse'

const app = express();
const port = 3000;


app.get('/getCityInfo', (req: Request, res: Response) => {
    res.send(getResponse());
})


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});