import React, {Component} from 'react'

class GameCell extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <td
        className="h-1/3 w-1/3 border-[#00A994] border-4 text-center text-6xl"
        onClick={() => this.props.onClick(this.props.cellIndex)}
      >
        <div className={`h-full ${this.props.value === 1 ? 'text-[#644756]' : 'text-[#FBE6C9]'}`}>
          {
            this.props.value
            ? (this.props.value === 1 ? 'X' : 'O')
            : ''
          }
        </div>
      </td>
    )
  }
}

export default GameCell
