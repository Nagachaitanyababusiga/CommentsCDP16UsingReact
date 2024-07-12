import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {Details, colors, changeLikeStatus, deleteCard, index} = props
  const {id, timeOfCreation, name, comment, isLiked} = Details

  const toggle = () => {
    changeLikeStatus(id)
  }

  const deleteli = () => {
    deleteCard(id)
  }

  // console.log(Details)
  return (
    <li className="li-cont-1">
      <div className="li-cont-2">
        <p style={{backgroundColor: colors[index + 1]}} className="li-icon">
          {name[0].toUpperCase()}
        </p>
        <div className="li-cont-3">
          <p className="li-name">{name}</p>
          <p className="li-time">{formatDistanceToNow(timeOfCreation)}</p>
        </div>
      </div>
      <div>
        <p className="li-comment">{comment}</p>
      </div>
      <div className="li-btn-cont">
        {!isLiked ? (
          <button className="like-btn" onClick={toggle} type="button">
            <img
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
            <p>Like</p>
          </button>
        ) : (
          <button className="like-btn" onClick={toggle} type="button">
            <img
              alt="liked"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            />
            <p>Like</p>
          </button>
        )}
        <button
          className="delete-btn"
          data-testid="delete"
          onClick={deleteli}
          type="button"
        >
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
