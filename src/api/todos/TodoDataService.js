import axios from "axios";
import {APT_URL, JPA_APT_URL} from '../../constants'

class TodoDataService {
    retrieveAllTodos(userName) {
        // return axios.get(`${APT_URL}/users/${userName}/todos`);
        return axios.get(`${JPA_APT_URL}/users/${userName}/todos`);
    }

    retrieveATodo(userName, id) {
        // return axios.get(`${APT_URL}/users/${userName}/todos/${id}`);
        return axios.get(`${JPA_APT_URL}/users/${userName}/todos/${id}`);
    }

    updateATodo(userName, id, todo) {
        return axios.put(`${JPA_APT_URL}/users/${userName}/todos/${id}` , todo);
    }

    createATodo(userName, todo) {
        return axios.post(`${JPA_APT_URL}/users/${userName}/todos` , todo);
    }

    deleteTodo(userName, id) {
        return axios.delete(`${JPA_APT_URL}/users/${userName}/todos/${id}`);
    }
}

export default new TodoDataService()