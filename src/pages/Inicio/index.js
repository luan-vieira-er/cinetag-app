import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./Inicio.module.css";
import { useState, useEffect } from "react";

function Inicio(){
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/luan-vieira-er/cinetag-json-api/videos")
      .then((resposta) => resposta.json())
      .then((videos) => setVideos(videos));
  }, []);
  
    return (
        <>
          <Banner imagem={"home"} />
          <Titulo>
            <h1>Um lugar para guardar seus vídeos e filmes!</h1>
          </Titulo>
          <section className={styles.container}>
            {videos.map((video) => {
              return (
                <Card
                  key={video.id}
                  id={video.id}
                  titulo={video.titulo}
                  capa={video.capa}
                  link={video.link}
                />
              );
            })}
          </section>
        </>
    )
}

export default Inicio;