"use client"
import { useState } from "react";
import Formulario from "@/components/Fomulario";
import Lista from "@/components/Lista";
import '../styles/global.css'


export default function Home() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    console.log('Añadiendo tarea:', tarea);
    setTareas([...tareas, { id: Date.now(), texto: tarea, completado: false }]);
    console.log('Estado de tareas actualizado:', tareas);
  };

  const alternarTarea = (id) => {
    setTareas(tareas.map(tarea=> 
      tarea.id === id ? {...tarea, completado : !tarea.completado} : tarea
    ));
  };

  const quitarTarea = (id) =>{
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };


  return (
    <div>
      <h1>To-Do list</h1>
      <Formulario agregarTarea={agregarTarea} />
      <Lista tareas={tareas} alternarTarea={alternarTarea} quitarTarea={quitarTarea} />
    </div>
  );
}
