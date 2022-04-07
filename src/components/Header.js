import React from 'react'
import './../css/Header.css'

export default function (props) {
  const {onChange} = props;

  return (

    <header>
      <nav>
        <h1 className='navbrand'>Main Metrics</h1>

        <div className='navlinks'>
          <button onClick={() => onChange(0, "tab")}>Last hour</button>
          <button onClick={() => onChange(1, "tab")}>Today</button>
          <button onClick={() => onChange(2, "tab")} className='active'>Yesterday</button>
          <button onClick={() => onChange(3, "tab")}>Last 3 days</button>
        </div>
      </nav>
    </header>

  )
}
