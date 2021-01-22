import React, { memo, useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import Board from "./components/Board";
import Panel from "./components/Panel";

import imglogo from "../../assets/images/logo-covid.png";

import { ContainerStyled, ImageLogo, LogoContainer, TextApp } from "./styles";
import Footer from "./components/Footer/index";

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("brazil");
  const updatedAt = new Date().toLocaleString();

  const getDataCovid = useCallback((country) => {
    api
      .get(`countries/${country}`)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getDataCovid(country);
  }, [getDataCovid, country]);

  const handleChangeSelect = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };
  return (
    <>
      <ContainerStyled>
        <LogoContainer>
          <ImageLogo src={imglogo} alt="logo" />
          <TextApp>Covid Statistics</TextApp>
        </LogoContainer>
        <div className="ab.2">
          <Panel
            data={data}
            updatedAt={updatedAt}
            onChange={handleChangeSelect}
            country={country}
            getInfoCovid={getDataCovid}
          />
        </div>
        <Board data={data} />
      </ContainerStyled>
      <Footer />
    </>
  );
}

export default memo(Main);
