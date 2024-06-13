import {  } from './news'
import {  } from './wheater'


export const getResponse = async (): Promise<object> => {

    return {};
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