// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isSelectedLanguage, languageFilter, setSelectedLanguageFilter} = props

  const setClass = isSelectedLanguage ? 'btn1' : 'btn2'

  const onClickBtn = () => {
    setSelectedLanguageFilter(languageFilter.id)
  }

  return (
    <li className="language-item-container">
      <button className={setClass} onClick={onClickBtn} type="button">
        {languageFilter.language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
