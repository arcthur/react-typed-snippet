import * as React from 'react';

class Props {
  x: number = 0;
  y: number = 0;
}

// const Coord: React.SFC<Props> = ({ x, y }) => (<p>{x}, {y}</p>);

class Coord extends React.PureComponent<Props, {}> {
  public static defaultProps = new Props();

  render() {
    const { x, y } = this.props;

    return (
      <p>{x}, {y}</p>
    );
  }
}

export default Coord;
