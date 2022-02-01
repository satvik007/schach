import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

type ChessContainerProps = {
  gameId: string
  className: string
}

type PieceInfo = {
  id?: number
  type: 'root' | 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king'
  color: 'white' | 'black'
  x: number
  y: number
}

type ChessBoardProps = {
  className: string
  pieces: PieceInfo[]
  view: 'white' | 'black'
}

type ChessBoardState = {
  selectedPiece: PieceInfo | null
  side: number
}

type ChessLayoutState = {
  pieces: PieceInfo[]
  timeBlack: number
  timeWhite: number
  moves: String[]
  view: 'white' | 'black'
}

export default class ChessLayout extends React.Component<ChessContainerProps, ChessLayoutState> {
  constructor(props: ChessContainerProps) {
    super(props)
    this.state = {
      pieces: INIT_STATE.pieces,
      timeBlack: 0,
      timeWhite: 0,
      moves: [],
      view: 'white',
    }
  }

  render() {
    return (
      <div className={clsx('cg-container', this.props.className)}>
        <ChessBoard className="flex" view={this.state.view} pieces={this.state.pieces} />
      </div>
    )
  }
}

function calculateCoord(view: 'white' | 'black', offset: number, size: number): number {
  if (view === 'white') {
    return ((7 - offset) * size) / 8
  } else {
    return (offset * size) / 8
  }
}

function ChessBoard({ className, ...props }: ChessBoardProps) {
  const boardRef = React.createRef<HTMLDivElement>()

  const [state, setState] = React.useState<ChessBoardState>({
    selectedPiece: null,
    side: 0,
  })

  const { pieces } = props

  const updateSide = () => {
    setState({
      selectedPiece: state.selectedPiece,
      side: boardRef.current?.clientWidth || 0,
    })
  }

  useEffect(() => {
    updateSide()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateSide)
    return () => window.removeEventListener('resize', updateSide)
  })

  return (
    <div className="cg-board flex inline-flex">
      <div className="relative flex object-contain" ref={boardRef}>
        <Image
          src="/images/board/svg/brown.svg"
          alt="chessboard"
          className="cg-board-image"
          height={800}
          width={800}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full">
        {pieces.map((piece) => {
          return (
            <ChessPiece
              key={piece.id}
              type={piece.type}
              color={piece.color}
              x={(piece.x * state.side) / 8}
              y={calculateCoord(props.view, piece.y, state.side)}
            />
          )
        })}
      </div>

      <Ranks side={state.side} view={props.view} />
      <Files side={state.side} view={props.view} />
    </div>
  )
}

function ChessPiece({ type, color, x, y }: PieceInfo) {
  return (
    <div
      className={`cg-piece ${color} ${type}`}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    />
  )
}

function Files(props: { side: number; view: 'white' | 'black' }) {
  return (
    <div className="absolute bottom-0 left-0 flex flex-row w-full files">
      {Array(8)
        .fill(undefined)
        .map((_, i) => {
          const ch = String.fromCharCode('a'.charCodeAt(0) + (props.view === 'white' ? i : 7 - i))
          return (
            <div
              key={i}
              className="flex-auto ml-1"
              style={{ font: `${(1.4 * props.side) / 800}em` }}
            >
              {ch}
            </div>
          )
        })}
    </div>
  )
}

function Ranks(props: { side: number; view: 'white' | 'black' }) {
  return (
    <div className="absolute top-0 right-0 flex flex-col h-full ranks">
      {Array(8)
        .fill(undefined)
        .map((_, i) => {
          const ch = props.view === 'white' ? 8 - i : i + 1
          return (
            <div key={i} className="flex-auto" style={{ font: `${(1.2 * props.side) / 800}em` }}>
              {ch}
            </div>
          )
        })}
    </div>
  )
}

const INIT_STATE: { pieces: PieceInfo[] } = {
  pieces: [
    {
      id: 1,
      type: 'rook',
      color: 'white',
      x: 0,
      y: 0,
    },
    {
      id: 2,
      type: 'knight',
      color: 'white',
      x: 1,
      y: 0,
    },
    {
      id: 3,
      type: 'bishop',
      color: 'white',
      x: 2,
      y: 0,
    },
    {
      id: 4,
      type: 'queen',
      color: 'white',
      x: 3,
      y: 0,
    },
    {
      id: 5,
      type: 'king',
      color: 'white',
      x: 4,
      y: 0,
    },
    {
      id: 6,
      type: 'bishop',
      color: 'white',
      x: 5,
      y: 0,
    },
    {
      id: 7,
      type: 'knight',
      color: 'white',
      x: 6,
      y: 0,
    },
    {
      id: 8,
      type: 'rook',
      color: 'white',
      x: 7,
      y: 0,
    },
    {
      id: 9,
      type: 'pawn',
      color: 'white',
      x: 0,
      y: 1,
    },
    {
      id: 10,
      type: 'pawn',
      color: 'white',
      x: 1,
      y: 1,
    },
    {
      id: 11,
      type: 'pawn',
      color: 'white',
      x: 2,
      y: 1,
    },
    {
      id: 12,
      type: 'pawn',
      color: 'white',
      x: 3,
      y: 1,
    },
    {
      id: 13,
      type: 'pawn',
      color: 'white',
      x: 4,
      y: 1,
    },
    {
      id: 14,
      type: 'pawn',
      color: 'white',
      x: 5,
      y: 1,
    },
    {
      id: 15,
      type: 'pawn',
      color: 'white',
      x: 6,
      y: 1,
    },
    {
      id: 16,
      type: 'pawn',
      color: 'white',
      x: 7,
      y: 1,
    },
    {
      id: 17,
      type: 'rook',
      color: 'black',
      x: 0,
      y: 7,
    },
    {
      id: 18,
      type: 'knight',
      color: 'black',
      x: 1,
      y: 7,
    },
    {
      id: 19,
      type: 'bishop',
      color: 'black',
      x: 2,
      y: 7,
    },
    {
      id: 20,
      type: 'queen',
      color: 'black',
      x: 3,
      y: 7,
    },
    {
      id: 21,
      type: 'king',
      color: 'black',
      x: 4,
      y: 7,
    },
    {
      id: 22,
      type: 'bishop',
      color: 'black',
      x: 5,
      y: 7,
    },
    {
      id: 23,
      type: 'knight',
      color: 'black',
      x: 6,
      y: 7,
    },
    {
      id: 24,
      type: 'rook',
      color: 'black',
      x: 7,
      y: 7,
    },
    {
      id: 25,
      type: 'pawn',
      color: 'black',
      x: 0,
      y: 6,
    },
    {
      id: 26,
      type: 'pawn',
      color: 'black',
      x: 1,
      y: 6,
    },
    {
      id: 27,
      type: 'pawn',
      color: 'black',
      x: 2,
      y: 6,
    },
    {
      id: 28,
      type: 'pawn',
      color: 'black',
      x: 3,
      y: 6,
    },
    {
      id: 29,
      type: 'pawn',
      color: 'black',
      x: 4,
      y: 6,
    },
    {
      id: 30,
      type: 'pawn',
      color: 'black',
      x: 5,
      y: 6,
    },
    {
      id: 31,
      type: 'pawn',
      color: 'black',
      x: 6,
      y: 6,
    },
    {
      id: 32,
      type: 'pawn',
      color: 'black',
      x: 7,
      y: 6,
    },
  ],
}
