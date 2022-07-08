import React from "react";

const Login = () => {
  return (
    <div>
      <section className="login_section">
        <div className="container">
          <div className="row login_center ">
            <div className="col-lg-10 col-12 login_center_bg">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-0 m-0 p-0 hideOnSmall">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png"
                    alt="login cover bg"
                  />
                </div>

                <div className="col-lg-6 col-md-6 col-12  ">
                  {/* if we need image logo pu here */}
                  {/* <div className="loginBox">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png"
                      alt="company logo"
                    /> */}
                    <div className="login_form">
                  <div className="welcome_text pb-4">
                    Hello,
                    <p> Welcome!</p>
                  </div>
                  {/* this div closing of upside logo div */}
                  {/* </div> */}

                  <form>
                  <div className="pb-3">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      inputMode="email"
                      className="form-control"
                      placeholder="someone@eaxmple.com"
                      name="email"
                    />
                  </div>
                  <div className="pb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      inputMode="password"
                      className="form-control"
                      placeholder="xxxxxxx"
                      name="password"
                    />
                  </div>
                  <div className="pt-3"></div>

                  <button type="submit" className="primary_button w-100">
                    Login
                  </button>

                  <div className="pt-3"></div>
                  <small className=" ">
                    Unable to Login? please contact
                    <b>
                      <a href="tel:9861378115">+977-9861378115</a>
                    </b>
                  </small>
                  </form></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
