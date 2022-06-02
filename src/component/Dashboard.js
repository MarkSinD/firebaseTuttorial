import {logout} from "../firebase";

const Dashboard = () => {
  return(
    <>
      <button className="login__btn login__google" onClick={logout}>
        Log out
      </button>
    </>
  )
}

export default Dashboard;