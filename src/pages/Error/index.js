import './error.css';
import { Link } from 'react-router-dom';

export default function Errpr() {
    return (
        <div className='container-error'>
            <img src="error.png" alt="Página não encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}