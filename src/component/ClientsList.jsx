/**
 * @param {}
 */

import { useState, useEffect  } from "react";
import axios from "axios"
import { Link, redirect, useNavigate } from "react-router-dom";

    export const ClientsList = () => {
        const [ clients, setClient] = useState([])
        const navigate = useNavigate();

        const fetchData = async() =>{
            const response = await axios.get('http://localhost:3001/clients');
            setClient(response.data)
        }
        useEffect(() =>{fetchData();}, [])

        const handleDelete = async (id) =>{
            await axios.delete(`http://localhost:3001/clients/${id}`);
            fetchData;
            setClient(clients.filter(clients => clients.id !== id));
        }
        return <>
        <div>
            <center>
                <h1>Liste des clients</h1>
                <Link to={`/clients/create`}><button>Ajouter</button></Link><br /><br />
                <table style={{border: '1 solid black'}}>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Telephone</th>
                            <th>Adresse</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td><Link to = {`/clients/${client.id}`}>{client.nom}</Link></td>
                                <td>{client.tel}</td>
                                <td>{client.adresse}</td>
                                <td>
                                    <Link to = {`/clients/${client.id}/update`}>
                                        <button style={{backgroundColor: 'purple'}}>Modifier</button>
                                    </Link>
                                    <button style={{backgroundColor: 'red'}} onClick={() =>handleDelete(client.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </center>
        </div>
    </>
    };

    