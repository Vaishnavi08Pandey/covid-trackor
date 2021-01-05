import React from 'react';

//import cards from './components/cards/cards';
//import chart from './components/chart/chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css';
import { fetchData } from "./api";
import coronaimg from './img/covid.png';

alert('Do not forget to wear mask!')
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.img} src={coronaimg} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}
export default App;