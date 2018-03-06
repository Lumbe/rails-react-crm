import React from 'react';
import {Link} from 'react-router-dom';
import {Table, Pagination} from 'react-bootstrap'

class UsersList extends React.Component {

  handleSelect(event) {
    this.props.load({page: event});
  }

  render() {
    const {users, meta} = this.props;
    return (
      <div>
        {users ?
          <Table responsive>
            <thead>
            <tr>
              <th>Имя</th>
              <th>email</th>
              <th>Представительства</th>
              <th>Админ</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => {
              return <tr key={user.id}>
                <td>
                  <Link to={'users/' + user.id}>
                    {user.first_name +' ' + user.last_name}
                  </Link>
                </td>
                <td>{user.email}</td>
                <td>
                  <ul>
                    {user.departments && user.departments.map((department, index) => {
                      return <li key={index}>{department.name}</li>
                    })}
                  </ul>
                </td>
                <td>{user.admin ? 'Да' : 'Нет'}</td>
              </tr>
            })}
            </tbody>
          </Table>
          :
          <div className="text-center">Ничего не найдено</div>
        }
        {(meta.total_pages > 1) && <Pagination
          bsSize="medium"
          items={meta.total_pages}
          activePage={meta.current_page}
          onSelect={this.handleSelect.bind(this)}/>}
      </div>
    );
  }
}

export default UsersList;
