import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Form, Input } from 'reactstrap'
import InfoOutput from './InfoOutput';
import axios from 'axios';



function App() {

  const [ station, setStation ] = useState({ name: "" })
  const [ info, setInfo ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    setStation(prev => {
      return { name: e.target[0].value }
    })

  }

  const fetchInfo = async (name) => {

    const response = await axios.get(
      `http://swopenAPI.seoul.go.kr/api/subway/475948455369767935345943436164/json/realtimeStationArrival/0/5/${name}`
    );

    if(response.data.hasOwnProperty('realtimeArrivalList')){
      setInfo(prev => {
        return [...response.data.realtimeArrivalList]
      })

    }else{
      alert("No such data!!!")
    }

  }


  useEffect(()=>{
    console.log("useEffect : ",station.name)

    if(station.name !== ""){
      fetchInfo(station.name)
    }

  },[station])

  return (
    <div className="App">      
        <header>
          <h1>Subway Info</h1>
        </header>
        <section>
          <Form onSubmit={handleSubmit}>
            <Input name="subway_station" autoFocus required />
          </Form>

          <InfoOutput info={info} />
 
        </section>
    </div>
  );
}

export default App;
