//State argument is not application state, but only
//this reducer is responsible for

export default function(state = null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }
  
  return state;
}