import { ENV } from "../components/utils/constants"
// import axios from 'axios'
export class Coins {
async RealTimePice(
    coin: string = 'etheur@trade',
    ) {
        const ws = new WebSocket(`${ENV.Websocket_Api_URL}/${coin}`)
        ws.onmessage = (event) => {
            const stockObject = JSON.parse(event.data)
            const price = parseFloat(stockObject.p).toFixed(2)
            return price
        }
    }
  async GetList(
    selectedCoins: string = `"BTCUSDT","ETHUSDT","LTCUSDT","BNBUSDT","NEOUSDT","GASUSDT"`,
  ) {
    const url = `${ENV.Api_URL}${ENV.Api_route.priceList}?symbols=[${selectedCoins}]`
    
    try {
    const params = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    }
      const response = await fetch(url, params)
      if (response.status === 200) {
        const result = await response.json()
        result.ok = '1'
        return result
      }
    } catch (error) {
      const msj = {
        ok: 0,
        message: error
      }
      return msj
    }
  }
  async GetKlines(
    symbol: string = `"BTCUSDT"`,
    interval: string = `"1d"`,
  ) {
    try {
      const url = `${ENV.Api_URL}${ENV.Api_route.klines}?symbol=${symbol}&interval=${interval}`
      
      const params = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };
      const response = await fetch(url, params)
      if (response.status === 200) {
        const result = await response.json()
        result.ok = '1'
        return result
      }
    } catch (error) {
      const msj = {
        ok: 0,
        message: error
      }
      return msj
    }
  }
}