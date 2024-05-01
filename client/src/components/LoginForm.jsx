import { useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../graphql/mutations/user.mutation";

const LoginForm = ({ closeModal }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState("");

  const [login, { loading, client }] = useMutation(LOGIN, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handled in resolvers
    // if (!loginData.email || !loginData.password)
    //   return setWarning("All fields are required.");

    try {
      setWarning("");

      await login({ variables: { input: loginData } });

      closeModal(false);

      setLoginData({
        email: "",
        password: "",
      });

      client.resetStore();
    } catch (err) {
      console.error("Error logging in: ", err);
      setWarning(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        label="Email"
        id="login-email"
        name="email"
        type="email"
        value={loginData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        id="login-password"
        name="password"
        type="password"
        value={loginData.password}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="mx-auto mt-1 max-w-fit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Log In"}
      </Button>
      <p
        className={`mx-auto border border-red-800 p-2 bg-red-100 text-sm text-red-800 font-medium ${
          !warning && "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default LoginForm;
