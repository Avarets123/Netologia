"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const moment_1 = __importDefault(require("moment"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 7777;
        this.route = (0, express_1.Router)();
        this.posts = [];
        this.nextId = 1;
        this.routes = () => {
            try {
                this.route.get('/', (req, res) => {
                    res.send('Server working');
                });
            }
            catch (e) {
                console.log(e);
            }
            this.route.get('/posts', (req, res) => {
                try {
                    res.json(this.posts);
                }
                catch (e) {
                    console.log(e);
                }
            });
            this.route.get('/posts/:id', (req, res) => {
                const id = +req.params.id;
                const find = this.posts.find(i => i.id === id);
                res.json(find);
            });
            this.route.post('/posts', (req, res) => {
                try {
                    const date = (0, moment_1.default)().format('HH:MM:SS DD.MM.YYYY');
                    const { content, name } = req.body;
                    const post = {
                        content, created: date, name, id: this.nextId++
                    };
                    if (this.nextId !== 0) {
                        this.posts = this.posts.map(i => i.id !== this.nextId ? i : Object.assign(Object.assign({}, i), post));
                        res.status(204);
                    }
                    this.posts.push(post);
                    res.status(204);
                    console.log(this.posts);
                }
                catch (e) {
                    console.log(e);
                }
            });
            this.route.delete('/posts/:id', (req, res) => {
                try {
                    const id = +req.params.id;
                    const index = this.posts.findIndex(i => i.id === id);
                    if (index !== -1) {
                        this.posts.splice(index, 1);
                    }
                    res.status(204);
                }
                catch (e) {
                    console.log(e);
                }
            });
            this.route.get('/posts/:id/edit', (req, res) => {
                const id = +req.params.id;
                const find = this.posts.find(i => i.id === id);
                res.json(find);
            });
            this.route.put('/posts/:id/edit', (req, res) => {
                try {
                    const id = +req.params.id;
                    const idxPost = this.posts.findIndex(i => i.id === id);
                    let findPost = this.posts.find(el => el.id === id);
                    if (findPost) {
                        findPost.content = req.body.content;
                        this.posts[idxPost] = findPost;
                    }
                }
                catch (e) {
                    console.log(e);
                }
            });
            return this.route;
        };
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use(this.routes());
    }
    start() {
        try {
            this.app.listen(this.port, () => {
                console.log(`Сервер запущен на http://localhost:${this.port}`);
            });
        }
        catch (e) {
            console.log(`Сервер не запустился`);
        }
    }
}
const app = new App();
app.start();
