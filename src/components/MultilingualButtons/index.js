import './index.css'

const MultilingualButtons = props => {
  const {details, isActive, setActiveImgId} = props
  const {buttonText, id} = details
  const clsName = isActive ? 'bgColorActive' : 'bgColorInactive'
  const getId = () => {
    setActiveImgId(id)
  }

  return (
    <li>
      <button type="button" className={clsName} onClick={getId}>
        {buttonText}
      </button>
    </li>
  )
}

export default MultilingualButtons
