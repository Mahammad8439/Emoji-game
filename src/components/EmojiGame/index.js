/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import './index.css'
import WinOrLoseCard from '../WinOrLoseCard'

const emojisList = [
  {
    id: 0,
    emojiName: 'Face with stuck out tongue',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png',
  },
  {
    id: 1,
    emojiName: 'Face with head bandage',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png',
  },
  {
    id: 2,
    emojiName: 'Face with hugs',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png',
  },
  {
    id: 3,
    emojiName: 'Face with laughing',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png',
  },
  {
    id: 4,
    emojiName: 'Laughing face with hand in front of mouth',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png',
  },
  {
    id: 5,
    emojiName: 'Face with mask',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png',
  },
  {
    id: 6,
    emojiName: 'Face with silence',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png',
  },
  {
    id: 7,
    emojiName: 'Face with stuck out tongue and winked eye',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png',
  },
  {
    id: 8,
    emojiName: 'Grinning face with sweat',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png',
  },
  {
    id: 9,
    emojiName: 'Smiling face with heart eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
  },
  {
    id: 10,
    emojiName: 'Grinning face',
    emojiUrl: 'https://assets.ccbp.in/frontend/react-js/grinning-face-img.png',
  },
  {
    id: 11,
    emojiName: 'Smiling face with star eyes',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png',
  },
]

class EmojiGame extends Component {
  state = {
    initialEmojiList: emojisList,
    score: 0,
    topScore: 0,
    countList: [],
    isGameEnd: false,
  }

  shuffleEmoji = initialEmojiList =>
    initialEmojiList.sort(() => Math.random() - 0.5)

  clickedEmojiGame = id => {
    const {initialEmojiList, countList} = this.state
    const shuffle = this.shuffleEmoji(initialEmojiList)
    const isEnd = countList.includes(id)

    if (!isEnd) {
      let {score} = this.state
      score += 1
      if (score === 12) {
        this.setState({countList: [], isGameEnd: true, score})
      } else {
        this.setState(prevState => ({
          countList: [...prevState.countList, id],
          initialEmojiList: shuffle,
          score: prevState.score + 1,
        }))
      }
    } else {
      this.setState({countList: [], isGameEnd: true})
    }
  }

  playAgin = () => {
    const {topScore, score} = this.state
    const maxScore = score >= topScore ? score : topScore

    this.setState({isGameEnd: false, topScore: maxScore, score: 0})
  }

  render() {
    const {initialEmojiList, score, topScore, isGameEnd} = this.state
    return (
      <div>
        <div className="nav-container">
          <NavBar score={score} topScore={topScore} isGameEnd={isGameEnd} />
        </div>
        <div className="emoji-bg-container">
          {!isGameEnd ? (
            <ul className="emoji-list-item-container">
              {initialEmojiList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  emojiItem={eachItem}
                  clickedEmojiGame={this.clickedEmojiGame}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard score={score} playAgin={this.playAgin} />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
