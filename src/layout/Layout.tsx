import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function Layout(props: Props) {
  const { children } = props
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center min-h-screen">
      <header>
        <Nav />
        <div className="my-10 flex justify-center">
          <h1 className="text-4xl leading-normal font-medium">Crypto Currency Dashboard</h1>
        </div>
      </header>
      <div className="w-full max-w-[1200px] mx-auto flex flex-col p-2.5 items-center box-border min-h-[65vh]">{children}</div>
      <footer className="w-full max-w-[1200px] mx-auto flex flex-col min-h-[10vh]"><Footer /></footer>
    </div>
  )
}