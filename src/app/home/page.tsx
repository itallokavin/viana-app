import Image from "next/image"
import Logo from "public/img/logo.png"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faRectangleList} from "@fortawesome/free-solid-svg-icons"
import {faBox} from "@fortawesome/free-solid-svg-icons"
import {faUsers} from "@fortawesome/free-solid-svg-icons"
import {faPowerOff} from "@fortawesome/free-solid-svg-icons"

type Props = {
    label: string,
    icon?: any,
    href?: URL
}

function NavOption({icon,href,label}:Props){
    return(
        <div className="flex px-10 items-center text-[18px] mt-10">
            <FontAwesomeIcon className="cursor-pointer max-sm:flex mr-5" color="white" height={25} width={25} icon={icon} />
            <Link className="text-white" href='/texto'>{label}</Link>
        </div>
    )
}

export default function Home(){ 
    return(
        <main className="flex flex-col min-h-screen">
            <div className="flex flex-col bg-roxo w-[250px] h-screen max-sm:w-full max-sm:h-[80px] max-sm:flex-row max-sm:justify-between max-sm:p-5 max-sm:items-center"> {/* Sidebar / Navbar */}
                <div className="flex justify-center items-center p-10 max-sm:p-0 max-sm:justify-start max-sm:h-full">
                    <Image alt="logo" src={Logo} className="max-sm:w-[120px]" priority />
                </div>
                <div className="max-sm:hidden">
                    <NavOption label="Início" icon={faHouse} />
                    <NavOption label="Pedidos" icon={faRectangleList} />
                    <NavOption label="Produtos" icon={faBox} />
                    <NavOption label="Clientes" icon={faUsers} />
                    <div className="absolute bottom-10">
                        <NavOption label="Sair" icon={faPowerOff} />
                    </div>
                </div>
                <div className="hidden max-sm:block">
                    <FontAwesomeIcon className="cursor-pointer" color="white" height={25} width={25} icon={faBars} />
                </div>
                
            </div>
        </main>
    )
}

