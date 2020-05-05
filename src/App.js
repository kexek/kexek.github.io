import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData, fetchDailyData } from './api'

class App extends Component {
  state = {
    data: {},
    country: '',
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({ country, data: fetchedData })
  }

  async componentDidMount() {
    const fetched = await fetchData()
    this.setState({ data: fetched })
  }

  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
