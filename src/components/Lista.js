import Item from './Item';
import '../styles/global.css'


export default function Lista({tareas,alternarTarea,quitarTarea}){


    return(
        <ul>
            {tareas.map(tarea=>(
                <Item
                    key={tarea.id}
                    tarea={tarea}
                    alternarTarea={alternarTarea}
                    quitarTarea={quitarTarea}
                />
            ))}
        </ul>
    )
}