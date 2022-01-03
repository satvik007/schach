import React from 'react';
import Image from 'next/image';

type ChessContainerProps = {
  gameId : string;
}

type PieceInfo = {
  id : number;
  type : "root" | "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";
  color : "white"|"black";
  x : 0|1|2|3|4|5|6|7;
  y : 0|1|2|3|4|5|6|7;
}

type ChessBoardProps = {
  pieces: PieceInfo[];
}

type ChessLayoutState = {
  pieces: PieceInfo[];
  timeBlack: number;
  timeWhite: number;
  moves: String[];
}

export default class ChessLayout extends React.Component<ChessContainerProps, ChessLayoutState> {

  constructor(props: ChessContainerProps) {
    super(props);
    this.setState({
      pieces: INIT_STATE.pieces,
      timeBlack: 0,
      timeWhite: 0,
      moves: []
    });
  }

  render() {
    return (
      <div className="cg-container">
        <ChessBoard pieces={this.state.pieces}/>
      </div>
    );
  }
}

class ChessBoard extends React.Component<ChessBoardProps, unknown> {
  render() {
    const {pieces} = this.props;
    return (
      <div className="cg-board">
        <Image
          src="/images/board/svg/brown.svg"
          alt="chessboard"
          className="cg-board-image"
        />

        <div>
          {pieces.map(piece => {
            return (
              <div
                key={piece.id}
                className={`cg-piece ${piece.color} ${piece.type}`}
                style={{
                  left: `${piece.x * 100}%`,
                  top: `${piece.y * 100}%`,
                }}
              />
            );
          })}
        </div>



      </div>
    );
  }
}

const INIT_STATE : {pieces: PieceInfo[]} = {
  pieces: [
    {
      id : 1,
      type : "rook",
      color : "white",
      x : 0,
      y : 0,
    },
    {
      id : 2,
      type : "knight",
      color : "white",
      x : 1,
      y : 0,
    },
    {
      id : 3,
      type : "bishop",
      color : "white",
      x : 2,
      y : 0,
    },
    {
      id : 4,
      type : "queen",
      color : "white",
      x : 3,
      y : 0,
    },
    {
      id : 5,
      type : "king",
      color : "white",
      x : 4,
      y : 0,
    },
    {
      id : 6,
      type : "bishop",
      color : "white",
      x : 5,
      y : 0,
    },
    {
      id : 7,
      type : "knight",
      color : "white",
      x : 6,
      y : 0,
    },
    {
      id : 8,
      type : "rook",
      color : "white",
      x : 7,
      y : 0,
    },
    {
      id : 9,
      type : "pawn",
      color : "white",
      x : 0,
      y : 1,
    },
    {
      id : 10,
      type : "pawn",
      color : "white",
      x : 1,
      y : 1,
    },
    {
      id : 11,
      type : "pawn",
      color : "white",
      x : 2,
      y : 1,
    },
    {
      id : 12,
      type : "pawn",
      color : "white",
      x : 3,
      y : 1,
    },
    {
      id : 13,
      type : "pawn",
      color : "white",
      x : 4,
      y : 1,
    },
    {
      id : 14,
      type : "pawn",
      color : "white",
      x : 5,
      y : 1,
    },
    {
      id : 15,
      type : "pawn",
      color : "white",
      x : 6,
      y : 1,
    },
    {
      id : 16,
      type : "pawn",
      color : "white",
      x : 7,
      y : 1,
    },
    {
      id: 17,
      type: "rook",
      color: "black",
      x: 0,
      y: 7,
    },
    {
      id: 18,
      type: "knight",
      color: "black",
      x: 1,
      y: 7,
    },
    {
      id: 19,
      type: "bishop",
      color: "black",
      x: 2,
      y: 7,
    },
    {
      id: 20,
      type: "queen",
      color: "black",
      x: 3,
      y: 7,
    },
    {
      id: 21,
      type: "king",
      color: "black",
      x: 4,
      y: 7,
    },
    {
      id: 22,
      type: "bishop",
      color: "black",
      x: 5,
      y: 7,
    },
    {
      id: 23,
      type: "knight",
      color: "black",
      x: 6,
      y: 7,
    },
    {
      id: 24,
      type: "rook",
      color: "black",
      x: 7,
      y: 7,
    },
    {
      id: 25,
      type: "pawn",
      color: "black",
      x: 0,
      y: 6,
    },
    {
      id: 26,
      type: "pawn",
      color: "black",
      x: 1,
      y: 6,
    },
    {
      id: 27,
      type: "pawn",
      color: "black",
      x: 2,
      y: 6,
    },
    {
      id: 28,
      type: "pawn",
      color: "black",
      x: 3,
      y: 6,
    },
    {
      id: 29,
      type: "pawn",
      color: "black",
      x: 4,
      y: 6,
    },
    {
      id: 30,
      type: "pawn",
      color: "black",
      x: 5,
      y: 6,
    },
    {
      id: 31,
      type: "pawn",
      color: "black",
      x: 6,
      y: 6,
    },
    {
      id: 32,
      type: "pawn",
      color: "black",
      x: 7,
      y: 6,
    },
  ]
}
