import { State, Effect, Actions } from 'jumpstate';

// Synchonous actions
const setProjectCollection = (state, projectCollection) => {
  return { ...state, projectCollection };
};

const projects = State('projects', {
  // Initial state
  initial: {
    projectCollection: []
  },
  // Actions
  setProjectCollection
});

export default projects;
