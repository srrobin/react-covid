import './App.css';
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import React, { Component } from 'react'
import {fetchData} from "./api"

export default class App extends Component {
 
  state = {
      data: {},
      country:'',
  }
  async componentDidMount(){ 
    const fetchedData = await fetchData();
    this.setState({ data : fetchedData });
  }

  handelCountryChange = async (country) =>{ 
    const fetchedData = await fetchData(country);
    this.setState({ data : fetchedData , country : country });
  }

  render() {
    const {data,country} = this.state;
    return (
      <div className="wrapper"> 
          <div className="left">
            <Header/>
            <CountryPicker  handelCountryChange={this.handelCountryChange}/>
            <Chart data={data} country={country} />
          </div>
          <div className="right">
          <Card data={data}/>
          </div>
      </div>  
    )
  }

}
 