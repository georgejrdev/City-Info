"use strict";
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
exports.makeFormatedResponse = void 0;
const news_1 = require("./news");
const wheater_1 = require("./wheater");
const makeFormatedResponse = (city, lang) => __awaiter(void 0, void 0, void 0, function* () {
    const news = yield (0, news_1.getFormatedNews)(city);
    const weather = yield (0, wheater_1.getWeather)(city, lang);
    const currentTemperature = Math.ceil(weather.main.temp - 273.15);
    const minTemperature = Math.ceil(weather.main.temp_min - 273.15);
    const maxTemperature = Math.ceil(weather.main.temp_max - 273.15);
    const airHumidity = `${weather.main.humidity}%`;
    const response = makeJsonResponse(currentTemperature, maxTemperature, minTemperature, airHumidity, news);
    return response;
});
exports.makeFormatedResponse = makeFormatedResponse;
const makeJsonResponse = (currentTemperature, maxTemperature, minTemperature, airHumidity, news) => {
    const response = {
        "currentTemperature": currentTemperature,
        "minTemperature": minTemperature,
        "maxTemperature": maxTemperature,
        "airHumidity": airHumidity,
        "news": news
    };
    return response;
};
