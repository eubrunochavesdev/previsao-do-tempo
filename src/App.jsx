import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

import ApiInformacoes from './components/ApiInformacoes/ApiInformacoes'
import ApiInformacoes5Days from './components/ApiInformacoes5Days/ApiInformacoes5Days'


 function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()

  const inputRef = useRef()

  async function searchCity(event){
    if (event.key === 'Enter' || event.type === 'click') {
      const city = inputRef.current.value
      const key = "f767a1e7e2bfe4d18968d52e73439b36"

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
      const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

      const apiInfo = await axios.get(url)
      const apiInfo5Days = await axios.get(url5days)

      setWeather5Days (apiInfo5Days.data)
      setWeather (apiInfo.data)
    }

  }


  return (
    <div className='container'>
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder="Digite o nome da Cidade" onKeyDown={searchCity}/>
        <button onClick={searchCity}>Buscar </button>

        {weather && <ApiInformacoes weather={weather}/>}
        {weather5Days && <ApiInformacoes5Days weather5Days={weather5Days}/>}

    </div>
  )
}

export default App
