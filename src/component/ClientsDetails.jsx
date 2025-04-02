import axios from "axios";
import { useEffect, useState } from "react";
import { useParams,  Link, useNavigate } from "react-router-dom"

const ClientsDetails = () => {
    const {id} = useParams();
    const [ clients, setClient] = useState({});
    const history = useNavigate();

    useEffect(() => {
        const fetchClient = async() => {
            const response = await axios.get(`http://localhost:3001/clients/${id}`);
            setClient(response.data);
        };
        fetchClient();
    }, [id]);

    return (
        <div>
            <h1>Détails du client</h1>
            <p>Nom du client: {clients.nom}</p>
            <p>Adresse: {clients.adresse}</p>
            <p>Téléphone: {clients.tel}</p>
            <Link to={`/clients`}><button>Retour</button></Link>
        </div>
        );
        };
        export default ClientsDetails;