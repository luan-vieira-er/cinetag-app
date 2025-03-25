import Banner from "components/Banner";
import Titulo from "components/Titulo";
import styles from "./Player.module.css";
import { useParams } from 'react-router-dom';
import NotFound from 'pages/NotFound';
import { useState, useEffect } from "react";

function Player(){
  const params = useParams();
  const [video, setVideo] = useState([]);
  
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/luan-vieira-er/cinetag-json-api/videos/${params.id}`)
      .then((resposta) => resposta.json())
      .then((video) => setVideo(video));
  }, []);

  if (!video || Object.keys(video).length === 0) return <NotFound />
    return (
        <>
          <Banner imagem={"player"} />
          <Titulo>
            <h1>Player</h1>
          </Titulo>
          <section className={styles.container}>
            <iframe
              width="100%"
              height="100%"
              src={video.link}
              title={video.titulo}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </section>
        </>
    )
}
  

export default Player;