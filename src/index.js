import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tile(props) {
  return (
    <div className="tile">
      {props.value}
    </div>
  );
}

class Board extends React.Component {

  renderTile(i) {
    return (
      <Tile
        value={this.props.tiles[i]}
      />
    );
  }

  render() {
    return (
      <div className="board">
        {this.renderTile(0)}
        {this.renderTile(1)}
        {this.renderTile(2)}
        {this.renderTile(3)}
        {this.renderTile(4)}
        {this.renderTile(5)}
        {this.renderTile(6)}
        {this.renderTile(7)}
        {this.renderTile(8)}
        {this.renderTile(9)}
        {this.renderTile(11)}
        {this.renderTile(12)}
        {this.renderTile(13)}
        {this.renderTile(14)}
        {this.renderTile(15)}
        {this.renderTile(16)}
        {this.renderTile(17)}
        {this.renderTile(18)}
        {this.renderTile(19)}
        {this.renderTile(20)}
        {this.renderTile(22)}
        {this.renderTile(23)}
        {this.renderTile(24)}
        {this.renderTile(25)}
        {this.renderTile(26)}
        {this.renderTile(27)}
        {this.renderTile(28)}
        {this.renderTile(29)}
        {this.renderTile(30)}
        {this.renderTile(31)}
        {this.renderTile(33)}
        {this.renderTile(34)}
        {this.renderTile(35)}
        {this.renderTile(36)}
        {this.renderTile(37)}
        {this.renderTile(38)}
        {this.renderTile(39)}
        {this.renderTile(40)}
        {this.renderTile(41)}
        {this.renderTile(42)}
        {this.renderTile(44)}
        {this.renderTile(45)}
        {this.renderTile(46)}
        {this.renderTile(47)}
        {this.renderTile(48)}
        {this.renderTile(49)}
        {this.renderTile(50)}
        {this.renderTile(51)}
        {this.renderTile(52)}
        {this.renderTile(53)}
        {this.renderTile(55)}
        {this.renderTile(56)}
        {this.renderTile(57)}
        {this.renderTile(58)}
        {this.renderTile(59)}
        {this.renderTile(60)}
        {this.renderTile(61)}
        {this.renderTile(62)}
        {this.renderTile(63)}
        {this.renderTile(64)}
        {this.renderTile(66)}
        {this.renderTile(67)}
        {this.renderTile(68)}
        {this.renderTile(69)}
        {this.renderTile(70)}
        {this.renderTile(71)}
        {this.renderTile(72)}
        {this.renderTile(73)}
        {this.renderTile(74)}
        {this.renderTile(75)}
        {this.renderTile(77)}
        {this.renderTile(78)}
        {this.renderTile(79)}
        {this.renderTile(80)}
        {this.renderTile(81)}
        {this.renderTile(82)}
        {this.renderTile(83)}
        {this.renderTile(84)}
        {this.renderTile(85)}
        {this.renderTile(86)}
        {this.renderTile(88)}
        {this.renderTile(89)}
        {this.renderTile(90)}
        {this.renderTile(91)}
        {this.renderTile(92)}
        {this.renderTile(93)}
        {this.renderTile(94)}
        {this.renderTile(95)}
        {this.renderTile(96)}
        {this.renderTile(97)}
        {this.renderTile(99)}
        {this.renderTile(100)}
        {this.renderTile(101)}
        {this.renderTile(102)}
        {this.renderTile(103)}
        {this.renderTile(104)}
        {this.renderTile(105)}
        {this.renderTile(106)}
        {this.renderTile(107)}
        {this.renderTile(108)}
        {this.renderTile(110)}
        {this.renderTile(111)}
        {this.renderTile(112)}
        {this.renderTile(113)}
        {this.renderTile(114)}
        {this.renderTile(115)}
        {this.renderTile(116)}
        {this.renderTile(117)}
        {this.renderTile(118)}
        {this.renderTile(119)}
        {this.renderTile(121)}
        {this.renderTile(122)}
        {this.renderTile(123)}
        {this.renderTile(124)}
        {this.renderTile(125)}
        {this.renderTile(126)}
        {this.renderTile(127)}
        {this.renderTile(128)}
        {this.renderTile(129)}
        {this.renderTile(130)}
        {this.renderTile(132)}
        {this.renderTile(133)}
        {this.renderTile(134)}
        {this.renderTile(135)}
        {this.renderTile(136)}
        {this.renderTile(137)}
        {this.renderTile(138)}
        {this.renderTile(139)}
        {this.renderTile(140)}
        {this.renderTile(141)}
        {this.renderTile(143)}
        {this.renderTile(144)}
        {this.renderTile(145)}
        {this.renderTile(146)}
        {this.renderTile(147)}
        {this.renderTile(148)}
        {this.renderTile(149)}
        {this.renderTile(150)}
        {this.renderTile(151)}
        {this.renderTile(152)}
        {this.renderTile(154)}
        {this.renderTile(155)}
        {this.renderTile(156)}
        {this.renderTile(157)}
        {this.renderTile(158)}
        {this.renderTile(159)}
        {this.renderTile(160)}
        {this.renderTile(161)}
        {this.renderTile(162)}
        {this.renderTile(163)}
        {this.renderTile(165)}
        {this.renderTile(166)}
        {this.renderTile(167)}
        {this.renderTile(168)}
        {this.renderTile(169)}
        {this.renderTile(170)}
        {this.renderTile(171)}
        {this.renderTile(172)}
        {this.renderTile(173)}
        {this.renderTile(174)}
        {this.renderTile(176)}
        {this.renderTile(177)}
        {this.renderTile(178)}
        {this.renderTile(179)}
        {this.renderTile(180)}
        {this.renderTile(181)}
        {this.renderTile(182)}
        {this.renderTile(183)}
        {this.renderTile(184)}
        {this.renderTile(185)}
        {this.renderTile(187)}
        {this.renderTile(188)}
        {this.renderTile(189)}
        {this.renderTile(190)}
        {this.renderTile(191)}
        {this.renderTile(192)}
        {this.renderTile(193)}
        {this.renderTile(194)}
        {this.renderTile(195)}
        {this.renderTile(196)}
        {this.renderTile(198)}
        {this.renderTile(199)}
        {this.renderTile(200)}
        {this.renderTile(201)}
        {this.renderTile(202)}
        {this.renderTile(203)}
        {this.renderTile(204)}
        {this.renderTile(205)}
        {this.renderTile(206)}
        {this.renderTile(207)}
        {this.renderTile(209)}
        {this.renderTile(210)}
        {this.renderTile(211)}
        {this.renderTile(212)}
        {this.renderTile(213)}
        {this.renderTile(214)}
        {this.renderTile(215)}
        {this.renderTile(216)}
        {this.renderTile(217)}
        {this.renderTile(218)}
      </div>
    );
  }
}

