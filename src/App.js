import React from "react";
import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";

//Importar componetes
import MiComponente from "./components/MiComponente";

function HolaMundo(nombre, edad) {
  var presentacion = (
    <div>
      <h2>Hola soy {nombre}</h2>
      <h3>Tengo {edad} anios</h3>
    </div>
  );

  return presentacion;
}

function App() {
  var nombre = "Fernando Avila";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Bienvenido al curso de React de Fernando as</p>

        {HolaMundo(nombre, 12)}

        <section className="componentes">
          <MiComponente />
        </section>
      </header>
    </div>
  );
}

export default App;
