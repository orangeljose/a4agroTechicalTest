import ReactApexChart from "react-apexcharts"
import { useState, useEffect } from "react"
import { Coins as CoinsClass} from "../../services/Coins"
import { Chart } from "../../interfaces/interfaces"
import { ApexOptions } from "apexcharts"
import Loader from './../Loader/Loader'

const CandleChart = (props:{chart:Chart, exist: (selectedValue: boolean) => void}) => {

const { chart, exist } = props
interface ApiResponse {
    x: number;
    y: [number, number, number, number];
  }
  const [showLoader, SetShowLoader] = useState<boolean>(true)
  const [series, setSeries] = useState<ApiResponse[]>([])
    useEffect(() => {
      (async () => {
        try {
          if (!chart.symbol) return // Verifica si chart.symbol tiene un valor
    
          const coinController = new CoinsClass()
          const response = await coinController.GetKlines(chart.symbol, chart.interval)
          const formattedData: ApiResponse[] = []
          if( response && response.ok === '1' && response.length > 0){
            for (const item of response) {
              const x: number = Number(item[0])
              const y: [number, number, number, number] = [
                Number(item[1]),
                Number(item[2]),
                Number(item[3]),
                Number(item[4])
              ]
      
              formattedData.push({ x, y })
            }            
          }
          SetShowLoader(false)
          setSeries(formattedData)        
          if (formattedData.length > 0) {
            exist(true)
          } else {
            exist(false)
          }
        } catch (error) {
          console.error(error)
        }
      })()
    }, [chart, exist])

  const options:ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: chart.title,
      align: 'left',
      style: {
        fontSize: '24px'
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  const state = {
    series: [{
        data: series || []
      }],
      options: options,
  }

  if(showLoader) return <Loader/>
  if(series.length === 0 || series === undefined) {
    return( 
      <h1 className="text-xl leading-normal font-medium text-red-600">
        No data found to graph, try again later.
      </h1>
    )
  }
  else{
    return (
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="candlestick"
        height={550}
        width={1200}
      />
    )
  }

}

export default CandleChart