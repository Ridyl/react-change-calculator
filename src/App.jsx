import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css'

function App() {
  // Add your code here

  return (
    <>
      <div className="title-wrapper">
        <h1>Change Calculator</h1>
      </div>
      <div className='row row-cols-2' id='card-container'>

        <div className='col justify-content-md-center'>
          <div className='card user-input'>

            <div className='card-header'>
              <h5>Enter Information</h5>
            </div>

            <div className='card-body'>
              <div className="row">
                <p><strong>How much is due?</strong></p>
                <input type='number' id='amount-due' data-testid='amount-due'></input>
              </div>
              <div className="row">
                <p><strong>How much was recieved?</strong></p>
                <input type='number' id='amount-recieved' data-testis='amount-recieved'></input>
              </div>
            </div>

            <div className="card-footer">
              <button className='btn btn-primary'>Calculate</button>
            </div>

          </div>
        </div>
          
        <div className='row justify-content-md-center'>

          <div className="row" id='right-card'>
            <div className="col">
              <div className="notification">
                {/* this will be a function component that changes */}
                <div>Change will appear here when proper values are given.</div>
              </div>
            </div>
            <div className="row align-items-md-center" id='card-rows'>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Twenties</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Tens</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Fives</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Ones</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-md-center" id='card-rows'>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Quarters</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Dimes</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Nickles</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card money">
                  <div className="card-body">
                    <div className="card-title">Pennies</div>
                    <div className="card-text output-num">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
