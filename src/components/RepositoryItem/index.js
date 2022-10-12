// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  return (
    <li className="repository-item-container">
      <img
        src={repositoryItemDetails.imageUrl}
        className="item-image"
        alt={repositoryItemDetails.name}
      />
      <h1 className="item-title">{repositoryItemDetails.name}</h1>
      <div className="repositoryItemDetails-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          className="icon-image"
          alt="stars"
        />
        <p className="text">{repositoryItemDetails.starsCount} stars</p>
      </div>

      <div className="repositoryItemDetails-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          className="icon-image"
          alt="forks"
        />
        <p className="text">{repositoryItemDetails.forksCount} forks</p>
      </div>

      <div className="repositoryItemDetails-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          className="icon-image"
          alt="open issues"
        />
        <p className="text">{repositoryItemDetails.issuesCount} open issues</p>
      </div>
    </li>
  )
}
export default RepositoryItem
