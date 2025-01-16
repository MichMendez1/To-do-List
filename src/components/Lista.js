import Item from './Item';
import '../styles/global.css'


export default function Lista({ tareas, alternarTarea, quitarTarea }) {


    return (
        <div className='bg-white shadow-md rounded-md p-4' >
            {tareas.length === 0 ? (
                <p className='text-gray-500' >No hay tareas aun. Prueba agregar alguna</p>
            ) : (
                <ul className='space-y-2' >
                    {tareas.map(tarea => (
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
        </div>
    )
}