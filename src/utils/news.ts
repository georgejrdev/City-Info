import { makeRequest } from './request';
import * as dotenv from 'dotenv';

dotenv.config();


export const getFormatedNews = async (city: string): Promise<FormatedNewsData | string> => {
    const response:NewsResponse = await getNews(city);  

    const articles = response.articles.slice(0, 3);

    if (articles.length < 3) {
        return "Not enough articles found.";
    }

    const result: FormatedNewsData = {
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


const getNews = async (city: string): Promise<NewsResponse> => {

    const apiKey = process.env.API_NEWS;
    const baseUrl = 'https://newsapi.org/v2/everything';
    const url = `${baseUrl}?q=${encodeURIComponent(city)}&language=pt&sortBy=relevancy&apiKey=${apiKey}`;

    const response = await makeRequest(url);
    
    return response;
}


export interface FormatedNewsData {
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


interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}


interface NewsResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}