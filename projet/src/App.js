import React, {useEffect, useState} from 'react';
import Table from './Table';

const App = ()=>{
  const [state, setState] = useState({result: null})
  useEffect(() => {
    const getDataAsync = async ()=>{
      var response =  await fetch('http://localhost:5000/meetings');
      var meetings = await response.json()
      var result = meetings;
       console.log(result);
      setState({result});
    }
    getDataAsync();
  }, [fetch])
  return (<div className='container'>
        <Table resultData={state.result} />
      </div>)
}

export default App