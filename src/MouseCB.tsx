import * as React from 'react';

class State {
  x: number = 0;
  y: number = 0;
}

interface RenderCallbackComponentProps {
  x: number;
  y: number;
};

type RenderCallback = (args: RenderCallbackComponentProps) => JSX.Element;

type Props = Partial<{
  children: RenderCallback;
  render: RenderCallback;
}>;

class MouseCB extends React.PureComponent<Props, State> {
  state: State = new State();

  public handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    const { render, children } = this.props;
    const renderProps: RenderCallbackComponentProps = {
      x: this.state.x,
      y: this.state.y,
    };

    if (render) {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          {render(renderProps)}
        </div>
      )
    }

    if (children instanceof Function) {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          {children(renderProps)}
        </div>
      )
    }

    return null;
  }
}

export default MouseCB;