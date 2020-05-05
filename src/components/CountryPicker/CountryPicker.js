import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'
import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCoutries] = useState([])
  useEffect(() => {
    ;(async () => {
      setFetchedCoutries(await fetchCountries())
    })()
  }, [])
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker
