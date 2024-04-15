import { apiInstance } from "../ApiConfig"

export const apiCreateNewEvent = ( appUserId:string, data: any) => {
    const queryString = `event/create-event?appUserId=${appUserId}`;
    const response = apiInstance.post(queryString,data);
    console.log("API RES", response)
    return response;
}

export const apiGetEventDetails = ( keyAppEventId : string ) => {
    const response = apiInstance.get(`event/get-event=${keyAppEventId}`);
    console.log("API RES" , response);
    return response;
}

export const apiPostRequestHelp = ( appUserId:string ) => {
    const response = apiInstance.get(`/help/create-ticket/:keyAppUserId=${appUserId}`);
    console.log("API RES" , response);
    return response;
}
