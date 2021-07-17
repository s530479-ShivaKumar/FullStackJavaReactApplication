import axios from "axios";

class HelloWorldService {
    executeHelloWorldService() {
        console.log('executed by service');
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldServiceBeab() {
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldServicePathvariable(name) {

        // let userName = 'shiva'
        // let password = 'shiva'
        // let basicAuthHeader = 'Basic ' + window.btoa(userName + ":" + password)
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
        // {
        //     headers : {
        //         authorization : basicAuthHeader
        //     }
        // });
    }
}

export default new HelloWorldService()