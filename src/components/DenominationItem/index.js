// Write your code here

const DenominationItem = props => {
  const {use, onButton} = props
  const {value} = use

  const onType =()=> {
    onButton(value)
  }
  return (
    <li className="l">
      <button className="b" type="button" onClick={onType}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
