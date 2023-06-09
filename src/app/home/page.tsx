'use client'

import Image from "next/image"
import Logo from "public/img/logo.png"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import {faRectangleList} from "@fortawesome/free-solid-svg-icons"
import {faBox} from "@fortawesome/free-solid-svg-icons"
import {faUsers} from "@fortawesome/free-solid-svg-icons"
import {faPowerOff} from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

type Props = {
    label: string,
    icon?: any,
    clas?: string
}

export default function Home(){ 

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMobileMenuVisible(window.innerWidth <= 640);
        };
    
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    function NavOption({icon,clas,label}:Props){
        return(
            <div className={`flex px-10 items-center text-[18px] mt-10 ${isMenuOpen? `px-5 ${clas}` : "" }`}>
                <FontAwesomeIcon className="cursor-pointer max-sm:flex mr-5" color={isMenuOpen? "white" : "white"} height={25} width={25} icon={icon} />
                <Link className="text-white" href='/texto'>{label}</Link>
            </div>
        )
    }

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
                <div className="hidden max-sm:block max-sm:flex max-sm:items-center">
                    {isMenuOpen ? (
                        <FontAwesomeIcon
                        onClick={toggleMenu}
                        className="cursor-pointer h-[25px] z-40"
                        color="white"
                        icon={faTimes}
                        beat
                        />
                    ) : (
                        <FontAwesomeIcon
                        onClick={toggleMenu}
                        className="cursor-pointer h-[25px]"
                        color="white"
                        icon={faBars}
                        
                        />
                    )}
                </div>
            </div>
            {isMobileMenuVisible ? (
                isMenuOpen && 
                    <div className="w-[220px] bg-roxo text-white h-screen absolute top-0 right-0 shadow-xl duration-300">
                        <div className="h-[80px] leading-[80px]">
                            <NavOption label="User" icon={faUser} clas="mt-[0px]"  />
                        </div>
                        <div className="">
                            <NavOption label="Início" icon={faHouse}/>
                            <NavOption label="Pedidos" icon={faRectangleList}/>
                            <NavOption label="Produtos" icon={faBox}/>
                            <NavOption label="Clientes" icon={faUsers}/>
                            <NavOption label="Sair" icon={faPowerOff} clas="mt-16"/>
                        </div>
                    </div>
            ):
            null}
        </main>
    )
}

