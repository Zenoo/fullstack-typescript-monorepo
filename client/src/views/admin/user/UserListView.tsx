import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import UserRoutes, { User } from '../../../api/UserRoutes';
import Page from '../../../components/Page';
import TableLayout from '../../../layouts/TableLayout';

const fetchPath = '(id, login, person(firstName, lastName))';

const UserListView = () => {
  const navigate = useNavigate();

  /**
   * Data mapper
   */
  const mapper = useCallback((user: User) => ({
    id: user.id,
    login: user.login,
    'person.firstName, person.lastName': `${user.person ? `${user.person.firstName} ${user.person.lastName}` : ''}`,
  }), []);

  // New user redirection
  const goToNewUser = useCallback(() => {
    navigate('/app/admin/user/add');
  }, [navigate]);

  // User edition redirection
  const goToUserEdit = useCallback((id: number) => {
    navigate(`/app/admin/user/edit/${id}`);
  }, [navigate]);

  return (
    <Page
      title="User list"
    >
      <TableLayout
        fetchPath={fetchPath}
        getter={UserRoutes.table}
        globalCsvExport={{
          fetcher: UserRoutes.getAllAsCsv,
          fetchPath,
          title: 'User list',
        }}
        mapper={mapper}
        add={goToNewUser}
        edit={goToUserEdit}
        remove={UserRoutes.delete}
        tableOptions={{
          columns: [
            {
              field: 'login',
              headerName: 'Login',
              flex: 1,
            }, {
              field: 'person.firstName, person.lastName',
              headerName: 'Name',
              flex: 1,
            },
          ],
        }}
      />
    </Page>
  );
};

export default UserListView;
