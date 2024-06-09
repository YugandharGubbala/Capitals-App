import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapId: countryAndCapitalsList[0].id,
  }
  onchangeCapital = event => {
    this.setState({activeCapId: event.target.value})
  }

  getCountry = () => {
    const {activeCapId} = this.state
    const activecountry = countryAndCapitalsList.find(
      each => each.id === activeCapId,
    )
    return activecountry.country
  }

  render() {
    const {activeCapId} = this.state
    const country = this.getCountry(activeCapId)
    return (
      <div className="container">
        <div className="box">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="cap">
            <select
              className="capselect"
              onChange={this.onchangeCapital}
              value={activeCapId}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
