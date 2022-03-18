import React, { memo } from "react"
import RefleshIcon from '../../../assets/img/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'
import { render } from "react-dom"


const navigatorHasShare = navigator.share

function Panel({updateAt, onChange, data, country, getCovidData}){
  const { cases, recovered, deaths, todayCases, todayDeaths } = data

  const renderCountries = (country, index) => (
    <MenuItem key={`country - ${index}`} value={country.value}>
      <ItemStyled>
        <div> {country.label}</div>
        <img src={country.flag} alt= {`Pais- ${country.label}`}/>
      </ItemStyled>
    </MenuItem>
  )
  console.log(data)
  const textCovid19 = `País: ${country} \rMorreram ${deaths} por Covid-19 confirmado ${cases} casos de covid-19 até agora. `

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19)
  }

  const shareInfo = () => {
    navigator.share({
      title:`Dados do Covid-19 - ${country}`,
      text: textCovid19,
      url: 'http://192.168.15.8:3000'
    })
  }
  
  const renderShareButton = (
    <div>
      <Button variant='contained' color='primary' onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  )

  const renderCopyButton = (
    <div>
      <Button variant='contained' color='primary' onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  )
  


  return(
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID-19 </Typography>
          <Typography variant="h6" component="span" color="primary"> Painel </Typography>
          <Typography variant="body2" component="span" color="primary"> Atualizado em: {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>

        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  )
}


export default memo(Panel)
