import { apiInstance } from "../ApiConfig"

export const apiRegExistingUser = (data: any) => {
    const response = apiInstance.post("/auth/magic-link", data);
    console.log("API RES", response)
    return response;
}

export const apiRegNewUser = (data : any) => {
    const response = apiInstance.post("auth/verification-code",data);
    console.log("API RES",response);
    return response;
}

export const apiNewEvent = (data : any) => {
    const response = apiInstance.post("event/create-event/:keyAppUserId",data);
    console.log("API RES",response);
    return response;
}