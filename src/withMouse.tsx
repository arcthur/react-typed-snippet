import * as React from 'react';
import * as Recompose from 'recompose';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

class State {
  x: number = 0;
  y: number = 0;
}

interface InjectedProps {
  x: number;
  y: number;
}

interface ExteralProps {}

interface Options {
};

const withMouse = ({}: Options = {}) => <P extends InjectedProps>(
  Component: React.ComponentType<P>,
) => {
  return class HOC extends React.Component<
    Subtract<P, InjectedProps> & ExteralProps,
    State
  > {
    static readonly displayName = Recompose.wrapDisplayName(Component, 'hoc'); 
    state: State = new State();

    public handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} x={this.state.x} y={this.state.y} />
        </div>
      );
    }
  }
}

export default withMouse;