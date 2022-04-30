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
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 7070;
        this.rout = (0, express_1.Router)();
        this.routes = () => {
            this.rout.get('/', (req, res) => {
                res.send('Have a nive day !');
            });
            this.rout.get('/data', (req, res) => {
                res.json({ status: 'success' });
            });
            this.rout.get('/error', (req, res) => {
                res.status(500).json({ status: 'error' });
            });
            this.rout.get('/loading', (req, res) => __awaiter(this, void 0, void 0, function* () {
                yield new Promise(resolve => {
                    setTimeout(() => {
                        resolve();
                    }, 3000);
                });
                res.json({ status: 'success' });
            }));
            return this.rout;
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
            console.log(`Сервер не запустился !`);
        }
    }
}
;
const app = new App();
app.start();
