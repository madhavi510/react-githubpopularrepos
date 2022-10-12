import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    isLoading: true,
    repositoriesList: [],
    setLanguageFilter: 'ALL',
    activeId: languageFiltersData[0].id,
  }

  componentDidMount() {
    const {activeId} = this.state
    this.getRepositoriesList(activeId)
  }

  getRepositoriesList = async setLanguageFilter => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${setLanguageFilter}`,
    )

    const data = await response.json()
    const updatedData = data.popular_repos.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.avatar_url,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
      forksCount: eachItem.forks_count,
      issuesCount: eachItem.issues_count,
    }))

    this.setState({
      repositoriesList: updatedData,
      isLoading: false,
    })
  }

  setSelectedLanguageFilter = filterId => {
    this.setState({setLanguageFilter: filterId})
    this.getRepositoriesList(filterId)
  }

  render() {
    const {setLanguageFilter, isLoading, repositoriesList} = this.state

    return (
      <div className="app-container">
        <h1 className="title">Popular</h1>
        <ul className="language-item-container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              isSelectedLanguage={eachLanguage.id === setLanguageFilter}
              key={eachLanguage.id}
              languageFilter={eachLanguage}
              setSelectedLanguageFilter={this.setSelectedLanguageFilter}
            />
          ))}
        </ul>
        {isLoading ? (
          <div>
            <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
          </div>
        ) : (
          <ul className="repositories-list-container">
            {repositoriesList.map(repositoryItem => (
              <RepositoryItem
                key={repositoryItem.id}
                repositoryItemDetails={repositoryItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
