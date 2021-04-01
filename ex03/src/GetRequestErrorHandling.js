import React, { Component } from 'react';


class getRequestErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { totalReactpackages: null, errorMessage: null }
    }

    componentDidMount() {

        fetch('https://api.npms.io/v2/invalid-url');

        .then(async response => {

            const data = await response.json();

            if (!response.ok) {

                const error = (data && data message) || response.statusText;

                return Promise.reject(error);

            }

            this.setState({ totalReactpackages: data.total })

        })

        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);

        });

        render() {
            const { errorMessage } = this.state;
            return ( <
                div className = "card text-center m-3" >

                <
                h5 className = "card-header" > GET request with Error Handling < /h5>

                <
                div className = "card-body" > Error message: { errorMessage } < /div>

                <
                /div >
            );
        }
    }

    export default getRequestErrorHandling;