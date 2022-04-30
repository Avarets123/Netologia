import express, { Express, Request, Response,  Router } from "express";
import cors from 'cors';





class App {
    private readonly app: Express = express();
    private port: number = 7070;
    private rout: Router = Router();



    private routes = (): Router => {

        this.rout.get('/', (req: Request, res: Response) => {
            res.send('Have a nive day !')
        })

        this.rout.get('/data', (req: Request, res: Response): void => {
            res.json({status: 'success'});
        });

        this.rout.get('/error', (req: Request, res: Response): void => {
            res.status(500).json({status: 'error'});
        });

        this.rout.get('/loading', async (req: Request, res: Response): Promise<void> => {
            await new Promise<void>(resolve => {
                setTimeout(() => {
                    resolve();
                }, 3000);
            });
            res.json({status: 'success'});
        });

        return this.rout;
    }


    constructor() {


        this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(this.routes());
    }



    start(): void {
        try {
            this.app.listen(this.port, () => {
                console.log(`Сервер запущен на http://localhost:${this.port}`)
            });

        } catch (e) {
            console.log(`Сервер не запустился !`)
        }
    }


};


const app: App = new App();

app.start();