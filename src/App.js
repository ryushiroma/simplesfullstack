import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (

    <div>
      <form class="block">
        <div class="input-block">
          <label for="name">Nome completo</label>
          <input name="name" id="name" required />
        </div>

        <div class="input-block">
          <label for="materia">Materia</label>
          <input name="materia" id="materia" required />
        </div>

        <div class="input-block">
          <label for="horario">Horário</label>
          <input name="horario" id="horario" type="datetime" required />
        </div>

        <Button variant="contained">Enviar</Button>

      </form>

      <form class="block">
        <Button variant="contained">Mostrar formulários</Button>
      </form>
    </div>

  );
}

export default App;
