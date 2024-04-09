import { useState } from "react";
import InputField from "./ui/InputField";
import Button from "./ui/Button";

const SignUpForm = () => {
  // for testing
  // const warning = "Invalid email or password.";
  // const warning = "";

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [warning, setWarning] = useState("");

  // const [signup, { loading }] = useMutation(SIGN_UP, {
  //   refetchQueries: ["GetAuthenticatedUser"],
  // });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signUpData.name || !signUpData.email || !signUpData.password)
      return setWarning("Please fill in all fields.");
    try {
      setWarning("");
      // change this to actual behavior
      await console.log(signUpData);
    } catch (err) {
      console.error("Error signing up: ", err);
      setWarning("err.message");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField label="Name" id="name" name="name" onChange={handleChange} />
      <InputField
        label="Email"
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <InputField
        label="Password"
        id="password"
        name="password"
        type="password"
        onChange={handleChange}
      />
      {/* <Button type="submit" className="mx-auto max-w-fit" disabled={loading}> */}
      <Button type="submit" className="mx-auto max-w-fit">
        {/* {loading ? "Loading..." : "Sign Up"} */}
        Sign Up
      </Button>
      <p
        className={`mx-auto border border-red-800 p-2 bg-red-100 text-sm text-red-800 ${
          warning ? "" : "hidden"
        }`}
      >
        {warning}
      </p>
    </form>
  );
};

export default SignUpForm;
