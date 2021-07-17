import axios from "axios"
import {APT_URL} from '../../constants'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBAsicAuthenticationService(username, password) {
        return axios.get(`${APT_URL}/basicauth`, 
        {
            headers : {authorization : this.createBasicAuthToken(username,password)}
        })
    }

    executeJWTAuthenticationService(username, password) {
        
        return axios.post(`${APT_URL}/authenticate`, 
        {
            username,password
        })
    }

    createBasicAuthToken(username, password) {
        return "Basic " + window.btoa(username + ":" + password)
    }

    registerSuccesfulLogin(username,password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username,password))
    }

    registerSuccesfulLoginForJWT(username,token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return "Bearer " + token
    }


    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if (user === null)
            return false;

        return true;
    }

    getUserName(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

        if (user === null)
            return false;

        return user;
    }

    setupAxiosInterceptors(basicAuthHeader) {
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }  
                return config
            }
        )

    }

}

export default new AuthenticationService()