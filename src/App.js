import React, {useState} from 'react'
import './styles.css'

export default function App() {

  // state
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  //image
  let imgSrc = null;

  let calcBmi = (event) => {
    
    //prevent submitting
    event.preventDefault()


    if (weight === '' || height === '') {
      alert('Please enter a valid weight and height')
    }
     else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))

      //bmmi calculation

      if (bmi < 25) {
        setMessage('You are underweight');
        imgSrc = require('../src/images/underweight.png');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight');
        imgSrc = require('../src/images/normalweight.png');
      } else {
        setMessage('You are overweight');
        imgSrc = require('../src/images/overweight.png');
      }
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form>
          <div>
            <label>Weight (kgs)</label>
            <input type="number" step="0.1" min="0" max="1000" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (mts)</label>
            <input type="number" step="0.1" min="0" max="10" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit' onClick={calcBmi}>Submit</button>
            <button className='btn btn-outline' onClick={reload}>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
  );
}