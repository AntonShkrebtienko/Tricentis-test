import * as actionTypes from "./actionTypes"

const initialState: AlbumState = {
    albums: [],
    searchParam: ''
}

const reducer = (
    state: AlbumState = initialState,
    action: AlbumAction
  ): AlbumState => {
    switch (action.type) {
      case actionTypes.FETCH_ALBUMS:
        return {
            ...state,  
            albums: action.payload
          }
    case actionTypes.SET_SEARCH_PARAM:
        return {
            ...state,
            searchParam: action.payload
        }
    }
    return state
  }
  
  export default reducer