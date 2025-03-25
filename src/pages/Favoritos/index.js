import { useFavoritoContext } from 'contexts/Favoritos';
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./Favoritos.module.css";

function Favoritos(){
  const { favorito } = useFavoritoContext();
    return (
        <>
          <Banner imagem={"favoritos"} />
          <Titulo>
            <h1>Favoritos</h1>
          </Titulo>
          <section className={styles.container}>
            {favorito.map((video) => {
              return (
                <Card
                  {...video}
                />
              );
            })}
          </section>
        </>
    )
}

export default Favoritos;