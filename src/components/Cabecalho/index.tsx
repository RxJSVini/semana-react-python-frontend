import React from "react";
import { CabecalhoContainer, Logo } from "./Cabecalho.style";

const Cabecalho = () =>{
    return(
        <CabecalhoContainer>
            <div>
                <Logo src="images/myteacher.png"></Logo>
            </div>
            <p>Encontre o professor pefeito!</p>
        
        </CabecalhoContainer>
    )
}
export default Cabecalho;