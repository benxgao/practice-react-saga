import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserItem from './UserItem';
import { loadUserPage } from '../actions';
import { connect } from 'react-redux';

class UserList extends Component {
  componentDidMount() {
    this.props.loadUserPage();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <h3>users</h3>
        {users && users.length > 0 && users.map(user => (
          <UserItem key={user.id} {...{user}} />
        ))}
      </div>
    )
  }
}

// UserList.propTypes = {
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// }

const mapStateToProps = state => {
  return ({ users: state.users });
}

export default connect(
  mapStateToProps,
  {
    loadUserPage
  }
)(UserList);
