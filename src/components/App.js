import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import Header from "./Header"
import Main from "./Main"
import Repo from "./Repo"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="webPageFormat">
        <Main />
        <Repo />
      </div>
    </Provider>
  )
}

export default App
