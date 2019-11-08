import React from "react"

import { useGitH } from "../redux/Reducer"

export default function Main(props) {
  const { user } = useGitH()
  return (
    <div id="profile">
      <div id="pic">
        <img className="Image" width="250px" src={user.avatar_url}></img>{" "}
      </div>
      <h2>{user.name}</h2>
      <p>{user.login}</p>
      <button>Edit Profile</button>
    </div>
  )
}
