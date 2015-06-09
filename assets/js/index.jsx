'use strict';

var React = require('react');
var UsersList = require('./UsersList.jsx');

var App = React.createClass({
    getInitialState: function() {
        return {
            users: [],
            title: 'Users Manager, Now with React!'
        }
    },
    componentDidMount: function() {
        var testData = [{
            "_id": 123456789,
            "username": "Aegis",
            "name": {
                "last": "Martone",
                "first": "Aaron"
            },
            "email": "aegis@aaronmartone.com",
            "orders": [
                { "name": "Apples", "price": 3.99, "qty": 1 },
                { "name": "12oz. Steak", "price": 12.95, "qty": 1}
            ]
        }, {
            "_id": 987654321,
            "username": "Jezebelle",
            "name": {
                "last": "Macik",
                "first": "Jen"
            },
            "email": "jen@aaronmartone.com",
            "orders": [
                { "name": "Tacos", "price": 7.49, "qty": 4 }
            ]
        }];
        this.setState({users: testData});
    },
    render: function() {
        return <UsersList data={this.state.users}/>;
    }
});

React.render(<App />, document.body);