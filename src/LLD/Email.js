import React, { useState } from "react";

function Email() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [ConfirmPass, setConfirmPass] = useState("");
  const [EError, setEError] = useState(false);
  const [PassE, setPassE] = useState(false);
  const [CPError, setCPError] = useState(false);

  function hasAlphanumericAndSpecialChars(str) {
    const hasAlphabetic = /[A-Za-z]/.test(str);
    const hasNumeric = /\d/.test(str);
    const hasSpecial = /[^A-Za-z0-9]/.test(str);

    return hasAlphabetic && hasNumeric && hasSpecial;
  }

  const onchangeHandler = (event) => {
    const validEmail = event.target.value;
    // console.log(validEmail);
    setEmail(validEmail);

    if (validEmail.includes("@") && validEmail.endsWith(".com")) {
      setEError(true);
    }

    if (!validEmail.includes("@") || !validEmail.endsWith(".com")) {
      setEError(false);
    }
  };

  const onPasswordHandler = (event) => {
    const ValidP = event.target.value;
    // console.log(ValidP);
    setPass(ValidP);

    if (
      ValidP.length >= 8 &&
      ValidP.length <= 16 &&
      hasAlphanumericAndSpecialChars(ValidP)
    ) {
      setPassE(true);
    }

    if (
      ValidP.length < 8 ||
      ValidP.length > 16 ||
      !hasAlphanumericAndSpecialChars(ValidP)
    ) {
      setPassE(false);
    }
  };

  const onConfirmPass = (event) => {
    const ValidPass = event.target.value;
    console.log(ValidPass);
    setConfirmPass(ValidPass);
    if (ValidPass.length < Pass.length && ValidPass !== Pass) {
      setCPError(false);
    }

    if (ValidPass.length === Pass.length && ValidPass === Pass) {
      setCPError(true);
    }
  };

  console.log(EError, PassE, CPError);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (EError && PassE && CPError) {
      console.log("Email:", Email);
      console.log("Password:", Pass);
      console.log("Confirm Password:", ConfirmPass);
    } else {
      console.log("Form contains errors");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Email</h1>
      <div>
        <form onSubmit={onSubmitHandler}>
          <h3>Email</h3>
          <input
            type="text"
            required
            style={{ width: "400px", height: "60px", fontSize: "30px" }}
            onChange={onchangeHandler}
          />
          {!EError && <div>Please enter a valid input.</div>}
          <h3>Password</h3>
          <input
            type="password"
            required
            style={{ width: "400px", height: "60px", fontSize: "30px" }}
            onChange={onPasswordHandler}
          />
          {!PassE && (
            <div>
              Password should be 8-16 characters long and should include a
              number and an alphabet.
            </div>
          )}
          <h3>Confirm Password</h3>
          <input
            type="password"
            required
            style={{ width: "400px", height: "60px", fontSize: "30px" }}
            onChange={onConfirmPass}
          />
          {!CPError && <div>Both Passwords should match.</div>}
          <h3>Submit</h3>
          <button
            type="submit"
            disabled={!EError || !PassE || !CPError}
            style={{ width: "200px", height: "40px", fontSize: "10px" }}
            //   onClick={onSubmitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Email;
