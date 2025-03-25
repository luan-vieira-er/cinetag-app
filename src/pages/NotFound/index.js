import styles from "./NotFound.module.css";

function NotFound(){
    return (
        <>
          <section className={styles.container}>
            <h2>O filme que você procurava não foi encontrado</h2>
          </section>
        </>
    )
}

export default NotFound;