var currentUser = (localStorage['reduxPersist:currentUser'].token) ? (
      JSON.parse(localStorage['reduxPersist:currentUser'])
    ) : (
      {
        isAuthenticated: false,
        token: null,
      }
    )

export default {
  leads: [],
  lead: {},
  houseProjects: [],
  houseProject: {},
  users: [],
  currentUser: currentUser
}
