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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
let nextId = 1;
const services = [
    { id: nextId++, name: 'Замена стекла', price: 21000, content: 'Стекло оригинал от Apple' },
    { id: nextId++, name: 'Замена дисплея', price: 25000, content: 'Дисплей оригинал от Foxconn' },
    { id: nextId++, name: 'Замена аккумулятора', price: 4000, content: 'Новый на 4000 mAh' },
    { id: nextId++, name: 'Замена микрофона', price: 2500, content: 'Оригинальный от Apple' },
];
function fortune(res, body = null, status = 200) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.25) {
                res.statusCode = status;
                res.json(body);
                resolve();
                return;
            }
            reject(new Error('Something bad happened'));
        }, 2000);
    });
}
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.router = (0, express_1.Router)();
        this.routes = () => {
            this.router.get('/api/services', (req, res) => {
                return fortune(res, services);
            });
            this.router.get('/api/services/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const id = +req.params.id;
                const index = services.findIndex(el => el.id === id);
                if (index === -1) {
                    const status = 404;
                    return fortune(res, null, status);
                }
                const body = services[index];
                return fortune(res, body);
            }));
            this.router.post('/api/services', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
                services.push(Object.assign(Object.assign({}, req.body), { id: nextId++ }));
                const status = 204;
                return fortune(res, null, status);
            }));
            this.router.delete('/api/services/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
                const id = +req.params.id;
                const index = services.findIndex(el => el.id === id);
                if (index === -1) {
                    const status = 404;
                    return fortune(res, null, status);
                }
                services.splice(index, 1);
                return fortune(res, null, 204);
            }));
            return this.router;
        };
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cors_1.default)());
        this.app.use(this.routes());
    }
    start() {
        try {
            this.app.listen(7070, () => {
                console.log(`Сервер запущен на http://localhost:7070`);
            });
        }
        catch (e) {
            console.log(`Ошибка ${e}`);
        }
    }
}
const app = new App();
app.start();
