import moment from "moment";
import { API_KEY } from "./api-key";
import { displayCard } from "./displayCard";

async function getEquityData(tickerSymbol, clearListBoolean) {
    let func = "TIME_SERIES_DAILY";
    // let symbol = "IBM";
    let symbol = tickerSymbol.toUpperCase();
    let interval = "1min";
    let url = `https://www.alphavantage.co/query?function=${func}&symbol=${symbol}&interval=${interval}&apikey=${API_KEY}`;

    let formattedDate = moment().subtract(1, 'days').format('YYYY-MM-DD').toString();

    try {
        const response = await fetch(url, {mode: 'cors'});
        const results = await response.json();
        let closePrice = results["Time Series (Daily)"][formattedDate]["4. close"];
        let openPrice = results["Time Series (Daily)"][formattedDate]["1. open"];
        let percentChange = ((closePrice - openPrice)/openPrice * 100);
        if (percentChange > 0) {
            percentChange = "+" + percentChange.toFixed(2).toString();
        } else {
            percentChange = percentChange.toFixed(2).toString();
        }
        

        console.log(results);
        
        closePrice = Number(closePrice).toFixed(2);

        console.log(`Price: $${closePrice} (${percentChange}%)`);

    
        displayCard(symbol,`Price: $${closePrice} (${percentChange}%)`, clearListBoolean);
    
    } catch(error) {
        console.log('Error! ' + error);
        displayCard('Invalid Request! Try again.')
    }

    
    


}



export {getEquityData}