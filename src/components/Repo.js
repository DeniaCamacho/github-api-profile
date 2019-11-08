import React from "react"
import Moment from "react-moment"

import { useGitH } from "../redux/Reducer"

export default function Repo(props) {
  const { user, repos } = useGitH()
  return (
    <div className="boxRepoOutermost">
      <div>
        <nav className="rNav">
          <p>Overview</p>
          <p className="public">
            Repositories <div className="cat">{user.public_repos}</div>
          </p>
          <p>
            Projects <div className="catt">{user.followers}</div>
          </p>
          <p>
            Stars<div className="catt">{user.followers}</div>
          </p>
          <p>
            Followers<div className="catt">{user.followers}</div>
          </p>
          <p>
            Following<div className="catt">{user.followers}</div>
          </p>
        </nav>
        <div className="NewGreen">
          <input type="text" placeholder="Find a repository..."></input>
          <button>Type:All</button>
          <button> Language:All</button>
          <button>New</button>
        </div>
        <div className="reopContainer">
          {repos.map(repo => {
            return (
              <div className="individualRepo" key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
                <button id="estr">&#x02605; Star</button>
                <div id="langTime">
                  <div className="lang">{repo.language}</div>
                  <div className="time">
                    Updated
                    <Moment id="sp" fromNow>
                      {repo.updated_at}
                    </Moment>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
