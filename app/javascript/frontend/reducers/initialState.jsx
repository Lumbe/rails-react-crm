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
    leads: {leads: [], meta: {}},
    lead: {},
    projects: {projects: [], meta: {}},
    project: {},
    houseProjects: [],
    houseProject: {},
    user: {},
    currentUser: {
                  email: '',
                  token: null,
                  isAuthenticated: false,
                },
    notifications: [],
    notification: null
}
