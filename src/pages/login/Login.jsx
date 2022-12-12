import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
let navigate = useNavigate();
  return (


    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Beginners in IT</h3>
                <span className="loginDesc">
                    Connect with friends and specialist in IT.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton" onClick={() => navigate(`/register`)}>Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
