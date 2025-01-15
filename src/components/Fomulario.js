import { useState } from "react";
import '../styles/global.css'

export default function Formulario({agregarTarea}){

    const [input,setInput] = useState('')

    const handleSumit = (e) =>{
        e.preventDefault();
        if(input.trim()){
            console.log('Enviando tarea:', input);
            agregarTarea(input.trim());
            setInput('');
        }
    };

    return(
        <form onSubmit={handleSumit} >
            <input 
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                placeholder="Nueva Tarea"
            />
            <button type="submit" >Agregar</button>

        </form>
    )

}