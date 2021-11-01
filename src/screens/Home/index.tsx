import { useCallback, useEffect, useState } from "react";
import Router from "next/router";
import { useDispatch } from "react-redux";

import { FlexContent, Spacing } from "../../../styles/UI";
import Chip from "../../components/Chip";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import { add } from "../../config/actions/genres";

import { Button, Wrapper } from "./styles";
import { routes } from "../../routes/routes";

type DataProps = {
  name: string;
  id: number;
};

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error, request }: any = useFetch();
  const [selected, setSelected] = useState([]);

  const handleSubmit = useCallback(() => {
    dispatch(add(selected));
    Router.push(routes.allMovies);
  }, [selected, dispatch]);

  useEffect(() => {
    dispatch(add([]));
    request(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=48c278a59589fa593d4cbec3598fec19&language=pt_BR",
      {}
    );
  }, [request]);

  return (
    <FlexContent direction="column" align="center" justify="center">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Spacing />
          <h1>O que você quer ver hoje?</h1>

          <Wrapper>
            {data?.genres?.map(({ name, id }: DataProps) => (
              <Chip
                name={name}
                id={id}
                key={id}
                selectedItems={selected}
                addItem={setSelected}
              />
            ))}
          </Wrapper>
          <Button onClick={handleSubmit}>Procurar</Button>
        </>
      )}
    </FlexContent>
  );
};

export default Home;
