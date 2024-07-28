import { useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations/user.mutation";

const SignUpForm = ({ closeModal }) => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState("");

  const [signup, { loading, client }] = useMutation(SIGN_UP, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // handled in resolvers
    // if (!signUpData.name || !signUpData.email || !signUpData.password)
    //   return setWarning("All fields are required.");

    try {
      setWarning("");

      await signup({
        variables: {
          input: signUpData,
        },
      });

      closeModal(false);

      setSignUpData({
        name: "",
        email: "",
        password: "",
      });

      client.resetStore();
    } catch (err) {
      console.error("Error signing up: ", err);
      setWarning(err.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        label="Display Name"
        id="signup-name"
        name="name"
        autocomplete="off"
        value={signUpData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        id="signup-email"
        name="email"
        type="email"
        autocomplete="off"
        value={signUpData.email}
        onChange={handleChange}
      />
      <InputField
        label="Password"
        id="signup-password"
        name="password"
        type="password"
        autocomplete="new-password"
        value={signUpData.password}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="mx-auto mt-1 max-w-fit"
        disabled={loading}
      >
        {loading ? "Loading..." : "Sign Up"}
      </Button>
      <p
        className={`mx-auto border border-red-800 bg-red-100 p-2 text-center text-sm font-medium text-red-800 ${
          !warning && "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default SignUpForm;
