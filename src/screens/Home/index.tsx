import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlexContent } from "../../../styles/UI";
import Chip from "../../components/Chip";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import { add, remove } from "../../config/actions/genres";
import { RootState } from "../../config/configureStore";

type DataProps = {
  name: string;
  id: number;
};

const Home = () => {
  const teste = useSelector((state: RootState) => state.genres);
  const dispatch = useDispatch();
  console.log(teste);
  const { data, loading, error, request }: any = useFetch();

  useEffect(() => {
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
          <h1>{teste.selectedItems}</h1>
          <button onClick={() => dispatch(add())}>mais</button>
          <button onClick={() => dispatch(remove())}>menos</button>
          <FlexContent justify="center">
            {data?.genres?.map(({ name, id }: DataProps) => (
              <Chip name={name} key={id} />
            ))}
          </FlexContent>
        </>
      )}
    </FlexContent>
  );
};

export default Home;
