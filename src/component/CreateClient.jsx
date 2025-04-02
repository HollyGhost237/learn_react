import axios from "axios";
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export const CreateClient = () => {
    const [ clients, setClient] = useState({ nom: '', adresse: '', tel: ''});
    const navigate = useNavigate();

    const handleCreate = async () => {
        await axios.post('http://localhost:3001/clients', clients);
        navigate('/clients', { replace: true });
    };
    return (
    <div>
        <center>
            <h1>Créer un nouveau client</h1>
            <form>
                <label>Nom du client : </label>
                <input type="text" value={clients.nom}
                    onChange={(e) => setClient({ ...clients, nom: e.target.value })} />
                <br/>
                <label>Adresse : </label>
                <input type="text" value={clients.adresse}
                    onChange={(e) => setClient({ ...clients, adresse: e.target.value })} />
                <br/>
                <label>Téléphone : </label>
                <input type="text" value={clients.tel}
                    onChange={(e) => setClient({ ...clients, tel: e.target.value })} />
                <br/>
                <button type="button" onClick={handleCreate}>Créer</button>
            </form>
        </center>
    </div>
    );
};