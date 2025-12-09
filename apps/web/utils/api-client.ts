import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ApiClientOptions {
    baseURL: string;
    headers?: Record<string, string>;
}

export class ApiClient {
    private axiosInstance: AxiosInstance;

    constructor(options: ApiClientOptions) {
        this.axiosInstance = axios.create({
            baseURL: options.baseURL,
            headers: options.headers,
        });
    }

    // Método genérico con tipado dinámico
    async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        return response.data;
    }

    async post<T, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        const response = await this.axiosInstance.post<R>(url, data, config);
        return response.data;
    }

    async put<T, R = any>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
        const response = await this.axiosInstance.put<R>(url, data, config);
        return response.data;
    }

    async delete<R = any>(url: string, config?: AxiosRequestConfig): Promise<R> {
        const response = await this.axiosInstance.delete<R>(url, config);
        return response.data;
    }
}

export const apiClient = new ApiClient({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
});
