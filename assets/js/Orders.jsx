'use strict';

var React = require('react');

module.exports = React.createClass({
    renderOrders: function() {
        return this.props.data.map(function(order) {
            return <li>{order.name} - {order.price} X {order.qty}</li>;
        });
    },
    render: function() {
        return (
            <div>                
                <ul>
                    {this.renderOrders()}
                </ul>
            </div>
        );
    }
});