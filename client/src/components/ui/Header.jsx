import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Modal from "./Modal";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen((prevState) => !prevState);

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
          <a href="/" className="text-2xl">
            projeCritter
          </a>
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
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              linkStyles.base +
              (isActive ? linkStyles.active : linkStyles.inactive)
            }
          >
            Dashboard
          </NavLink>
          <Button style="nav">Log Out</Button>
          {/* show only when logged out */}
          <Button
            style="nav"
            onClick={() => {
              setLoginOpen(true);
              setMenuOpen(false);
            }}
            className="my-4 lg:my-0"
          >
            Log In
          </Button>

          <Button
            style="nav"
            onClick={() => {
              setSignUpOpen(true);
              setMenuOpen(false);
            }}
          >
            Sign Up
          </Button>
        </div>
        {/* modals */}
        <Modal
          title="Log In"
          open={loginOpen}
          onClose={() => setLoginOpen(false)}
        >
          <LoginForm />
        </Modal>
        <Modal
          title="Sign Up"
          open={signUpOpen}
          onClose={() => setSignUpOpen(false)}
        >
          <SignUpForm />
        </Modal>
      </nav>
    </header>
  );
};

export default Header;
