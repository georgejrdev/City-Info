type RequestBody = Record<string, any> | null;

type ResponseData = any;

export async function makeRequest(url: string, method: string = 'GET', body: RequestBody = null): Promise<ResponseData> {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET' && body) {
        options.body = JSON.stringify(body);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`Erro na requisição. Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}