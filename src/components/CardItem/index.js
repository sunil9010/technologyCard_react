/* eslint-disable jsx-a11y/img-redundant-alt */
// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsTotal} = props
  const {title, description, imgUrl, className} = cardsTotal
  return (
    <div>
      <li className={`${className} banner-card-item`}>
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <div>
          <img src={imgUrl} alt={title} />
        </div>
      </li>
    </div>
  )
}
export default CardItem
