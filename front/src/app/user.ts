export var userToken = null;

export function getToken(){
    return userToken;
}

export function setToken(token:any){
    userToken = token;
}