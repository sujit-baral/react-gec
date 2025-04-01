import React from "react";

class LCMethod extends React.Component {
    constructor(props) {
        console.log('Constructor Method Called');
        super(props);
        this.state = {count: 0}
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log('getDerivedStateFromProps method called');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate method called');
        return nextState.count % 2 === 0;       // Only update if count is even
    }

    componentDidMount() {
        console.log('componentDidMount method called!');
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    render() {
        console.log('Render method called');
        return(
            <>
                <p>This is life cycle method</p>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

export default LCMethod