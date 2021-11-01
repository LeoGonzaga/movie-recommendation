import React, { useCallback, useEffect, useState } from "react";
import Router from "next/router";

import { useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { FlexContent } from "../../../styles/UI";
import Loading from "../../components/Loading";
import { RootState } from "../../config/configureStore";
import useFetch from "../../hooks/useFetch";
import {
  Banner,
  Button,
  Description,
  Name,
  Content,
  Container,
  Back,
} from "./styles";

const Movies: React.FC = () => {
  const selectedGenres = useSelector((state: RootState) => state.genres);
  const { data, loading, error, request }: any = useFetch();
  const [page, setPage] = useState(1);
  const [index, setIndex] = useState(0);

  const handleSubmit = () => {
    const indexPage = Math.floor(Math.random() * page);
    const indexItem = Math.floor(Math.random() * 21);
    setIndex(indexItem);
    request(
      `https://api.themoviedb.org/3/discover/movie?api_key=48c278a59589fa593d4cbec3598fec19&page=${indexPage}&language=pt_BR&with_genres=` +
        [...selectedGenres.selectedItems],
      {}
    );
  };

  const handleBack = useCallback(() => {
    Router.back();
  }, []);

  useEffect(() => {
    request(
      "https://api.themoviedb.org/3/discover/movie?api_key=48c278a59589fa593d4cbec3598fec19&page=1&language=pt_BR&with_genres=" +
        [...selectedGenres.selectedItems],
      {}
    );
  }, [request]);

  useEffect(() => {
    setPage(data.total_pages);
  }, [data]);

  return (
    <Container>
      <Back onClick={handleBack}>
        <IoIosArrowBack size="30px" />
        Voltar
      </Back>
      <FlexContent direction="column" align="center">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Content>
              <Banner
                width="100%"
                src={`https://image.tmdb.org/t/p/original/${
                  (data?.results?.length > 0 &&
                    data?.results[index]?.backdrop_path) ||
                  data?.results[index]?.poster_path
                }`}
                alt=""
              />
            </Content>
            <Name>
              {data?.results?.length > 0 && data?.results[index]?.title}
            </Name>
            <Description>
              {data?.results?.length > 0 && data?.results[index]?.overview}
            </Description>

            <Button onClick={handleSubmit}>
              <p>Quero outro</p>
            </Button>
          </>
        )}
      </FlexContent>
    </Container>
  );
};

export default Movies;
