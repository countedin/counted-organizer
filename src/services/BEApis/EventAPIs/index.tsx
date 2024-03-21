import { apiInstance } from "../ApiConfig"

export const apiCreateNewEvent = ( appUserId:string, data: any) => {
    const queryString = `event/create-event?appUserId=${appUserId}`;
    const response = apiInstance.post(queryString,data);
    console.log("API RES", response)
    return response;
}