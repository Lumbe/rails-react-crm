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
    entities: {},
    leads: {data: [], meta: {}},
    projects: {projects: [], meta: {}},
    project: {},
    user: {},
    currentUser: {
                  email: '',
                  token: null,
                  isAuthenticated: false,
                },
    notifications: []
}
