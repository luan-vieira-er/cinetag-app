import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import Container from "components/Container";
import { Outlet } from "react-router-dom";
import FavoritosProvider from "contexts/Favoritos";

function PaginaBase(){
  
    return (
        <main>
          <Cabecalho />
          <FavoritosProvider>
              <Container>
                <Outlet />
              </Container>
          </FavoritosProvider>
          <Rodape />
        </main>
    )
}

export default PaginaBase;