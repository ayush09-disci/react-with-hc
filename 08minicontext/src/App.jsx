import { Login, Profile } from "./components"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
  )
}

export default App
