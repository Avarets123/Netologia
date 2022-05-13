import express, { Router, Express, Request, Response } from "express";
import cors from 'cors';
import { IServices } from './interfaces'


let nextId: number = 1;
const services: IServices[] = [
    { id: nextId++, name: 'Замена стекла', price: 21000, content: 'Стекло оригинал от Apple' },
    { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn' },
    { id: nextId++, name: 'Замена аккумулятора', price: 4000, content: 'Новый на 4000 mAh' },
    { id: nextId++, name: 'Замена микрофона', price: 2500, content: 'Оригинальный от Apple' },
];

function fortune(res: any, body: any = null, status: number = 200) {
    return new Promise<void>((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() > 0.25) {
                res.statusCode = status
                res.json(body);
                resolve();
                return;
            }
            reject(new Error('Something bad happened'));
        }, 2000)
    })
}

class App {
    private readonly app: Express = express();
    private readonly router: Router = Router();

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use(this.routes());
    }

    private routes = () => {


        this.router.get('/api/services', (req: Request, res: Response) => {
            return fortune(res, services);
        });


        this.router.get('/api/services/:id', async (req: Request, res: Response) => {
            const id = +req.params.id;
            const index = services.findIndex(el => el.id === id);
            if (index === -1) {
                const status = 404;
                return fortune(res, null, status);
            }

            const body = services[index];
            return fortune(res, body);
        });


        this.router.post('/api/services', async (req: Request, res: Response) => {
            const id = req.body.id;
            if (id !== 0) {
                const index = services.findIndex(el => el.id === id);
                if (index === -1) {
                    const status = 404;
                    return fortune(res, null, status);
                }

                services[index] = req.body;
                return fortune(res, null, 204);
            }

            services.push({ ...req.body, id: nextId++ });
            const status = 204;
            return fortune(res, null, status);
        });


        this.router.delete('/api/services/:id', async (req: Request, res: Response) => {
            const id = +req.params.id;
            const index = services.findIndex(el => el.id === id);
            if (index === -1) {
                const status = 404;
                return fortune(res, null, status);
            }
            services.splice(index, 1);
            return fortune(res, null, 204);
        });

        return this.router
    }

    public start() {
        try {
            this.app.listen(7070, () => {
                console.log(`Сервер запущен на http://localhost:7070`)
            })

        } catch (e) {
            console.log(`Ошибка ${e}`)
        }
    }
}


const app = new App();
app.start();