import React, {useState, useEffect} from "react";
import axios from "axios";
import Loading from "./Loading";

import "../stylesheets/Home.css";
import "../stylesheets/Transfer.css";
import "../stylesheets/Button.css";

// hub component

const HubContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [macroData, setMacroData] = useState({})

  useEffect(()=> {

    const fetchData = async () => {
      const country = await axios.get("https://api.api-ninjas.com/v1/country?name=United Kingdom", {
        headers: { 'X-Api-Key': 'gzLiEoCE6NhcBixMEbMDyA==2uZ67awGSL0D3DjR' }
      });

      const {unemployment} = country.data[0];

      const inflation = await axios.get("https://api.api-ninjas.com/v1/inflation?country=Great Britain", {
        headers: { 'X-Api-Key': 'gzLiEoCE6NhcBixMEbMDyA==2uZ67awGSL0D3DjR' }
      });

      // console.log(data);

      const {yearly_rate_pct} = inflation.data[0];


      const interest = await axios.get("https://api.api-ninjas.com/v1/interestrate?name=British", {
        headers: { 'X-Api-Key': 'gzLiEoCE6NhcBixMEbMDyA==2uZ67awGSL0D3DjR' }
      });

      // console.log(interest.data);

      const {rate_pct, last_updated} = interest.data.central_bank_rates[0];

      setMacroData({ unemployment, inflation: yearly_rate_pct, interest: rate_pct, lastUpdated: last_updated})
      setIsLoading(false);

      // console.log(yearly_rate_pct, last_updated);
    }
    fetchData();

  }, [])

  const convertDateToUKFormat=(dateString)=> {

    const [month, day, year] = dateString.split('-');
    return `${day}/${month}/${year}`;
  }

  if(isLoading) {
    return <div className="loading">    <Loading/></div>


  }

  return (
    <>
    <h2>UK Macroeconomic Data</h2>

    <div>   
    <div className="macroElement">
    <h3>unemployment</h3>
    <p>{macroData.unemployment}%</p>
</div>

<div className="macroElement">
    <h3>year on year inflation</h3>
    <p>{macroData.inflation}%</p>
</div>

<div className="macroElement">
    <h3>bank of England interest rate</h3>
    <p>{macroData.interest}%</p>
</div>

<div className="macroElement">
    <h3>last updated</h3>
    <p>{convertDateToUKFormat(macroData.lastUpdated)}</p>
</div>

    
    
    </div>



    </>
  );
};
export default HubContent;
