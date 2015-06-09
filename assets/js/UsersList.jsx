'use strict';

var React = require('react');
var User = require('./User.jsx');

module.exports = React.createClass({
    renderUsers: function() {
        return this.props.data.map(function(user) {
            return <User data={user} key={user._id} />;
        });
    },
    render: function() {
        return (
            <div>
                {this.renderUsers()}
            </div>
        );
    }
});