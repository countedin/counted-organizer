import { apiInstance } from "../ApiConfig"

export const apiRegExistingUser = (data: any) => {
    const response = apiInstance.post("auth/magic-link", data);
    console.log("API RES", response)
    return response;
}

export const apiRegNewUser = (data : any) => {
    const response = apiInstance.post("auth/auth-with-empId",data);
    console.log("API RES",response);
    return response;
}

export const apiVerifyCode = (data : any) => {
    const response = apiInstance.post("auth/verify-code",data);
    console.log("API RES", response);
    return response;
}

export const apiGetUserbyAppIdDetails = ( appUserId : string ) => {
    const response = apiInstance.get(`profile/get-user?appUserId=${appUserId}`);
    console.log("API RES" , response);
    return response;
}

export const apiGetUserDetails = ( email : string ) => {
    const response = apiInstance.get(`profile/get-user?email=${email}`);
    console.log("API RES" , response);
    return response;
}

export const apiSetupPin = ( data : any ) => {
    const response = apiInstance.post('security/setup-pin',data);
    console.log("API RES" , response);
    return response;
}

