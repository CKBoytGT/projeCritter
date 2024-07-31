import Button from "./Button";
import Modal from "./Modal";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { LOG_OUT } from "../../graphql/mutations/user.mutation";
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
    active:
      "text-emerald-100 underline underline-offset-2 decoration-2 decoration-black",
  };

  return (
    <header className="bg-indigo-650 fixed top-0 z-10 w-full border-b-4 border-black text-white md:static">
      {/* max-width container */}
      <nav
        className="mx-auto flex max-w-7xl flex-col px-4 py-2 pt-4 md:flex-row md:p-6 md:pb-4"
        aria-label="Main"
      >
        {/* title and mobile menu button */}
        <div className="flex w-full items-center justify-between">
          <NavLink
            to="/"
            className="font-display -mt-1 text-2xl drop-shadow-[0.2rem_0.2rem_black] active:translate-x-[0.25rem] active:translate-y-[0.25rem] active:drop-shadow-none md:-mt-2 md:text-4xl"
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
              <span className="sr-only">Menu</span>
              {!menuOpen ? (
                <HiMenu className="-mr-1 h-auto w-full" aria-hidden="true" />
              ) : (
                <HiX className="-mr-1 h-auto w-full" aria-hidden="false" />
              )}
            </Button>
          </div>
        </div>

        {/* navigation links */}
        <div
          className={`${
            !menuOpen ? "hidden" : "flex"
          } shrink-0 flex-col items-end md:flex md:flex-row md:items-center md:gap-4`}
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
          {auth && (
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
                className="mt-2 md:ml-1 md:mt-0"
              >
                {loading ? "Loading..." : "Log Out"}
              </Button>
            </>
          )}

          {/* show only when logged out OR when auth is loading */}
          {!auth && (
            <>
              <Button
                touchTargetSize="medium"
                onClick={() => {
                  setSwapLoginSignUp(false);
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="mt-2 md:ml-1 md:mt-0"
                disabled={loadingAuth}
                loading={loadingAuth}
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
                disabled={loadingAuth}
                loading={loadingAuth}
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
              <p className="mt-2 text-center text-xs font-medium">
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
              <p className="mt-2 text-center text-xs font-medium">
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
