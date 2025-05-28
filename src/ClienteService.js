import axios from 'axios';

const Cliente_API_BASE_URL = 'http://localhost:8080/api/cliente';


class ClienteService {
    getClientes() {
        return axios.get("http://localhost:8080/api/cliente/all");
    }

    createCliente(Cliente) {
        return axios.post(Cliente_API_BASE_URL, Cliente);
    }

    getClienteById(ClienteId) {
        return axios.get(`${Cliente_API_BASE_URL}/${ClienteId}`);
    }

    updateCliente(Cliente, ClienteId) {
        return axios.put(`${Cliente_API_BASE_URL}/${ClienteId}`, Cliente);
    }

    deleteCliente(ClienteId) {
        return axios.delete(`${Cliente_API_BASE_URL}/${ClienteId}`);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ClienteService();