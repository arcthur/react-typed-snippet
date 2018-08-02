import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Coord from './Coord';
import Button from './Button';
import MouseCB from './MouseCB';
import withMouse from './withMouse';

type Props = {}
class State {}

const MCoord = withMouse()(Coord);

class App extends React.Component<Props, State> {
  public handleClick(e: React.MouseEvent<HTMLElement>) { 
  }

  render() {
    return (
      <>
        <Button onClick={this.handleClick}>B</Button>
        <MCoord />
        <MouseCB>
          {({ x, y }) => (<Coord x={x} y={y} />)}
        </MouseCB>
      </>
    );
  }
}

ReactDOM.render(<App />, document.body);