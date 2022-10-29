// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  sendFeedback = () => {
    this.setState({isFeedbackGiven: true})
  }

  feedbackPage = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="card">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="emoji-card">
          {emojis.map(eachItem => (
            <li className="emoji" key={eachItem.id}>
              <img
                src={eachItem.imageUrl}
                alt={eachItem.name}
                className="emoji-image"
                onClick={this.sendFeedback}
              />
              <p className="emoji-name">{eachItem.name}</p>
            </li>
          ))}
        </div>
      </div>
    )
  }

  thankYouPage = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-card">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="greeting">Thank You!</h1>
        <p className="msg">
          We will use you feedback to improve our customer support experience
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state

    return (
      <div className="bg">
        {isFeedbackGiven ? this.thankYouPage() : this.feedbackPage()}
      </div>
    )
  }
}

export default Feedback
