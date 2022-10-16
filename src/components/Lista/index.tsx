import React, { useState } from "react";
import {
  ListaStyled,
  ItemLista,
  Foto,
  Informacoes,
  Nome,
  Valor,
  ListaVazia,
  Descricao,
} from "./Lista.style";
import { Button } from "@mui/material";

import { Professor } from "../../@types/professor"; 

import { FormatadorService } from "../../services/formatadorService";


interface ListProps {
    professores:Professor[];
    onSelect:(professor:Professor) => void;
}
const Lista = (props:ListProps) => {
  return (
     <div>
        {props.professores.length > 0 ? (
                <ListaStyled>
                {props.professores.map((professor) => (
                  <ItemLista key={professor.id}>
                    <Foto src={professor.foto} />
                    <Informacoes>
                      <Nome>{professor.nome}</Nome>
                      <Valor>{FormatadorService.valorMonetario(professor.valor_hora)}</Valor>
                      <Descricao>{FormatadorService.LimitarTexto(professor.descricao)}</Descricao>
                      <Button 
                        sx={{ width: "70%" }} 
                        onClick={() => props.onSelect(professor)} 
                        >
                        Marcar Aula com {professor.nome}
                        
                      </Button>
                    </Informacoes>
                  </ItemLista>
                ))}
              </ListaStyled>

        ):(
            <ListaVazia>
               Até o momento, não há instrutores disponiveis.
            </ListaVazia>

        )}
     </div>
  );
};
export default Lista;
