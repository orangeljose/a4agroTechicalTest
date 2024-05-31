import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className='flex w-full mx-auto max-w-screen-xl px-2.5 box-border justify-between items-center'>
      <div className='nav_logo no-underline font-pacifico font-sans text-6xl'><Link to={'/'}>A4AGRO</Link></div>
    </nav>
  )
}

export default Nav