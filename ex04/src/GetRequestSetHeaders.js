import React, { Component } from 'react';


class getRequestSetHeaders extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactpackages: null }
    }

    componentDidMount() {
        const headers = { 'Content-Type': 'application/json' }
        fetch('https://api.npms.io/v2/search?q=react', { headers })
            .then(response => response.json())
            .then(data => this.setState({ totalReactpackages: data.total }));
    }

    render() {
        const { totalReactpackages } = this.state;
        return ( <
            div className = "card text-center m-3" >

            <
            h5 className = "card-header" > GET request with Set Headers < /h5>

            <
            div className = "card-body" > Total packages: { totalReactpackages } < /div>

            <
            /div >
        );
    }
}

export default GetRequestSetHeaders;