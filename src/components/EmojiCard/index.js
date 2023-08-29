// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiItem, clickedEmojiGame} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const clickedEmoji = () => {
    clickedEmojiGame(id)
  }

  return (
    <li className="list-item">
      <button type="button" className="emoji-btn" onClick={clickedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
