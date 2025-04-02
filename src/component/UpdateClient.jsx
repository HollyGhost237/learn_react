import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const UpdateClient = () => {
    const { id } = useParams();//récupération id du client à modifier
    const [clients, setClient] = useState({ nom: '', tel: '', adresse: '' });
    const navigate = useNavigate();
    useEffect(() => {
        const fetchClient = async () => {
            const response = await axios.get(`http://localhost:3001/clients/${id}`);
            setClient(response.data);//récupération infos du client à modifier
        };
        fetchClient();
    }, [id]);
    const handleUpdate = async () => {
        await axios.put(`http://localhost:3001/clients/${id}`, clients);
        navigate('/clients', { replace: true });//retour à la liste
    };
    return (
        <div>
            <h1>Mettre à jour le client</h1>
            <form>
                <label>Nom du client:</label>
                <input type="text" value={clients.nom} onChange={(e) => setClient({ ...clients,
                nom: e.target.value })} /><br/>
                <label>Téléphone:</label>
                <input type="text" value={clients.adresse} onChange={(e) => setClient({
                ...clients, adresse: e.target.value })} /><br/>
                <label>Adresse:</label>
                <input type="text" value={clients.tel} onChange={(e) => setClient({ ...clients,
                tel: e.target.value })} /><br/>
                <button onClick={handleUpdate}>Mettre à jour</button>
            </form>
        </div>
    );
};
export default UpdateClient;