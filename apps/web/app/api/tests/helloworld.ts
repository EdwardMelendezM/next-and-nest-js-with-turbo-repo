import {apiClient} from "@/utils/api-client";

export const helloWorldAPI = {
    getMessage: () => apiClient.get<string>("/hello-world"),
};