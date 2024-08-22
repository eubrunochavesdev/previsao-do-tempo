import './ApiInformacoes.css'

function ApiInformacoes({ weather }){
   
    

    return (
        <div className='apiContainer'>
            <h2>{weather.name}</h2>

            <div className='apiInfo'>
                <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} />
                <p className='temperature'>{Math.round (weather.main.temp)}ºC</p>
            </div>

            <p className='description'>{weather.weather[0].description}</p>

            <div className='details'>
                <p>Sensação: {Math.round (weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>

        </div>
    )
}

export default ApiInformacoes