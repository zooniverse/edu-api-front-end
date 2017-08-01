import { State, Effect, Actions } from 'jumpstate';
import oauth from 'panoptes-client/lib/oauth';

// Helper functions
const computeRedirectURL = (window) => {
  const { location } = window;
  return location.origin ||
    `${location.protocol}//${location.hostname}:${location.port}`;
};

// Synchronous Actions
const toggleRegistrationForm = (state) => {
  return { ...state, openRegistrationForm: !state.openRegistrationForm };
};

const setLoginUser = (state, user) => {
  return { ...state, initialised: true, user };
};

const setAdminUser = (state, isAdmin) => {
  return { ...state, admin: isAdmin };
};

const fetchingUser = (state, fetching) => {
  return { ...state, fetching };
};

const setError = (state, error) => {
  return { ...state, error };
};

// Effects are for async actions and get automatically to the global Actions list
Effect('checkLoginUser', () => {
  Actions.auth.fetchingUser(true);
  oauth.checkCurrent()
    .then((user) => {
      Actions.auth.setLoginUser(user);
      Actions.auth.fetchingUser(false);
    }).catch((error) => {
      Actions.auth.fetchingUser(false);
      Actions.auth.setError(error);
    });
});

Effect('loginToPanoptes', () => {
  // Returns a login page URL for the user to navigate to.
  oauth.signIn(computeRedirectURL(window));
});

Effect('logoutFromPanoptes', () => {
  Actions.auth.fetchingUser(true);
  oauth.signOut()
    .then((user) => {
      Actions.auth.setLoginUser(user);
      Actions.auth.fetchingUser(false);
    });
});

const auth = State('auth', {
  // Initial State
  initial: {
    admin: false,
    error: null,
    fetching: false,
    initialised: false,
    openRegistrationForm: false,
    user: null
  },
  // Actions
  fetchingUser,
  setLoginUser,
  setAdminUser,
  setError,
  toggleRegistrationForm
});

export default auth;
