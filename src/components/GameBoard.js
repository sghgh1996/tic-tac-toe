import React, {Component} from 'react'
import GameCell from './GameCell'

class GameBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ],
      player: 1, // 1 for X, 2 for O
      finished: false,
      winner: 0
    }
  }

  _clickOnCell = (index) => {
    const newBoard = this.state.board

    if (newBoard[index] !== 0) return

    newBoard[index] = this.state.player

    this._checkGameEnd(newBoard)

    this.setState({
      board: newBoard,
      player: this.state.player % 2 + 1
    })
  }

  _checkGameEnd = (board) => {
    const cellsToCheck = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < cellsToCheck.length; i++) {
      const [a, b, c] = cellsToCheck[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        this.setState({
          finished: true,
          winner: board[a]
        })

        return
      }
    }

    const boardFilled = board.every(item => item !== 0)
    
    if (boardFilled) {
      this.setState({
        finished: true,
        winner: 0
      })
    }
  }

  _restart = () => {
    this.setState({
      board: [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
      ],
      player: 1, // 1 for X, 2 for O
      finished: false,
      winner: 0
    })
  }

  render () {
    let boardContent = ''

    if (this.state.finished) {
      if (this.state.winner) {
        boardContent = (
          <div className={`text-center ${this.props.value === 1 ? 'text-[#644756]' : 'text-[#FBE6C9]'}`}>
            <div className="text-9xl">{ this.state.winner === 1 ? 'X' : 'O' }</div>
            <div className="text-4xl">WINNER</div>
          </div>
        )
      } else {
        boardContent = (
          <div className="text-center text-9xl">
            <span className="text-[#644756]">X</span>
            <span className="text-[#FBE6C9]">O</span>
            <div className="text-4xl">DRAW!</div>
          </div>
        )
      }
    } else {
      const table = []

      for (let i = 0; i < 3; i++) {
        const row = []
        for (let j = 0; j < 3; j++) {
          row.push(
            <GameCell
              key={i*3 + j}
              value={this.state.board[i*3 + j]}
              cellIndex={i*3 + j}
              onClick={this._clickOnCell}
            />
          )
        }

        table.push(<tr key={`row-${i}`}>{ row }</tr>)
      }

      boardContent = (
        <table className="h-full w-full border-[#00C7AE] border-8">
          <tbody>{ table }</tbody>
        </table>
      )
    }

    return (
      <div className="h-96 w-96 mx-auto mt-20">
        <div className="mb-8">
          {
            this.state.finished
            ? 'GAME OVER'
            : (this.state.player === 1 ? 'X' : 'O') + ' Turn'
          }
        </div>
        <div className="bg-[#00C7AE] h-64 w-72 py-4 px-8 mx-auto">
          { boardContent }
        </div>
        <div className="mt-4 cursor-pointer text-[#00C7AE]" onClick={this._restart}>RESTART GAME</div>
      </div>
    )
  }
}

export default GameBoard
