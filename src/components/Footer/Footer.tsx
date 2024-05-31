import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Link className="w-full mt-10 text-center h-16 flex items-center justify-center" target="_blank" to={'https://github.com/orangeljose/a4agroTechicalTest/'}>
    © Orangel Perez (OrangelJP) | Fullstack Developer
    </Link>
  )
}

export default Footer