import { getNews, NewsData } from './news';
import { getWeather, WeatherData } from './wheater'


export const makeResponse = async (city:string, lang:string): Promise<object> => {

    const news:NewsData | string = await getNews(city); 
    const weather:WeatherData = await getWeather(city,lang);

    const currentTemperature: number = Math.ceil(weather.main.temp - 273.15);
    const minTemperature: number = Math.ceil(weather.main.temp_min - 273.15);
    const maxTemperature: number = Math.ceil(weather.main.temp_max - 273.15);
    const airHumidity:string = `${weather.main.humidity}%`;

    const airQuality:string = "Sla bro"

    const response = mountJsonResponse(currentTemperature,maxTemperature,minTemperature,airHumidity,airQuality,news)

    return response;
}


const mountJsonResponse = (currentTemperature: number,  maxTemperature: number, minTemperature: number, airHumidity: string, airQuality: string, news: NewsData | string) : object => {
    const response = 
        {
            "currentTemperature":currentTemperature,
            "minTemperature":minTemperature,
            "maxTemperature":maxTemperature,
            "airHumidity":airHumidity,
            "airQualityt":airQuality,
        
            "news":news
        }
    
    return response; 
}