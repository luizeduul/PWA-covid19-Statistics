import React, { memo, useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import Board from "./components/Board";
import Panel from "./components/Panel";

import { ContainerStyled } from "./styles";

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
  });

  useEffect(() => {
    getDataCovid(country)
  }, [getDataCovid, country]);

  const handleChangeSelect = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };
  return (
    <ContainerStyled>
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
  );
}

export default memo(Main);
