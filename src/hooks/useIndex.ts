import { useEffect, useState } from "react";
import { Professor } from "../@types/professor";
import { api } from "../services/api";

export  function useIndex(){
    let [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    let [nome, setNome] = useState<string>('');
    let [email, setEmail] = useState<string>('');
    let [professorSelecionado, setProfessorSelecionado] = useState<null | Professor>(null);
    let [mensagem, setMensagem] = useState<string>('');

    useEffect(() =>{
        api.get('/professores')
        .then((response) =>{
            setListaProfessores(response.data);
        })
        .catch((error) =>{
            console.log(error)
        })

    }, [])


    useEffect(() =>{
        limparFormulario();

    }, [professorSelecionado])


    function limparFormulario():void{
        setNome('');
        setEmail('');

    }

    function marcarAula():void{
        if(professorSelecionado != null){
            if(validarDadosAula()){
                api.post(`/professores/${professorSelecionado.id}/aulas`, {
                    nome,
                    email
                }).then(() =>{
                    setProfessorSelecionado(null);
                    setMensagem('Aula marcada com sucesso!')
                }).catch((error ) =>{
                    setMensagem(error.response?.data.message)
                })
            } else {
                setMensagem("Preencha os dados corretamente para marcar sua aula.")
            }
        }
    }

    function validarDadosAula():boolean{
        return nome.length > 0 && email.length > 0;
    }

    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensagem,
        setMensagem
    };
}