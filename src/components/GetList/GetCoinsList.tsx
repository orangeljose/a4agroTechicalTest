import { useEffect, useState } from "react"
import { Coin } from "../../interfaces/interfaces"
import { Coins as CoinsClass} from "../../services/Coins"
import { CustomCard } from '../ui/index' 
import  Loader from '../Loader/Loader'

const GetCoinsList = () => {
    const [showLoader, SetShowLoader] = useState<boolean>(true)
    const [coins, setCoins] = useState<Coin[]>([])
    
    let isMounted = false
    useEffect(() => {
        if (!isMounted) {
            (async () => {
                isMounted = true
                try {
                    const coinController = new CoinsClass()
                    const response = await coinController.GetList()
                    SetShowLoader(false)
                    console.log('response', response)
                    if(response.ok === '1')setCoins(response)                    
                } catch (error) {
                    console.error(error)
                }
            })()
        }
    }, [])
  if(showLoader) return <div className="col-span-2 md:col-start-2"><Loader/></div>
  console.log('coins', coins)
  if(coins.length === 0 || coins === undefined){
    return (
        <h1 className="col-span-1 md:col-start-2 text-xl leading-normal font-medium text-red-600">
            Oops, there are no results to show
        </h1>
    )
  }else{
    console.log('coins', coins)
    return (
        <>
            {coins && coins.length > 0 && coins.map((coin, index) => (
                <div className="w-full flex justify-center" key={index}>
                    <CustomCard key={index} coin={coin} />
                </div>
            ))}

            <div className="col-span-1 md:col-start-2 text-center">
                <h6 className="mb-4 text-lg font-medium leading-tight">
                    My favorite cryptocurrencies 
                </h6>
                <p className="mb-4 text-lg font-medium leading-tight">
                    (I tried trading. It didnt end well)
                </p>
            </div>
        </>
      )
  }
}

export default GetCoinsList