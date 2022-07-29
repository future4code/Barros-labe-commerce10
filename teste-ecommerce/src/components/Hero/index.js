import React, { useState } from "react";
import Navbar from "../Navbar/header";
import Sidebar from "../Carrinho/Sidebar";
import { HeroContainer,HeroBtn,HeroContent,HeroH1,HeroItens,HeroP } from './HeroElements';


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            
            <HeroContent>
                <HeroItens>
                    <HeroH1>Conquiste seu próprio universo!</HeroH1>
                    <HeroP>Porque o céu nunca foi o limite.</HeroP>
                    <HeroBtn>Montar minha frota</HeroBtn>
                </HeroItens>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;