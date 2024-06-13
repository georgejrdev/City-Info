import axios, { AxiosInstance, AxiosResponse } from 'axios';


const setRequest = (baseUrl: string) => {
    const API: AxiosInstance = axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type':'application/json',
            },
        });

    return API
}

export const postRequest = async (baseUrl: string, route: string, data:any): Promise<any> => {
    const API: AxiosInstance = setRequest(baseUrl);
 
    try {
        const response: AxiosResponse<any> = await API.post(route,data);
        return response.data;

    } catch (error){
        throw error;
    }
}


export const getRequest = async (baseUrl:string, route: string): Promise<any> => {
    const API: AxiosInstance = setRequest(baseUrl);

    try {
        const response: AxiosResponse<any> = await API.get(route);
        return response.data;

    } catch (error) {
        throw error;
    }
}