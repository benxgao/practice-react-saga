import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';

import { connect } from 'react-redux';
import { getVisibleusers } from '../reducers/users';

class UserList extends Component {
  render() {
    const { users } = this.props

    return (
      <div>
        <h3>users</h3>
        {users.map(user => (
          <UserItem key={user.id} {...{user}} />
        ))}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default connect(
  state => ({ users: getVisibleusers(state.users) }),
)(UserList);
