import React, { useState, useEffect } from 'react';
import clienteService from '../ClienteService';
import { Link } from 'react-router-dom';

const ClienteListComponent = () => {
    const [clientes, setclientes] = useState([]);

    useEffect(() => {
        clienteService.getClientes().then((res) => {
            setclientes(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">cliente List</h2>
            <div className="row">
                <Link to="/add-cliente" className="btn btn-primary">Add cliente</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>cliente Nome</th>
                        <th>cliente Endereco</th>
                        <th>cliente Email</th>
                        <th>cliente  Telefone</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.nome}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefone}</td>
                            <td>
                                <Link to={`/update-cliente/${cliente.id}`} className="btn btn-info">Update</Link>
                                <button className="btn btn-danger" onClick={() => clienteService.deleteCliente(cliente.id).then(() => setclientes(clientes.filter(p => p.id !== cliente.id)))}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClienteListComponent;