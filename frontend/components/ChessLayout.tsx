import React from 'react';

type ChessContainerProps = {
  gameId : string;
}

export default class ChessLayout extends React.Component<ChessContainerProps, unknown> {
  render() {

    return (
      <div className="cg-container">

      </div>
    );
  }
}

class ChessBoard extends React.Component<{}, unknown> {
  render() {
    return (
      <div className="cg-board">

      </div>
    );
  }
}
