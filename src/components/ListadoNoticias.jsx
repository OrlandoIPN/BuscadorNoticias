import Grid from "@mui/material/Grid";
import Typografy from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();
  // cada pagina es de 20 noticias , por eso se divide en 20  y el math.ceil es para redondear hacia arriba las páginas
  const totalPaginas = Math.ceil(totalNoticias / 20);
  return (
    <>
      <Typografy textAlign={"center"} marginY={5} variant="h3" component={"h2"}>
        Ultimas Noticias
      </Typografy>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>
      {/* el stack es como un div que nos permite pocisionar elementos hijos  */}
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        marginY={5}
      >
        <Pagination
          count={totalPaginas}
          color="primary"
          onChange={handleChangePagina}
          page={pagina}
        />
      </Stack>
    </>
  );
};

export default ListadoNoticias;
