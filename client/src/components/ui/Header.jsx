import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import { useMutation } from "@apollo/client";
import { LOG_OUT } from "../../graphql/mutations/user.mutation";
import LoadingSpinner from "./LoadingSpinner";
// import { useNavigate } from "react-router-dom";

const Header = ({ auth, loadingAuth }) => {
  // const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [swapLoginSignUp, setSwapLoginSignUp] = useState(false);

  const handleMenuOpen = () => setMenuOpen((prevState) => !prevState);

  const [logout, { loading }] = useMutation(LOG_OUT, {
    refetchQueries: ["GetAuthenticatedUser", "GetProjects"],
  });

  const handleLogout = async () => {
    try {
      await logout();
      // TODO: clear Apollo Client cache
      // navigate("/");
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
        className="flex flex-col md:flex-row mx-auto max-w-7xl p-6 pb-4"
        aria-label="Main"
      >
        {/* title and mobile menu button */}
        <div className="flex w-full justify-between items-center">
          {/* TODO: dropshadow style */}
          <NavLink to="/" className="text-4xl font-display mt-[-0.5rem]">
            projeCritter
          </NavLink>
          <div className="flex md:hidden">
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
          {/* loading auth spinner */}
          {loadingAuth && <LoadingSpinner style="dark" />}
          {/* show only when logged in */}
          {auth && !loadingAuth && (
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
                size="header"
                onClick={handleLogout}
                disabled={loading}
                className="mt-1 md:mt-0"
              >
                {loading ? "Loading..." : "Log Out"}
              </Button>
            </>
          )}
          {/* show only when logged out */}
          {!auth && !loadingAuth && (
            <>
              <Button
                size="header"
                onClick={() => {
                  setSwapLoginSignUp(false);
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
              >
                Log In
              </Button>

              <Button
                size="header"
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
              <p className="text-xs mt-2 text-center">
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
