import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import du fichier CSS

export function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Bienvenue sur Admin</h1>
            <p>Gérez votre presonnel facilement avec notre application.</p>                <button onClick={() => navigate("/clients")}>Voir la liste du presonnel</button>
        </div>
    );
}
