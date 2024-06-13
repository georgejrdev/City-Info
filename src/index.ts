import express, { Request, Response } from 'express';

const app = express();
const port = 3000;


app.get('/getCityInfo', (req: Request, res: Response) => {
    res.send('fds');
})


app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});