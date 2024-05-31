import GetCoinsList from "../components/GetList/GetCoinsList"

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-12">
          <GetCoinsList />
      </div>
    </>
  )
}

export default Home