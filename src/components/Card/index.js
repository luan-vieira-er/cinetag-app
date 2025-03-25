import { useFavoritoContext } from 'contexts/Favoritos';
import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png';
import iconeDesfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({id, titulo, capa}) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const isFav = favorito.some((fav) => fav.id === id);
    const icone = isFav ? iconeDesfavoritar : iconeFavoritar;
    return (
        <div className={styles.container}>
            <Link to={`/play/${id}`} className={styles.link}>
                <img src={capa} alt={titulo} className={styles.capa}></img>
                <h2>{titulo}</h2>
            </Link>
            <img
                src={icone}
                className={styles.favoritar}
                alt='Favoritar filme'
                onClick={() => adicionarFavorito({id, titulo, capa})}
            />
        </div>
    );
}

export default Card;

