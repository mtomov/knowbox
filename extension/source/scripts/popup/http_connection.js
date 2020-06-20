/* global chrome */
import { hostname } from './configuration'

const fetchFromServer = (url, params = {}) => {
  return fetch(
    hostname + url,
    Object.assign(
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      params
    )
  )
    .then((data) => data.text())
    .catch((error) => {
      console.log({ error: true, details: error })
    })
}

export { fetchFromServer }
