import { useEffect } from "react";
import { FlexContent } from "../../../styles/UI";
import Chip from "../../components/Chip";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";


type DataProps = {
  name: string;
  id: number;
};

const Home = () => {
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
          <h1>Que tipo de filme quer ver hoje?</h1>
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
