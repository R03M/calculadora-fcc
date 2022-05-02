import './App.css';
import freecodecamp from './img/freecodecamp.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs'
import mrbluelogo from './img/Letras_blancas.png';
import logo from './img/Logo.png';


function App() {
  const [input, setInput] =useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para poder hacer calculos');
    }
  };


  return (
    <div className="App">

    <div className='logo-con-letras'>

    <img
      className='letras'
      src={mrbluelogo}
      alt='Letras del logo de Mr. Blue' />
      <img
      className='logo'
      src={logo}
      alt='Logo de Mr. Blue' />

    </div>

      <div className='freecodecamp-logo-conten'>
        
        <img 
         src={freecodecamp}
         className='freecodecamp-logo'
         alt='Logo de freeCodeCamp' />
      
      </div>
      
      <div className='contenedor-calculadora'>

        <Pantalla 
        input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>   
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
          </div>

        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      
      </div>
    

    </div>
  );
}

export default App;
