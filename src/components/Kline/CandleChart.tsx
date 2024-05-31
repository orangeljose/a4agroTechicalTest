import ReactApexChart from "react-apexcharts"
import { useState, useEffect } from "react"
import { Coins as CoinsClass} from "../../services/Coins"
import { Chart } from "../../interfaces/interfaces";
import { ApexOptions, ApexAxisChartSeries } from "apexcharts";
import Loader from './../Loader/Loader'
// import { useNavigate, useSearchParams } from "react-router-dom";

const CandleChart = (props:{chart:Chart}) => {

const { chart } = props

interface ApiResponse {
    x: number;
    y: [number, number, number, number];
  }

//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
  const [interval, setInterval] = useState<string>(chart.interval)
//   const [candles, setCandles] = useState<Candle[]>([])
  const [symbol, setSymbol] = useState<string>(chart.symbol)
  const [series, setSeries] = useState<ApexAxisChartSeries>()
    // const changePage = (value:number) => {
    //     if (page >= 1) {
    //     const actualpage = page + value;
    //     setPage(actualpage);
    //     navigate(`?page=${actualpage}`); 
    //     }
    // }

    useEffect(() => {
        (async () => {
          try {
            const coinController = new CoinsClass();
            const response = await coinController.GetKlines(symbol, interval);  
            const formattedData: ApiResponse[] = [];

        for (const item of response) {
          const x: number = Number(item[0]);
          const y: [number, number, number, number] = [
            Number(item[1]),
            Number(item[2]),
            Number(item[3]),
            Number(item[4])
          ];

          formattedData.push({ x, y });
            }            
            setSeries(formattedData);
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          } catch (error) {
            console.error(error);
          }
        })();
      }, [symbol, interval]);

  const options:ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left'
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
        data: series
      }],
      options: options,
  };
  console.log('state', state)
  if(!state.series[0].data) return <Loader/>
  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="candlestick"
      height={550}
      width={1200}
    />
  );
};

export default CandleChart;