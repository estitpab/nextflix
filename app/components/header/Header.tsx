import { Logo } from "./Logos";

const Header = () => {
    return(
        <header className="items-center flex h-[68px] relative transition-[background-color] duration-[0.4s] px-[4%] py-0">
            <a href="#"><Logo/></a>
            <ul className="flex items-center ml-5">
                <li className="list-none ml-[18px]"><a href="#" className="text-sm font-light items-center text-neutral-200 flex h-full relative transition-[color] duration-[0.4s] hover:text-white">Accueil</a></li>
                <li className="list-none ml-[18px]"><a href="#" className="text-sm font-light items-center text-neutral-200 flex h-full relative transition-[color] duration-[0.4s] hover:text-white">Séries</a></li>
                <li className="list-none ml-[18px]"><a href="#" className="text-sm font-light items-center text-neutral-200 flex h-full relative transition-[color] duration-[0.4s] hover:text-white">Films</a></li>
                <li className="list-none ml-[18px]"><a href="#" className="text-sm font-light items-center text-neutral-200 flex h-full relative transition-[color] duration-[0.4s] hover:text-white">Nouveautés les plus regardées</a></li>
                <li className="list-none ml-[18px]"><a href="#" className="text-sm font-light items-center text-neutral-200 flex h-full relative transition-[color] duration-[0.4s] hover:text-white">Ma liste</a></li>
                <li className="list-none ml-[18px]"><a href="#" className="text-sm font-light items-center text-neutral-200 flex h-full relative transition-[color] duration-[0.4s] hover:text-white">Explorer par langue</a></li>
            </ul>
        </header>
    )
}

export default Header;