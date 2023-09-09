import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props
  const onChangeValue = event => console.log(event.target.value)

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="search"
          className="search-bar"
          onChange={onChangeValue}
        />
        <AiOutlineSearch className="icon-search" />
      </div>

      <p className="category-heading">Category</p>
      <ul className="un-order-list-container">
        {categoryOptions.map(each => {
          const onSelectCategory = () => console.log(each.categoryId)
          return (
            <li
              className="list-item"
              key={each.categoryId}
              onClick={onSelectCategory}
            >
              <p>{each.name}</p>
            </li>
          )
        })}
      </ul>

      <p className="category-heading">Ratings</p>
      <ul className="un-order-list-container">
        {ratingsList.map(each => {
          const onSelectRating = () => console.log(each.ratingId)
          return (
            <li className="rating-list-item" key={each.ratingId}>
              <button type="button" onClick={onSelectRating} className="btn">
                <img
                  src={each.imageUrl}
                  alt={`rating ${each.ratingId}`}
                  className="rating"
                />
              </button>
              <p className="rating-description">&up</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FiltersGroup
