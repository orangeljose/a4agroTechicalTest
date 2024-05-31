import { useParams } from 'react-router-dom'
import CandleChart from './../components/Kline/CandleChart'
import CustomSelect from './../components/ui/CustomSelect'
import { Chart, SelectArray } from "../interfaces/interfaces"
import { useEffect, useState } from "react"

const Search = () => {
    const [chart, setChart] = useState<Chart>({symbol:'', interval:'1d', title:'CandleStick Chart'});
    const params = useParams();
    const { query = "" } = params;
    const [selectedValue, setSelectedValue] = useState<string>('1d');
    const [isGraph, setIsGraph] = useState<boolean>(false);
    const handleSelectChange = (value: string) => {
      setSelectedValue(value);
    }
    const handleGraph = (value: boolean) => {
      setIsGraph(value);
    }

    const [clickedBack, setClickedBack] = useState(false);

    const items:SelectArray = [
      {key:'6h', value:'6 Hours'},
      {key:'1d', value:'1 Day'},
      {key:'3d', value:'3 Day'},
      {key:'1w', value:'1 Week'},
      {key:'1M', value:'1 Month'},
    ]

    useEffect(() => {
      if (clickedBack) {
        window.history.back();
      }
    }, [clickedBack]);

    useEffect(() => {
      setChart(prevState => ({
      ...prevState,
        interval: selectedValue,
        symbol: query, 
        title: `${query} Pair Chart`
      }));
    }, [query, selectedValue]);
    
  return (
    <>
      {isGraph &&
        <div className='flex justify-between w-full mb-1'>
          <button onClick={() => setClickedBack(true)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11 h-11 mr-2 max-w-xl mt-6">&larr;</button>
          <CustomSelect items={items} onChange={handleSelectChange} name={'interval'} description={'Select an interval'}/>
        </div>
      }
      <CandleChart chart={chart} exist={handleGraph}/>
    </>
  )
}

export default Search