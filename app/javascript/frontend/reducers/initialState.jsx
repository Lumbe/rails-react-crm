// var currentUser = (localStorage['reduxPersist:currentUser'] && JSON.parse(localStorage['reduxPersist:currentUser']).token) ? (
//       JSON.parse(localStorage['reduxPersist:currentUser'])
//     ) : (
//       {
//         email: '',
//         token: null,
//         isAuthenticated: false,
//       }
//     )

export default {
    entities: {
      users: {},
      leads: {},
      departments: {}
    },
    leads: {data: [], meta: {}},
    projects: {projects: [], meta: {}},
    project: {},
    user: {},
    currentUser: {
                  token: null,
                  isAuthenticated: false,
                  id: '',
                  email: '',
                  first_name: '',
                  last_name: '',
                  departments: []
                },
    notifications: []
}
