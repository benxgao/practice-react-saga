import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserItem extends Component {
  render() {
    const { user } = this.props;
    console.log('user', user);

    return (
      <div>
        {user.id}
      </div>
    );
  }
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};
