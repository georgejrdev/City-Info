import { getFormatedNews, FormatedNewsData } from './news';
import { getWeather, WeatherData } from './wheater'


export const makeFormatedResponse = async (city:string, lang:string): Promise<object> => {

    const news:FormatedNewsData | string = await getFormatedNews(city); 
    const weather:WeatherData = await getWeather(city,lang);

    const currentTemperature: number = Math.ceil(weather.main.temp - 273.15);
    const minTemperature: number = Math.ceil(weather.main.temp_min - 273.15);
    const maxTemperature: number = Math.ceil(weather.main.temp_max - 273.15);
    const airHumidity:string = `${weather.main.humidity}%`;


    const response = makeJsonResponse(currentTemperature,maxTemperature,minTemperature,airHumidity,news)

    return response;
}


const makeJsonResponse = (currentTemperature: number,  maxTemperature: number, minTemperature: number, airHumidity: string, news: FormatedNewsData | string) : object => {
    const response = 
        {
            "currentTemperature":currentTemperature,
            "minTemperature":minTemperature,
            "maxTemperature":maxTemperature,
            "airHumidity":airHumidity,
        
            "news":news
        }
    
    return response; 
}