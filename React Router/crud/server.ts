import express, { Express, Router, Request, Response } from "express"; 
import cors from 'cors';
import {IContent} from './server.interface';
import moment from 'moment';


class App {
   private readonly app: Express = express();
    private port: number = 7777;
    route: Router = Router();


    posts: IContent[] = [];
    nextId: number = 1;


    routes = () => {

        try {
            this.route.get('/', (req: Request, res: Response) => {
                res.send('Server working');
            })

        } catch (e) {
            console.log(e);
        }

        this.route.get('/posts', (req: Request, res: Response):void => {
            try {
                res.json(this.posts);

            } catch (e) {
                console.log(e)
            }
        });

        this.route.get('/posts/:id', (req: Request, res: Response): void => {
            const id: number = +req.params.id
            const find = this.posts.find(i => i.id === id);



            res.json(find);
            
        })

        this.route.post('/posts', (req: Request, res: Response): void => {

            try {


                const date: string = moment().format('HH:MM:SS DD.MM.YYYY');
                const { content, name} = req.body;


                const post: IContent = {
                    content, created: date, name, id: this.nextId++
                }

                if (this.nextId !== 0) {
    
                    this.posts = this.posts.map(i => i.id !== this.nextId ? i : {...i, ...post});
                    res.status(204);

                }
    
                this.posts.push(post);
                res.status(204);

                console.log(this.posts)
            } catch (e) {
                console.log(e)
            }


        });

        this.route.delete('/posts/:id', (req: Request, res: Response):void => {
            try { 

                const id: number = +req.params.id

                const index = this.posts.findIndex(i => i.id === id);
    
                if (index !== -1) {
                    this.posts.splice(index, 1);
                }


                res.status(204);
            } catch (e) {
                console.log(e)
            }
        });


        this.route.get('/posts/:id/edit', (req: Request, res: Response) => {
            const id: number = +req.params.id
            const find = this.posts.find(i => i.id === id);



            res.json(find);
        })

        this.route.put('/posts/:id/edit', (req: Request, res: Response) => {
            try {

                const id = +req.params.id;


                const idxPost = this.posts.findIndex(i => i.id === id);
                let findPost = this.posts.find(el => el.id === id);

                
                if (findPost) {

                    findPost.content = req.body.content;
                    this.posts[idxPost] = findPost

                }

                




            } catch (e) {
                console.log(e)
            }
        })

        return this.route;
    }


    constructor() {



        this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(this.routes())

    }

    start() {
        try {
            this.app.listen(this.port, () => {
                console.log(`Сервер запущен на http://localhost:${this.port}`);
            })

        } catch (e) {

            console.log(`Сервер не запустился`);

        }
    }



}

const app = new App();

app.start();