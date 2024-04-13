import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import { useMutation } from "@apollo/client";
import { LOG_OUT } from "../../graphql/mutations/user.mutation";

const Header = ({ auth }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [loginOpen, setLoginOpen] = useState(false);
  // const [signUpOpen, setSignUpOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [swapLoginSignUp, setSwapLoginSignUp] = useState(false);

  const handleMenuOpen = () => setMenuOpen((prevState) => !prevState);

  const [logout, { loading }] = useMutation(LOG_OUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  // if (auth) {
  //   setLoginOpen(false);
  //   setSignUpOpen(false);
  // }

  const handleLogout = async () => {
    try {
      await logout();
      // TODO: clear Apollo Client cache
    } catch (err) {
      console.log("Error logging out: ", err);
    }
  };

  const linkStyles = {
    base: "flex items-center min-h-[28pt] lg:min-h-0 font-semibold ",
    inactive: "hover:underline",
    active: "underline text-sky-200",
  };

  return (
    <header className="fixed top-0 lg:static w-full bg-black text-white">
      {/* max-width container */}
      <nav
        className="flex flex-col lg:flex-row mx-auto max-w-7xl p-6 pb-4"
        aria-label="Main"
      >
        {/* title and mobile menu button */}
        <div className="flex w-full justify-between">
          <NavLink to="/" className="text-2xl">
            projeCritter
          </NavLink>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={handleMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <HiMenu className="h-[31pt] w-[31pt]" aria-hidden="true" />
              ) : (
                <HiX className="h-[31pt] w-[31pt]" aria-hidden="false" />
              )}
            </button>
          </div>
        </div>
        {/* navigation links */}
        <div
          className={`${
            !menuOpen ? "hidden" : "flex"
          } lg:flex flex-col lg:flex-row lg:gap-4 shrink-0 items-end lg:items-center`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              linkStyles.base +
              (isActive ? linkStyles.active : linkStyles.inactive)
            }
          >
            About
          </NavLink>
          {/* show only when logged in */}
          {auth && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  linkStyles.base +
                  (isActive ? linkStyles.active : linkStyles.inactive)
                }
              >
                Dashboard
              </NavLink>
              <Button style="nav" onClick={handleLogout} disabled={loading}>
                {loading ? "Loading..." : "Log Out"}
              </Button>
            </>
          )}
          {!auth && (
            <>
              <Button
                style="nav"
                onClick={() => {
                  setSwapLoginSignUp(false);
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="my-4 lg:my-0"
              >
                Log In
              </Button>

              <Button
                style="nav"
                onClick={() => {
                  setSwapLoginSignUp(false);
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
        {/* modal */}
        <Modal
          title={!swapLoginSignUp ? "Log In" : "Sign Up"}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          {!swapLoginSignUp ? (
            <>
              <LoginForm closeModal={setModalOpen} />
              <p className="text-xs mt-2 text-center">
                Don{"'"}t have an account yet?{" "}
                <button
                  className="font-bold hover:text-sky-500 hover:underline"
                  onClick={() => setSwapLoginSignUp(true)}
                >
                  Sign up here!
                </button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm closeModal={setModalOpen} />
              <p className="text-xs mt-2 text-center">
                Already have an account?{" "}
                <button
                  className="font-bold hover:text-sky-500 hover:underline"
                  onClick={() => setSwapLoginSignUp(false)}
                >
                  Log in here!
                </button>
              </p>
            </>
          )}
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
