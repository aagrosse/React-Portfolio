import React from "react";
import CardContainerComponent from '../../components/CardContainerComponent';
import portfolios from '../../data/portfolio.json';
import './style.css'


console.log(portfolios)

const Portfolio = () => (
  
  <div>
    <div className="container" >
    <div className="div pl-3 mt-5" style={{textAlign: "center"}}>
      <h1>Portfolio</h1>
      <h3 className="pt-3">Recent Work</h3>
    </div>
    <div style={{display: 'flex', flexDirection: 'row', flexWrap:"wrap", justifyContent: "center"}}>
    {portfolios.map(portItem => <CardContainerComponent {...portItem} />)}
    </div>
  </div>
  </div>
);

export default Portfolio;
