import React, { useEffect, useState } from 'react'

const Clock = () => {

  const [estado,setEstado] = useState({ fecha: new Date(),edad: 0,nombre: 'Martín',apellidos: 'San José' })

  const actualizarEstadodo = () => {
    let newEstado = estado
    newEstado.edad = newEstado.edad + 1
    newEstado.fecha = new Date()
    setEstado({...newEstado})
  }

  useEffect(()=>{
    setInterval(() => {
        actualizarEstadodo()
    }, 1000); 
  },[])

  return (        
        <div>
        <h2>
            Hora Actual:
            {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>{estado.nombre} {estado.apellidos}</h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
  )
}

export default Clock