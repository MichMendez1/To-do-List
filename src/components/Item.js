import '../styles/global.css'

export default function Item({ tarea, alternarTarea, quitarTarea }) {
    return (
        <li>
            <span
                style={{ textDecoration: tarea.completado ? 'line-through' : 'none' }}
                
            >
                {tarea.texto}
            </span>
            <button onClick={() => alternarTarea(tarea.id)}>{tarea.completado ? 'no completado' : 'completar'}</button>
            <button onClick={() => quitarTarea(tarea.id)}>Eliminar</button>
        </li>
    )
}