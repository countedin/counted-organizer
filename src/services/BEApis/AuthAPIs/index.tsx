import { apiInstance } from "../ApiConfig"

export const apiRegExistingUser = (data: any) => {
    const response = apiInstance.post("/auth/login", data);
    console.log("API RES", response)
    return response;
}

export const apiRegNewUser = (data : any) => {
    const response = apiInstance.post("/auth/register",data);
    console.log("API RES",response);
    return response;
}