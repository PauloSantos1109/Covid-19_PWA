import React, {memo} from "react";
import PropTypes from "prop-types";
import {Grid, Skeleton} from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data

  const getValue =  (value) =>   value ? value : <Skeleton variant="text" with = { 180 } height={ 60 }/>

  return (
    <Grid container spacing = {4} >
      <Grid item xs = { 12 } md = { 12 }>
        <Card value = { getValue( cases )} label = 'Total de casos' color="#5d78ff"/>
      </Grid>
      <Grid item xs = { 12 } md = { 3 }>
        <Card value = { getValue( deaths )} label = 'Total de Mortes' color="#E95078"/>
      </Grid>
      <Grid item xs = { 12 } md = { 3 }>
        <Card value = { getValue( todayCases )} label = 'Casos hoje' color="#000"/>
      </Grid>
      <Grid item xs = { 12 } md = { 3 }>
        <Card value = { getValue( todayDeaths )} label = 'Mortes hoje' color="#5d78ff"/>
      </Grid>
      <Grid item xs = { 12 } md = { 3 }>
        <Card value = { getValue( recovered )} label = 'Recuperados' color="#67c887"/>
      </Grid>
    </Grid>


    
  )
}

export default Board