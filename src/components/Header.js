import React from "react"
import Icon from "../lib/Icon"
// import axios from "axios"
import "../styles/styles.css"

import { useGitH } from "../redux/Reducer"

export default function Header() {
  const { user } = useGitH()
  return (
    <header>
      <div className="gh">
        {" "}
        <Icon icon="github"></Icon>
      </div>
      <div className="topLeft">
        <input
          id="topInput"
          type="text"
          name="text"
          placeholder="Search or jump to ..."
        ></input>
        <div className="TopThings">
          <p>Pull requests</p>
          <p>Issues</p>
          <p>Marketplace</p>
          <p>Explore</p>
        </div>
      </div>
      <div className="right">
        <Icon icon="bell"></Icon>
        <Icon icon="plus"></Icon>
        <Icon icon="sort-down"></Icon>
        <img className="me" src={user.avatar_url} width="20px"></img>
        <Icon icon="sort-down"></Icon>
      </div>
    </header>
  )
}
