// someReducer.js

const initialState = {
    // Define initial state properties
    data: [],
    loading: false,
    error: null,
    name:'karthi test redux data'
  };
  
  const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ACTION_TYPE_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'ACTION_TYPE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.payload, // Update state with payload data
        };
      case 'ACTION_TYPE_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.error, // Update state with error message
        };
      default:
        return state; // Return the current state if no action matches
    }
  };
  
  export default testReducer;
  