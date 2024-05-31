import { Coin } from "../../interfaces/interfaces"
import { Link } from 'react-router-dom'

const CustomCard = (props:{coin:Coin}) => {
  const {coin} = props
  return (
    <div className="rounded-lg bg-gray-100 p-6 text-surface shadow-md dark:bg-surface-dark dark:text-white text-center w-[220px] h-[180px] grid">
      <h5 className="mb-2 text-xl font-medium leading-tight">{coin.symbol}</h5>
      <p className="mb-4 text-base">
        ${parseFloat(coin.price).toFixed(2)}
      </p>
      <Link to={`/search/${coin.symbol}`} className="inline-block rounded bg-blue-700 px-6 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-primary-100 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong text-center">
        View Graph
      </Link>
    </div>
  )
}

export default CustomCard