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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormatedNews = void 0;
const request_1 = require("./request");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const getFormatedNews = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield getNews(city);
    const articles = response.articles.slice(0, 3);
    if (articles.length < 3) {
        return "Not enough articles found.";
    }
    const result = {
        news1: {
            title: articles[0].title,
            description: articles[0].description,
            link: articles[0].url,
        },
        news2: {
            title: articles[1].title,
            description: articles[1].description,
            link: articles[1].url,
        },
        news3: {
            title: articles[2].title,
            description: articles[2].description,
            link: articles[2].url,
        }
    };
    return result;
});
exports.getFormatedNews = getFormatedNews;
const getNews = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const apiKey = process.env.API_NEWS;
    const baseUrl = 'https://newsapi.org/v2/everything';
    const url = `${baseUrl}?q=${encodeURIComponent(city)}&language=pt&sortBy=relevancy&apiKey=${apiKey}`;
    const response = yield (0, request_1.makeRequest)(url);
    return response;
});
