import * as React from 'react';
import * as Recompose from 'recompose';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

class OwnState {
  x: number = 0;
  y: number = 0;
}

type ref = React.Ref<any>;

interface InjectedProps {
  x: number;
  y: number;
  ref?: ref;
}

interface OwnProps {
  forwardedRef?: ref;
}

interface Options {
};

const withMouse = ({}: Options = {}) => <P extends InjectedProps>(
  Component: React.ComponentType<P>,
) => {
  type Props = Subtract<P, InjectedProps> & OwnProps;
  class HOC extends React.Component<
    Props,
    OwnState
  > {
    static readonly displayName = Recompose.wrapDisplayName(Component, 'hoc'); 
    state: OwnState = new OwnState();

    public handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
      this.setState({
        x: event.clientX,
        y: event.clientY,
      })
    }

    render() {
      const { forwardedRef, ...rest } = this.props as OwnProps;

      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <Component ref={forwardedRef} {...rest} x={this.state.x} y={this.state.y} />
        </div>
      );
    }
  }

  return React.forwardRef((props: Props, ref?) => {
    return <HOC {...props} forwardedRef={ref} />;
  });
}

export default withMouse;