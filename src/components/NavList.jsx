import { About, Award, Calendar, Football, Location, Rocket, Search, Social } from '../icons'
import { useAppStore } from '../store/AppStore'

const NavList = () => {
    const { showNavbar} = useAppStore(state => state)
  return (
    <ul className={`primary-navigation z-[2050] ${showNavbar && "abrir"}`}>

    <li className={`w-full h-[55px] mt-[-50px] lg:mt-0 mb-[25px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.2s]`}>
      <a href="/">
        <img src="/logo.png" className='w-[30px] h-[70px] object-cover' alt="logo" />
      </a>
    </li>
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.5s]`}>
        <Rocket />
        <a href="/inscripcion/">!Soy Nuevo!</a>
    </li>
       
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[0.8s]`}>
        <Calendar />
        <a href="/programacion/">Programación</a>
    </li>
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.1s]`}>
        <About />

        <a href="/about/">Acerca De</a>
    </li>
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.4s]`}>
        <Search />

        <a href="#explorar">Explorar</a>
    </li>
    <li className={`w-full h-[60px] lg:h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[1.7s]`}>
        <Football />

        <a href="#entrenamientos">Horarios de Entrenamiento</a>
    </li>
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2s]`}>
        <Award />

        <a href="#reconocimientos">Jugadores Destacados</a>
    </li>
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.3s]`}>
        <Location />

        <a href="#encuentranos">Ubicación</a>
    </li>
    <li className={`w-full h-[55px] flex items-center justify-start text-white font-normal ${showNavbar ? "appear" : "disappear"} transition-all duration-[2.6s]`}>
        <Social />
        <a href="#redes">Nuestras Redes</a>
    </li>

    </ul>
  )
}

export default NavList