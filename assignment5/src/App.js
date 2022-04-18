
import './App.css';

function App() {
  return (
  <div className='container'>
    <h1>Form Validation</h1>
    <form action=''>
      <input 
      id='ass-name'
      placeholder='Associate Name'
      name='Associate Name'
      />
      <div className='error' />
      <input 
      id='ass-id'
      placeholder='Associate ID'
      name='Associate ID'
      />
      <div className='error' />
      <input 
      id='proj-id'
      placeholder='Project ID'
      name='Project ID'
      />
      <div className='error' />
      <input type='radio' value='offshore' className='radio' onClick={checkbox(1)}/>
      <label>Offshore</label>
      <input type='radio' value='onshore' className='radio'  onClick={checkbox(1)}/>
      <label>Onshore</label>

    </form>
  </div>
  )
}

export default App;