class Game extends React.Component {

  constructor(props) {
    super(props);

    const _tiles = Array(Game.cols * Game.rows).fill(null);
    const _overlap = _tiles;

    for (let i = 0; i < Game.rows; i++) {
      _tiles[i * Game.cols + Game.cols -1] = "O";
    }

    this.gameOver = false;
    this.timer = null;
    this.tiles = _tiles;

    let _pieceIndex = Math.floor(Math.random() * 6);
    this.state = {
      overlap: _overlap,
      pieceIndex: _pieceIndex,
      position: 3,
      button1Text: "Start",
    };
    
    document.onkeydown = (evt) => {
      switch(evt.keyCode) {
        case 38: 
          this.rotate(0);
          break;
        case 40:
          this.update();
          break;
        case 37:
          this.move(-1);
          break;
        case 39:
          this.move(1);
          break;
        default:
          break;
      }
    };
  }

  resetGame() {
    const _tiles = Array(Game.cols * Game.rows).fill(null);
    const _overlap = _tiles;

    for (let i = 0; i < Game.rows; i++) {
      _tiles[i * Game.cols + Game.rows -1] = "O";
    }

    this.gameOver = false;
    this.timer = null;
    this.tiles = _tiles;
    
    let _pieceIndex = Math.floor(Math.random() * 6);
    this.setState({
      overlap: _overlap,
      pieceIndex: _pieceIndex,
      position: 3,
      button1Text: "Start",
    });
  }

  start () {
    const _state = this.state;
    if (this.gameOver) {
      this.resetGame();
    }
    if (this.state.button1Text === "Start") {
      this.setState({
        overlap: _state.overlap,
        pieceIndex: _state.pieceIndex,
        position: _state.position,
        button1Text: "Stop",
      });
      this.timer = setInterval(() => this.update(), 200);
    } else {
      this.setState({
        overlap: _state.overlap,
        pieceIndex: _state.pieceIndex,
        position: _state.position,
        button1Text: "Start",
      });
      clearInterval(this.timer);
    }
  }

