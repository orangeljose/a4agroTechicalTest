import { useEffect, useState } from "react"
import { Coin } from "../../interfaces/interfaces"
import { Coins as CoinsClass} from "../../services/Coins"
import { CustomCard } from '../ui/index' 
import  Loader from '../Loader/Loader'

const GetCoinsList = () => {
    const [coins, setCoins] = useState<Coin[]>();
    useEffect(()=>{ 
    (async ()=>{
        try {
            setCoins(undefined)
            const coinController = new CoinsClass
            const response = await coinController.GetList()
            setCoins(response)
        } catch (error) {
            console.error(error);
            
        }
    })()
    },[]);    
  if(!coins) return <Loader/>
  if(coins.length === 0) return "No hay Resultados para esto"
  return (
    <>
        {coins.map((coin, index) => (
        <CustomCard key={index} coin={coin} />
        ))}
    </>
  )
}

export default GetCoinsList