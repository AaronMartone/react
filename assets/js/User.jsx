'use strict';

var React = require('react');
var Orders = require('./Orders.jsx');

module.exports = React.createClass({
    render: function() {
        return (        
            <div>                
                <p>{this.props.data.username} (<em>{this.props.data.name.last}, {this.props.data.name.first}</em>) &ndash; {this.props.data.email}</p>
                <p><strong>ORDERS:</strong></p>
                <Orders data={this.props.data.orders} />
            </div>
        );  
    }
});