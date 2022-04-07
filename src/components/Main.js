import "../css/Body.css"
import { toPercentage } from "../utils/helpers";

const Main = (props) => {
  let { info } = props;
  
  return <div className="body"><div className="flex flex-col justify-between">

    <div className="grid-1 w-full item">
      <div className="">
        <div className="flex">
          <div className="flex flex-col">
            <div className="icon">
              <div style={{
                background: "limegreen"
              }} className="dot">
              </div>
              <i className="fa fa-filter"></i>

            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="flex">Searches <div style={{
              background: "limegreen"
            }} className="tag">+5%</div></h2>
            <h1 className="medium flex">29,380 <div className="small mlp5">yesterday</div></h1>
            <h1 className="dim medium flex">27,985 <div className="small mlp5 dim">last friday</div></h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-beween">
        <h1 className="medium">Mobile trafic: {toPercentage(info.data[0].mobile_pessimizer)}</h1>
        <h1 className="medium">Web trafic:  {toPercentage(info.data[0].web_pessimizer)}</h1>
        <h1 className="medium small dim">you got 100% traffit from mobile and desktop devices</h1>
        <h1 className="medium small">Help <a href="#">Searches</a>, <a href="#">Perssimisation</a></h1>

      </div>
    </div>
    <div className="grid-1 w-full item">
      <div className="item">
        <div className="flex">
          <div className="flex flex-col">
            <div className="icon">
              <div className="dot bgred"></div>
              <i className="fa fa-hand-pointer"></i>

            </div>

          </div>
          <div className="flex flex-col">
            <h2 className="flex red">Clicks <div className="tag bgred">-11%</div></h2>
            <h1 className="medium flex">{toPercentage(info.data[0].clicks_current_yesterday)} <div className="small mlp5">yesterday</div></h1>
            <h1 className="dim medium flex">{toPercentage(info.data[0].clicks_previous_yesterday)} <div className="small mlp5 dim">last friday</div></h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-beween">
        <h1 className="medium red">CTR: {toPercentage(info.data[0].ctr_yesterday)}</h1>
        <h1 className="medium">Web trafic: 100%</h1>
        <h1 className="medium small dim">conversation from searches to clicks on all devices</h1>
        <h1 className="medium small">Help <a href="#">CTR</a>, <a href="#">CTRs</a></h1>

      </div>
    </div>
    <div className="grid-1 w-full item">
      <div className="item">
        <div className="flex">
          <div className="flex flex-col">
            <div className="icon">
              <div className="dot" style={{
                background: "limegreen"
              }}></div>
              <i className="fa fa-shopping-cart"></i>

            </div>

          </div>
          <div className="flex flex-col">
            <h2 className="flex">Sales</h2>
            <h1 className="medium flex"> {toPercentage(info.data[0].bookings_current_yesterday)} <div className="small mlp5">yesterday</div></h1>
            <h1 className="dim medium flex">{toPercentage(info.data[0].bookings_previous_yesterday)} <div className="small mlp5 dim">last friday</div></h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-beween">
        <h1 className="medium">STR: {toPercentage(info.data[0].str_yesterday)}</h1>
        <h1 className="medium">Avg. Check {toPercentage(info.data[0].avg_price_yesterday)}</h1>
        <h1 className="medium small dim">conversation from clicks to bookings on all devices</h1>
        <h1 className="medium small">Help <a href="#">STR</a>, <a href="#">bookins</a>, <a href="#">AVD.Check</a></h1>
      </div>
    </div>
  </div>

  </div>
}

export default Main;