import React, { memo } from "react";
//import PropTypes from "prop-types";
import { Grid, Skeleton } from "../../../../components";
import Card from "../Card";

function Board({ data }) {
  const {
    cases,
    todayCases,
    active,
    casesPerOneMillion,
    todayDeaths,
    deaths,
    deathsPerOneMillion,
    recovered,
  } = data;

  const getValue = (value) =>
    value ? value : <Skeleton variant="text" width={182} height={60} />;

  return (
    <Grid container spacing={4} top={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#3A033F" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#150866" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(active)} label="Casos ativos" color="#E95920" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(casesPerOneMillion)} label="Casos/milhão-Hab" color="#BF349D" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#000" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(deaths)}
          label="Total de óbitos"
          color="#FB0000"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(recovered)}
          label="Total de recuperados"
          color="#09F44B"
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card
          value={getValue(deathsPerOneMillion)}
          label="Óbitos/milhão-Hab"
          color="#1B1414"
        />
      </Grid>
    </Grid>
  );
}

export default memo(Board);