  rotate(direction) {
    let _state = this.state;
    let _pieceIndex = (
      direction === 0 ? 
      Game.leftRotation[this.state.pieceIndex] :
      Game.rightRotation[this.state.pieceIndex]
    );
    let _tiles = this.insertPiece(this.tiles, _pieceIndex, this.state.position);
    if (_tiles[0]) {
      this.setState({
        overlap: _tiles[1],
        pieceIndex: _pieceIndex,
        position: _state.position,
        button1Text: _state.button1Text,
      });
    }
  }

  move(distance) {
    const _state = this.state;
    let _position = this.state.position + distance;
    if (_position < 0 || _position >= Game.cols * Game.rows)
      return;

    let _tiles = this.insertPiece(this.tiles, this.state.pieceIndex, _position);
    if (_tiles[0]) {
      this.setState({
        overlap: _tiles[1],
        pieceIndex: _state.pieceIndex,
        position: _position,
        button1Text: _state.button1Text,
      });
    }
  }

  insertPiece(tiles, pieceIndex, position) {
    let _tiles = tiles.slice();
    let piece = null;
    let fitted = true;
    piece = Game.piece[pieceIndex];

    for (let i = 0; i < 16; i++) {
      if (piece[i] != null) {
        let index = Math.floor(i / 4) * Game.cols + (i % 4) + position;
        if (index >= Game.cols * Game.rows || tiles[index] != null)
          fitted = false
        _tiles[index] = piece[i];
      }
    }

    return [fitted, _tiles];
  }

  cleanBoard () {
    for (let i = 0; i < Game.rows; i++) {
      let clean = true;
      for (let j = 0; j < Game.cols; j++) {
        if (this.tiles[ i * Game.cols + j ] == null) {
          clean = false;
          break;
        }
      }
      if (clean) {
        for (let j = i * Game.cols - 2; j >= 0; j--) {
          this.tiles[j+Game.cols] = this.tiles[j];
        }
      }
    }
  }

  update () {
    const _state = this.state;
    let _tiles = this.insertPiece(this.tiles, this.state.pieceIndex, this.state.position);
    if (_tiles[0] === true) {
      this.setState({
        overlap: _tiles[1],
        pieceIndex: _state.pieceIndex,
        position: _state.position + Game.cols,
        button1Text: _state.button1Text,
      });
    } else {
      if (_state.position < 9) {
        this.gameOver = true;
        clearInterval(this.timer);
        this.setState({
          overlap: _tiles[1],
          pieceIndex: 0,
          position: 3,
          button1Text: "Start",
        });
      } else {
        this.tiles = this.state.overlap;
        this.cleanBoard();
        let pieceIndex = Math.floor(Math.random() * 6);
        this.setState({
          overlap: _state.overlap,
          pieceIndex: pieceIndex,
          position: 3,
          button1Text: _state.button1Text,
        });
      }
    }
  }

  render() {
    return (
      <div>
      <Board
        tiles={this.state.overlap}
      />
      <button 
        onClick={() => this.start()}
      >
        {this.state.button1Text}
      </button>
      </div>
    );
  }
}

Game.leftRotation = [1, 0, 5, 2, 3, 4];
Game.rightRotation = [1, 0, 3, 4, 5, 2];
Game.cols = 11;
Game.rows = 20;

Game.piece = [
  [ //0
    'O' , 'O' , 'O' , 'O' ,
    null, null, null, null,
    null, null, null, null,
    null, null, null, null,
  ],
  [ //1
    null, 'O' , null, null,
    null, 'O' , null, null,
    null, 'O' , null, null,
    null, 'O' , null, null,
  ],
  [ //2
    null, 'O' , 'O' , null,
    null, null, 'O' , null,
    null, null, 'O' , null,
    null, null, null, null,
  ],
  [ //3
    null, null, 'O' , null,
    'O' , 'O' , 'O' , null,
    null, null, null, null,
    null, null, null, null,
  ],
  [ //4
    null, 'O' , null, null,
    null, 'O' , null, null,
    null, 'O' , 'O' , null,
    null, null, null, null,
  ],
  [ //5
    null, null, null, null,
    null, 'O' , 'O' , 'O' ,
    null, 'O' , null, null,
    null, null, null, null,
  ],
];

// ========================================

ReactDOM.render(
  <div>
    <h1>tetreact</h1>
    <Game/>
  </div>,
  document.getElementById('root')
);

/*for (let i = 0; i < Game.cols * Game.rows; i++) {
  if (i % Game.cols != Game.cols - 1)
    document.write('<div>{this.renderTile('+i+')}</div><br/>');
}*/
