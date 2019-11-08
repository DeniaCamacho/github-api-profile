import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
// import { dispatch } from "../../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/range"

//actions "names"
const GET_REPO = "GET_REPO"
const GET_USER = "GET_USER"

//reducer
const initialState = {
  user: {},
  repos: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPO:
      return { ...state, repos: action.payload }
    case GET_USER:
      return { ...state, user: action.payload }
    default:
      return state
  }
}
//hook
export function useGitH(username) {
  const dispatch = useDispatch(username)
  const repos = useSelector(appState => appState.Reducer.repos)
  const user = useSelector(appState => appState.Reducer.user)

  useEffect(() => {
    dispatch(getUser(username))
    dispatch(getRepo(username))
  }, [])
  return { repos, user }
}

//actions

function getRepo(username) {
  return dispatch => {
    axios.get("https://api.github.com/users/DeniaCamacho/repos").then(resp => {
      dispatch({
        type: GET_REPO,
        payload: resp.data
      })
    })
  }
}
function getUser(username) {
  return dispatch => {
    axios.get("https://api.github.com/users/DeniaCamacho").then(resp => {
      dispatch({
        type: GET_USER,
        payload: resp.data
      })
    })
  }
}
