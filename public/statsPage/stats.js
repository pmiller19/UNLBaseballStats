

//build the UI with data from firebase

'use strict';

const e = React.createElement;

class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (
      <div className="player-card">
        <h1 id="card-name">Spencer Schwellenbach</h1>
        <h3 id="card-position">Shortstop</h3>
        <h3 id="card-success">Success: 96%</h3>
      </div>
      );
  }
}


const domContainer = document.querySelector('#player-row');
ReactDOM.render(e(PlayerCard), domContainer);