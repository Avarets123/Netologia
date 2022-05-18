import express, { Express, Router, urlencoded, Request, Response } from "express";
import cors from 'cors';
import { ISkills } from "./interfaces";

let nextId: number = 1;


const skills: ISkills[] = [
    { id: nextId++, name: 'React' },
    { id: nextId++, name: 'Redux' },
    { id: nextId++, name: 'Redux Thunk' },
    { id: nextId++, name: 'RxJS' },
    { id: nextId++, name: 'Redux Observable' },
    { id: nextId++, name: 'Redux Saga' }
]





class App {
    private readonly PORT: number = 7000;
    private readonly app: Express = express();
    private readonly router: Router = Router();



    private routes = () => {

        this.router.get('/', (req: Request, res: Response) => {
            res.send(`Server worked`);
        })

        this.router.get('/api/search:par', async (req: Request, res: Response) => {

            const { par } = req.params

            const data = skills.filter(o => o.name.toLowerCase().startsWith(par!.toString().toLowerCase()))
            res.json(data);
        })
        return this.router
    }




    constructor() {


        this.app.use(express.json());
        this.app.use(urlencoded({ extended: false }))
        this.app.use(cors());
        this.app.use(this.routes());

    }


    public start = () => {
        try {

            this.app.listen(this.PORT, () => {
                console.log(`Сервер запущен на http://localhost:${this.PORT}`);
            })


        } catch (e) {
            console.log(`Ошибка при запуске` + e);
        }
    }
}


const app = new App();
app.start();
