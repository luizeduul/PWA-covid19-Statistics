import React, { memo } from "react";
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "../../../../components";
import COUNTRIES from "../../../../commons/constants/countries";
import {
  ItemStyled,
  CardPanelContentStyled,
  ContainerDescriptionPanel,
} from "../styles";

const handleNavigatorHasShare = navigator.share;

function Panel({ updatedAt, onChange, data, country, getInfoCovid }) {
  // eslint-disable-next-line no-unused-vars
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País - ${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  const textCovid19 = 
          `País: ${country} - total de casos: ${cases} , 
          total de óbitos: ${deaths} recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };
  const shareInfo = () => {
    navigator.share({
      title: `Dados da covid 19 - ${country}`,
      text: textCovid19,
      url: `https://faicovidstatistcs.netlify.app/`,
    });
  };

  const renderShareButton = (
    <div>
      <Button variant="contained" color="primary" onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant="container" color="primary" onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card className="mb-1">
      <CardPanelContentStyled>
        <div>
          <ContainerDescriptionPanel>
            <Typography variant="h5" component="h5">
              Painel Covid-19
            </Typography>
            <Typography variant="body2" component="span">
              Atualizado em : {updatedAt}
            </Typography>
          </ContainerDescriptionPanel>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
        {handleNavigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
