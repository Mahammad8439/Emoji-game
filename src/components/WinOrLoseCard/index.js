// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgin} = props

  const playAginBtn = () => {
    playAgin()
  }

  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-lose-container">
      <div className="win-lose-text">
        {score === 12 ? (
          <h1 className="win-lose-heading">You Won</h1>
        ) : (
          <h1 className="win-lose-heading">You Lose</h1>
        )}
        <p className="best-score-heading">Best Score</p>
        <p className="score-result">{score}/12</p>
        <button type="button" className="again-btn" onClick={playAginBtn}>
          Play Again
        </button>
      </div>
      <img src={imgUrl} alt="win or lose" className="emoji-result-image" />
    </div>
  )
}

export default WinOrLoseCard
