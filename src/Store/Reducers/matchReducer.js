const basicState = {
    monster : []
  }
  
  function matchReducer(state=basicState, action) {
   let nextState
  console.log('triggered' , action);
  
   switch (action.type) {
     case 'USER_LOADED' : 
     console.log('USER_LOADED');
     
      state.monster = action.value
      nextState = state
      
      return nextState || state
        default : return state
       }
   }
   
  export default matchReducer