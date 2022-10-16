export const FormatadorService = {
    valorMonetario(valor:number):string{
       return  valor.toLocaleString('pt-BR', 
       
       {
        minimumFractionDigits:2,
        style:'currency',
        currency:'BRL'
       }
      );
    },
    LimitarTexto(texto:string):string{
        if(texto.length < 50){
            return texto;
        }
       
        return texto.slice(0, 50) + '...'

    }

}