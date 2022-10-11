import React, { useState } from "react";
import { FaUser, FaLock, FaRegBuilding, FaUserGraduate } from "react-icons/fa";
import Old from "../assets/log.svg";
import New from "../assets/register.svg";

import "./LoginRegisterStyles.css";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i>
                <FaUser />
              </i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i>
                <FaRegBuilding />
              </i>
              <input type="text" placeholder="School" />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i>
                <FaLock />
              </i>
              <select className='transparent'>
                <option>Select your Profile</option>
                <option value='1'>Teacher</option>
                <option value='2'>Student</option>
              </select>
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Create your account and Start taking your courses.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={() => setaddclass("sign-up-mode")}
            >
              Sign up
            </button>
          </div>
          <img src={Old} className="image" alt="Signup" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Connect to your account and continue your
               progress towards Excellency.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => setaddclass("")}
            >
              Sign in
            </button>
          </div>
          <img src={New} className="image" alt="Signin" />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
