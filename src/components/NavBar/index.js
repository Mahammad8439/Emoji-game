// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameEnd} = props
  console.log(props)
  return (
    <nav className="nav-bar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {!isGameEnd && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
