import { useState, useRef} from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

function App() {
  // State variables
  const [due, setDue] = useState('');
  const [rec, setRec] = useState('');

  // Output states
  const [denomination, setDenomination] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const outputRef = useRef(null);
  const outputCardRef = useRef(null);

  // User input handling
  const handleDue = (input) => {
    setDue(input.target.value);
  }

  const handleRec = (input) => {
    setRec(input.target.value);
  }

  // Creates the cards for denominations on right side
  function DenoCard({ denom, number }) {
    const id = denom.toLowerCase();

    return (
      <div className="col">
        <div className="card money">
          <div className="card-body">
            <div className="card-title">{ denom }</div>
            <p className="card-text output-num" data-testid={ id }>{ denomination[number] }</p>
          </div>
        </div>
      </div>
    );
  };

  DenoCard.propTypes = {
    denom: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired
  }

    // Button click handler
  const handleTransaction = () => {
    if (due && rec) {
      const amountDue = parseFloat(due);
      const amountRec = parseFloat(rec);
      let change = amountRec - amountDue;
  
      if (change > 0) {
        // parse float required to 
        let remainingChange = parseFloat(change.toFixed(2));
  
        // Bills calculation
        const billDenominations = [20, 10, 5, 1];
        const newDenomination = [...denomination];
        billDenominations.forEach((bill, index) => {
          const billCount = Math.floor(remainingChange / bill);
          newDenomination[index] = billCount;
          remainingChange -= billCount * bill;
          remainingChange = parseFloat(remainingChange.toFixed(2));
        });
  
        // Coins calculation
        const coinDenominations = [0.25, 0.1, 0.05, 0.01];
        coinDenominations.forEach((coin, index) => {
          const coinCount = Math.floor(remainingChange / coin);
          // index + 4 to correctly position within denomination array
          newDenomination[index + 4] = coinCount;
          remainingChange -= coinCount * coin;
          remainingChange = parseFloat(remainingChange.toFixed(2));
        });
      
        setDenomination(newDenomination);
        // Display green with how much change customer needs
        outputRef.current.textContent = `Change for customer $${change.toFixed(2)}`;
        outputCardRef.current.className = 'card text-white bg-success';
      } else {
        // Display red with how much customer owes -- change has to be multiplied by -1 to display positive number
        outputRef.current.textContent = `Did not recieve enough! Customer owes $${change.toFixed(2) * -1}`;
        outputCardRef.current.className = 'card text-white bg-danger';
      }
    } else {
      // if one or both input fields is left blank display yellow requesting values
      outputRef.current.textContent = 'Please enter values in both input areas'
      outputCardRef.current.className = 'card text-dark bg-warning';
    }
  } 

  return (
    <>
      {/* Title */}
      <div className="title-wrapper">
        <h1>Change Calculator</h1>
      </div>

      {/* Left user input section */}
      <div className='row row-cols-2' id='card-container'>
        <div className='col justify-content-md-center'>
          <div className='card user-input'>
            <div className='card-header'>
              <h5>Enter Information</h5>
            </div>
            <div className='card-body'>
              <div className="row">
                <p><strong>How much is due?</strong></p>
                <input type='number' id='amount-due' data-testid='amount-due' onChange={ handleDue }></input>
              </div>
              <div className="row">
                <p><strong>How much was recieved?</strong></p>
                <input type='number' id='amount-recieved' data-testis='amount-recieved' onChange={ handleRec }></input>
              </div>
            </div>
            <div className="card-footer">
              <button className='btn btn-primary' data-testid='calculate' onClick={ handleTransaction }>Calculate</button>
            </div>
          </div>
        </div>
          
        {/* Right use input section */}
        <div className='row justify-content-md-center'>

          {/* Notification section */}
          <div className="row" id='right-card'>
            <div className="col">
              <div className="card" ref={ outputCardRef }>
                <div className="card-body">
                  <div className="notification" ref={ outputRef }>
                    Change will appear here when proper values are given.
                  </div>
                </div>
              </div>
            </div>

            {/* All top denomination cards */}
            <div className="row" id='card-rows'>
              <DenoCard denom={'Twenties'} number={0}/>
              <DenoCard denom={'Tens'} number={1}/>
              <DenoCard denom={'Fives'} number={2}/>
              <DenoCard denom={'Ones'} number={3}/>
            </div>

            {/* All bottom denomination cards */}
            <div className="row align-items-md-center" id='card-rows'>
              <DenoCard denom={'Quarters'} number={4}/>
              <DenoCard denom={'Dimes'} number={5}/>
              <DenoCard denom={'Nickles'} number={6}/>
              <DenoCard denom={'Pennies'} number={7}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
