import React, { Component } from 'react';


class GetRequestAsyncAwait extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactpackages: null }
    }

    async componentDidMount() {
        const response = await fetch('https://api.npms.io/v2/search?q=react');
        const data = await response.json();
        this.setState({ totalReactpackages: data.total });

    }
    render() {
        const { totalReactpackages } = this.state;
        return ( <
            div className = "card text-center m-3" >

            <
            h5 className = "card-header" > GET request with Async / Await < /h5>

            <
            div className = "card-body" > Total packages: { totalReactpackages } < /div>

            <
            /div >
        );
    }
}

export default GetRequestAsyncAwait;