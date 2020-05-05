import axios from 'axios'

const endpoint = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeableUrl = endpoint
  if (country) {
    changeableUrl = `${endpoint}/countries/${country}`
  }
  try {
    const {
      data: { confirmed, recovered, lastUpdate, deaths },
    } = await axios.get(changeableUrl)

    return { confirmed, recovered, lastUpdate, deaths }
  } catch (err) {}
}

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${endpoint}/daily`)
    return data.map(({ deaths, confirmed, reportDate }) => ({
      deaths: deaths.total,
      confirmed: confirmed.total,
      reportDate,
    }))
  } catch (error) {}
}

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${endpoint}/countries`)
    return countries.map(({ name }) => name)
  } catch (error) {}
}
