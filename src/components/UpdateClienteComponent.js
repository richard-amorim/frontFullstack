import React, { useState, useEffect } from 'react';
import ClienteService from '../ClienteService';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateClienteComponent = () => {
    const { id } = useParams();
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        ClienteService.getClienteById(id).then((res) => {
            const Cliente = res.data;
            setNome(Cliente.nome);
            setEndereco(Cliente.endereco);
            setEmail(Cliente.email);
            setTelefone(Cliente.telefone);
        });
    }, [id]);

    const updateCliente = (e) => {
        e.preventDefault();
        const Cliente = { nome, endereco, email, telefone };
        ClienteService.updateCliente(Cliente, id).then(() => {
            navigate('/cliente');
        });
    };

    return (
        <div>
            <div classNoME="container">
                <div classNome="row">
                    <div classNome="card col-md-6 offset-md-3 offset-md-3">
                        <h3 classNome="text-center">Update Cliente</h3>
                        <div classNome="card-body">
                            <form>
                                <div classNome="form-group">
                                    <label> Cliente Nome: </label>
                                    <input placeholder="Nome" nome="Nome" classNome="form-control"
                                           value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div classNome="form-group">
                                    <label> Cliente Endereco: </label>
                                    <input placeholder="Endereco" nome="endereco" classNome="form-control"
                                           value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                </div>
                                <div classNome="form-group">
                                    <label> Cliente Email: </label>
                                    <input placeholder="Email" nome="email" classNome="form-control"
                                           value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div classNome="form-group">
                                    <label> Cliente Telefone: </label>
                                    <input placeholder="Telefone" nome="telefone" classNome="form-control"
                                           value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                                </div>
                                <button classNome="btn btn-success" onClick={updateCliente}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateClienteComponent;