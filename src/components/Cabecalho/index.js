import { Link } from "react-router-dom";
import CabecalhoLink from "../CabecalhoLink";
import logo from './logo.png';
import styles from './Cabecalho.module.css';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    );
}

export default Cabecalho;

