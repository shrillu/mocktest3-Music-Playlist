import {AiOutlineDelete} from 'react-icons/ai'

const TrackItem = props => {
  const {items, onClickDelete} = props
  const {id, name, imageUrl, genre, duration} = items

  const onClickDeleteId = () => {
    onClickDelete(id)
  }

  return (
    <li className="list-item">
      <div className="image-container">
        <img src={imageUrl} alt="track" className="image" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <div className="time-container">
        <p>{duration}</p>
        <button
          type="button"
          className="btn-container"
          data-testid="delete"
          onClick={onClickDeleteId}
        >
          <AiOutlineDelete className="delete-btn" />
        </button>
      </div>
    </li>
  )
}

export default TrackItem
