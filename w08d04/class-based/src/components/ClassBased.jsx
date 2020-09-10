import React from 'react';

const ClassBased = class extends React.Component {
  constructor() {
    // console.log(props);
    super();
    this.state = {
      counter: 0,
      firstName: 'Alice',
      lastName: 'Something',
      newKey: null,
      users: [],
      interval: null
      // internalGreeting: `${props.greeting} Also more stuff`
    };

    // event handlers need to be bound to `this`
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // THIS IS BAD!!!!!
    // this.state.counter = this.state.counter + 1;

    this.setState({ counter: this.state.counter + 1, newKey: 'hello there' });
  }

  // somethingOtherFn() {
  //   this.state.newKey;
  // }

  fullName() {
    return this.state.firstName + ' ' + this.state.lastName;
  }

  // fetching data, setting up socket connections, setting up timers
  componentDidMount() {
    console.log('component mounted');

    const interval = setInterval(() => {
      this.setState({ counter: this.state.counter + 1 });
    }, 1000);

    this.setState({ interval });
  }

  // listen for updates
  componentDidUpdate(prevProps, prevState) {
    // console.log('prev', prevState);
    // console.log('state', this.state);
    console.log('component updated');
  }

  // cleanup, sever the socket connection, cancel intervals
  componentWillUnmount() {
    console.log('component will unmount');

    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
        <h2>Hello {this.fullName()}</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment!</button>
      </div>
    );
  }
}

export default ClassBased;
