import { useState } from "react";

function SignUp(props) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    // Basic validation
    if (!fullName || !phoneNumber || !emailAddress) {
      alert("Please fill in all the details!");
      return;
    }

    if (!emailAddress.include("@")) {
      alert("Please enter a valid email address!");
      return;
    }

    // pass data parent component
    props.handleSubmit({ fullName, phoneNumber, emailAddress });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Enter Full Name</h2>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onClick={(e) => setFullName(e.target.value)}
        />

        <h2>Enter Phone Number</h2>
        <input
          type="number"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <h2>Email Id</h2>
        <input
          type="text"
          id="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />

        <button type="submit">Save Record</button>
      </form>
    </>
  );
}

export default SignUp;
