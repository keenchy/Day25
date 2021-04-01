import React, { Component } from 'react';


class getRequestAsyncAwait extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactpackages: null }
    }

    componentDidMount() {
        await fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => this.setState({ totalReactpackages: data.total }));

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

export default getRequestAsyncAwait;