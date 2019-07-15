import React, { Component } from 'react';

class AsteroidData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=zcZWDCt7ja9TaIIiARwksUdPPzZXJVdNED5EJhKC", {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'text/html',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(Object.values(result))
                    this.setState({
                        isLoaded: true,
                        items: Object.values(result)
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log(items[2])
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="container">
                    <ul>
                        {items['2'].map(item => (
                            <li key={item.id}>
                                {/* {item.name} */}
                                {item.links.self}
                                {item.name}
                                {item.is_potentially_hazardous_asteroid.toString()}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default AsteroidData;