import { getWeather, WeatherData } from './wheater'


export const makeResponse = async (city:string, lang:string): Promise<object> => {
    const data:WeatherData = await getWeather(city,lang);
    
    const currentTemperature: number = Math.ceil(data.main.temp - 273.15);
    const minTemperature: number = Math.ceil(data.main.temp_min - 273.15);
    const maxTemperature: number = Math.ceil(data.main.temp_max - 273.15);
    const airHumidity:string = `${data.main.humidity}%`;

    const airQuality:string = "Sla bro"
    const news = {}

    const response = mountJsonResponse(currentTemperature,maxTemperature,minTemperature,airHumidity,airQuality,news)

    return response;
}


const mountJsonResponse = (currentTemperature: number,  maxTemperature: number, minTemperature: number, airHumidity: string, airQuality: string, news: object) : object => {
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