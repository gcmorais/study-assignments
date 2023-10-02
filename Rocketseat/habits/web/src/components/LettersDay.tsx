interface TituloProps {
    titulo: string
}

export function LettersDay({ titulo }: TituloProps){
    return (
        <div className="text-zinc-400 text-xl h-10 w-10 font bold flex items-center justify-center">
          {titulo}
        </div> 
    )
           
}