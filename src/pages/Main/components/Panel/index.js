import React, { memo } from "react";
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "../../../../components";
import COUNTRIES from "../../../../commons/constants/countries";
import { ItemStyled, CardPanelContentStyled } from "../styles";

const handleNavigatorHasShare = navigator.share;

function Panel({ updatedAt, onChange, data, country, getInfoCovid }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País - ${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = `País: ${country} - recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }
  const shareInfo = () => {
    navigator.share({
      title: `Dados da covid 19 - ${country}`,
      text: textCovid19,
      url: `https://covidferinhas.com.br`
    })
  }

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )
  
  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            Covid Statistics
          </Typography>
          <Typography variant="h6" component="span" color="primary">
            Painel coronavirus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            Atualizado em : {updatedAt}
          </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {handleNavigatorHasShare ? renderShareButton : renderCopyButton }
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
