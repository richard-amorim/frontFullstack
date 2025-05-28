import React, { useState } from 'react';
import ClienteService from '../ClienteService';
import { useNavigate } from 'react-router-dom';

const AddClienteComponent = () => {
    const [nome,setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const navigate = useNavigate();

    const saveCliente = (e) => {
        e.preventDefault();
        const Cliente = { nome, endereco, email, telefone };
        ClienteService.createCliente(Cliente).then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Cliente</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Cliente Nome: </label>
                                    <input placeholder="Nome" name="nome" className="form-control"
                                           value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Cliente Endereco: </label>
                                    <input placeholder="Endereco" name="endereco" className="form-control"
                                           value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Cliente Email: </label>
                                    <input placeholder="Email" name="email" className="form-control"
                                           value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label> Cliente Telefone: </label>
                                    <input placeholder="Telefone" name="telefone" className="form-control"
                                           value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                                </div>
                                <button className="btn btn-success" onClick={saveCliente}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddClienteComponent;