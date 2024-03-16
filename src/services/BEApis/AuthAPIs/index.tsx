import { apiInstance } from "../ApiConfig"

export const apiRegNewUser = (data: any) => {
    const response = apiInstance.post("/auth/magic-link", data);
    console.log("API RES", response)
    return response;
}