import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOG_OUT } from "../../graphql/mutations/user.mutation";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const Header = ({ auth, loadingAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [swapLoginSignUp, setSwapLoginSignUp] = useState(false);

  const handleMenuOpen = () => setMenuOpen((prevState) => !prevState);

  const [logout, { loading, client }] = useMutation(LOG_OUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleLogout = async () => {
    try {
      await logout();

      client.resetStore(); // clears cache on logout
    } catch (err) {
      console.log("Error logging out: ", err);
    }
  };

  const linkStyles = {
    base: "flex items-center min-h-[28pt] md:min-h-0 font-semibold ",
    inactive: "hover:text-emerald-100",
    active: "text-emerald-100",
  };

  return (
    <header className="fixed top-0 md:static z-10 w-full bg-indigo-500 text-white border-b-4 border-black">
      {/* max-width container */}
      <nav
        className="flex flex-col md:flex-row mx-auto max-w-7xl px-4 py-2 pt-4 md:p-6 md:pb-4"
        aria-label="Main"
      >
        {/* title and mobile menu button */}
        <div className="flex w-full justify-between items-center">
          {/* TODO: dropshadow style */}
          <NavLink
            to="/"
            className="text-2xl md:text-4xl font-display -mt-1 md:-mt-2"
            onClick={() => setMenuOpen(false)}
          >
            projeCritter
          </NavLink>
          <div className="flex md:hidden">
            <Button
              style="icon"
              className="fill-white"
              onClick={handleMenuOpen}
            >
              {!menuOpen ? (
                <HiMenu className="w-full h-auto -mr-1" aria-hidden="true" />
              ) : (
                <HiX className="w-full h-auto -mr-1" aria-hidden="false" />
              )}
            </Button>
          </div>
        </div>

        {/* navigation links */}
        <div
          className={`${
            !menuOpen ? "hidden" : "flex"
          } md:flex flex-col md:flex-row md:gap-4 shrink-0 items-end md:items-center`}
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              linkStyles.base +
              (isActive ? linkStyles.active : linkStyles.inactive)
            }
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>

          {/* show only when logged in */}
          {!loadingAuth && auth && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  linkStyles.base +
                  (isActive ? linkStyles.active : linkStyles.inactive)
                }
                onClick={() => setMenuOpen(false)}
              >
                Dashboard
              </NavLink>
              <Button
                touchTargetSize="medium"
                onClick={handleLogout}
                disabled={loading}
                className="mt-2 md:mt-0 md:ml-1"
              >
                {loading ? "Loading..." : "Log Out"}
              </Button>
            </>
          )}

          {/* show only when loading */}
          {loadingAuth && (
            <Button
              touchTargetSize="medium"
              className="mt-2 md:mt-0 md:ml-1"
              disabled={true}
            >
              Loading...
            </Button>
          )}

          {/* show only when logged out */}
          {!loadingAuth && !auth && (
            <>
              <Button
                touchTargetSize="medium"
                onClick={() => {
                  setSwapLoginSignUp(false);
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="mt-2 md:mt-0 md:ml-1"
              >
                Log In
              </Button>

              <Button
                touchTargetSize="medium"
                onClick={() => {
                  setSwapLoginSignUp(true);
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="mt-3 md:mt-0"
              >
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* signup/login modal */}
        <Modal
          title={!swapLoginSignUp ? "Log In" : "Sign Up"}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          {!swapLoginSignUp ? (
            <>
              <LoginForm closeModal={setModalOpen} />
              <p className="text-xs mt-2 text-center font-medium">
                Don{"'"}t have an account yet?{" "}
                <button
                  className="font-bold hover:underline"
                  onClick={() => setSwapLoginSignUp(true)}
                >
                  Sign up here!
                </button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm closeModal={setModalOpen} />
              <p className="text-xs mt-2 text-center font-medium">
                Already have an account?{" "}
                <button
                  className="font-bold hover:underline"
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
