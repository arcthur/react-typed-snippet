import * as React from 'react';

class Props {
  x: number = 0;
  y: number = 0;
}

const Coord: React.SFC<Props> = ({ x, y }) => (<p>{x}, {y}</p>);

Coord.defaultProps = new Props();

export default Coord;
