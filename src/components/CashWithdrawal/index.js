// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onButton = val => {
    this.setState(prevState => ({
      balance: prevState.balance - val,
    }))
  }

  render() {
    const {balance} = this.state
    const denominationsList = this.props
    return (
      <div className="con">
        <div className="cc">
          <p className="p">S</p>
          <h1 className="h">Sarah Williams</h1>
        </div>
        <h1 className="h">Your Balance</h1>
        <h1 className="hh">{balance}</h1>
        <span className="s">In Rupees</span>

        <h1 className="hhh">Withdraw</h1>
        <span className="s">CHOOSE SUM(IN RUPEES)</span>
        <ul className="u">
          {denominationsList.map(each => (
            <DenominationItem
              key={each.id}
              use={each}
              onButton={this.onButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
