import { makeRequest } from './request';
import * as dotenv from 'dotenv';

dotenv.config();


export const getNews = async (city: string): Promise<NewsData | string> => {

    const apiKey = process.env.API_NEWS;
    const baseUrl = 'https://newsapi.org/v2/everything';
    const url = `${baseUrl}?q=${encodeURIComponent(city)}&language=pt&sortBy=relevancy&apiKey=${apiKey}`;

    const response = await makeRequest(url);
    
    const articles = response.articles.slice(0, 3);

    if (articles.length < 3) {
        return "Not enough articles found.";
    }

    const result: NewsData = {
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
};


export interface NewsData {
    news1: {
        title: string;
        description: string;
        link: string;
    };
    news2: {
        title: string;
        description: string;
        link: string;
    };
    news3: {
        title: string;
        description: string;
        link: string;
    };
}