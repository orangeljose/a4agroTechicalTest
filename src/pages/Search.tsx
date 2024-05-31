// import { useParams } from 'react-router-dom';
import CandleChart from './../components/Kline/CandleChart'
import { Chart } from "../interfaces/interfaces";

const chart:Chart = {symbol:'BTCUSDT', interval:'1d'}
const Search = () => {
    // const params = useParams();
    // const { query = "" } = params;

    
  return (
    // <SearchResults query={query} />
    <div className=''>
      <div className=''>
        <CandleChart chart={chart}/>
      </div>
    </div>
  )
}

export default Search