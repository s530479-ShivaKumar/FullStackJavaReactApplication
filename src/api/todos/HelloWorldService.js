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
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`);
    }
}

export default new HelloWorldService()