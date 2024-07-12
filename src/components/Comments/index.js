import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    CommentsList: [],
    name: '',
    comment: '',
  }

  submit = event => {
    event.preventDefault()
    const {CommentsList, name, comment} = this.state
    if (name === '' || comment === '') return
    const newItem = {
      id: v4uuid(),
      timeOfCreation: new Date(),
      name,
      comment,
      isLiked: false,
    }
    this.setState({
      CommentsList: [...CommentsList, newItem],
      name: '',
      comment: '',
    })
  }

  inputChange = event => {
    this.setState({name: event.target.value})
  }

  textChange = event => {
    this.setState({comment: event.target.value})
  }

  deleteCard = id => {
    const {CommentsList, name, comment} = this.state
    const newList = CommentsList.filter(x => x.id !== id)
    this.setState({CommentsList: newList, name, comment})
  }

  changeLikeStatus = id => {
    const {CommentsList, name, comment} = this.state
    const newList = CommentsList.map(x => {
      if (x.id === id) {
        return {...x, isLiked: !x.isLiked}
      }
      return x
    })
    this.setState({CommentsList: newList, name, comment})
  }

  render() {
    const {CommentsList, name, comment} = this.state
    const Commentscount = CommentsList.length
    return (
      <div className="cont-1">
        <div className="cont-2">
          <form className="cont-3" onSubmit={this.submit}>
            <h1 className="header">Comments</h1>
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              className="input-ele"
              placeholder="Your Name"
              onChange={this.inputChange}
              value={name}
            />
            <textarea
              className="text"
              placeholder="Your Comment"
              onChange={this.textChange}
              value={comment}
            />
            <button className="submitbtn" type="submit">
              Add Comment
            </button>
          </form>
          <img
            className="imager"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="line" />
        <div className="cont-5">
          <div className="cont-4">
            <p className="commentcnt">{Commentscount}</p>
            <p>Comments</p>
          </div>
          <ul className="list-cont">
            {CommentsList.map((x, index) => (
              <CommentItem
                key={x.id}
                changeLikeStatus={this.changeLikeStatus}
                deleteCard={this.deleteCard}
                index={index}
                Details={x}
                colors={initialContainerBackgroundClassNames}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
