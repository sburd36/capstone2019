import React, { Component } from 'react';

import { withFirebase } from './Firebase';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      if (usersObject == null) {
          console.log("NOBDY IS ENTERED INTO THE DATABSE")
      } else {
        const usersList = Object.keys(usersObject).map(key => ({
            ...usersObject[key],
            uid: key,
          }));


      this.setState({
        users: usersList,
        loading: false,
      });
    }
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h4>Admin -> For testing</h4>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>FirstName:</strong> {user.firstname}
        </span>
        <span>
          <strong>LastName:</strong> {user.lastname}
        </span>
        <span>
          <strong>Type:</strong> {user.type}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(AdminPage);