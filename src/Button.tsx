import * as React from 'react';

interface State {}

class Props {
  color?: string = 'red';
  onClick: ((e: React.MouseEvent<HTMLElement>) => void) | undefined;
}

class Button extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();

  render() {
    const { color, onClick: handleClick, children } = this.props;

    return (
      <button style={{color}} onClick={handleClick}>
        {children}
      </button>
    );
  }
}

export default Button;
