import { useState } from 'react';
import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function App() {

  const [name, setName] = useState()
  const [subject, setSubject] = useState()
  const [time, setTime] = useState()
  const [list,setList] = useState([])

  async function handleSubmit() {
    console.log("Submit chamado")
    console.log("name", name)
    console.log("subject", subject)
    console.log("time", time)
    const data = { name, subject, time }
    console.log(data)

    try {
      // POST request using axios with async/await
      await axios({
        method: 'POST',
        url: 'http://localhost:3001/api/products',
        data: data
      });

    } catch (err) {
      console.log(err);
    }

  }

  async function handleShow() {
    try {
    // GET request using axios with async/await
    const response = await axios.get('http://localhost:3001/api/products');
    console.log(response.data.docs);
    const datares = response.data.docs;
    console.log(typeof datares);
    console.log(datares);

    setList(datares); 
    console.log(list);

    } catch (err) {
      console.log(err);      
    }

  }

  // console.log(list);
  return (

    <div class="parent">
      <form class="block">
        <div class="input-block">
          <label for="name">Nome completo</label>
          <input
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
            value={name}
            required />
        </div>

        <div class="input-block">
          <label for="subject">Materia</label>
          <input
            onChange={(e) => setSubject(e.target.value)}
            name="subject"
            id="subject"
            value={subject}
            required />
        </div>

        <div class="input-block">
          <label for="time">Horário</label>
          <input
            onChange={(e) => setTime(e.target.value)}
            name="time"
            id="time"
            value={time}
            required />
        </div>

        <Button onClick={handleSubmit} variant="contained">Enviar</Button>

      </form>

      <form class="block">
        <Button onClick={handleShow} variant="contained">Mostrar formulários</Button>

      <ul>
        {list.map((item)=>
          <li>{item.name + " / " + item.subject +" / "+ item.time}</li>
        )}
      </ul> 
    
      </form>

    </div>

  );
}

export default App;
