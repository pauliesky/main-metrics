import React from 'react'
import './../css/Hero.css'
import { toPercentage } from "../utils/helpers";

export default function Hero(props) {
  let { info } = props
  let { tab } = info;

  // console.log(tab)


  // console.log(info)
  return (
    <div className='hero'>

      <div className='details grid-1'>
        <div className='errors flex'>
          <div className='bullet lemon-green'></div>
          <div className='details-content' >
            <h4>Errors:
              {tab === 2 && toPercentage(info.data[0].errors_yesterday)}
              {tab === 3 && toPercentage(info.data[0].errors_last_3days)}

              {!(tab === 2 || tab === 3) && " 0.12%"}
            </h4>
            <h5 className='dim'>Average: 0.11%</h5>
          </div>
        </div>
        <div className='zeroes flex'>
          <div className='bullet lemon-green'></div>

          <div className='details-content' >
            <h4>Zeroes:
              {tab === 2 && toPercentage(info.data[0].zeroes_yesterday)}
              {tab === 3 && toPercentage(info.data[0].zeroes_last_3days)}
              {!(tab === 2 || tab === 3) && " 0.12%"}
            </h4>
            <h5 className='dim'>Average: 0.11%</h5>
          </div>
        </div>
        <div className='timeouts flex'>
          <div className='bullet lemon-green'></div>

          <div className='details-content' >
            <h4>Timeouts:
              {tab === 2 && toPercentage(info.data[0].timeout_yesterday)}
              {tab === 3 && toPercentage(info.data[0].timeout_last_3days)}
              {!(tab === 2 || tab === 3) && " 0.12%"}
            </h4>
            <h5 className='dim'>Average: 0.11%</h5>
          </div>
        </div>
      </div>

      <div className='colors flex w-full mtp5'>
        <div style={{
          flex: 40
        }} className='yellow pp5 w-full'></div>
        <div style={{
          flex: 30
        }} className='slateblue pp5 w-full'></div>
        <div style={{
          flex: 20
        }} className='royalblue pp5 w-full'></div>
        <div style={{
          flex: 10
        }} className='gray pp5 w-full'></div>
      </div>

      <div className='flex justify-between '>
        <div className='flex mtp5'>
          <div className='square yellow'></div>
          <div className='details-content' >

            <h4>Errors 500: {info.errors_yesterday[0].count}

            </h4>
          </div>
        </div>
        <div className='flex mtp5'>
          <div className='square slateblue'></div>
          <div className='details-content' >
            <h4>Errors {info.errors_yesterday[1].code}: {info.errors_yesterday[1].count}</h4>
          </div>
        </div>
        <div className='flex mtp5'>
          <div className='square royalblue'></div>
          <div className='details-content' >
            <h4>Errors 502: 650</h4>
          </div>
        </div>
        <div className='flex mtp5'>
          <div className='square gray'></div>
          <div className='details-content' >
            <h4>Other: 330</h4>
          </div>
        </div>
      </div>

    </div>
  )
}
