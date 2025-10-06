import SignUp from "./SignUp";
// import "./styles.css";

export default function App() {
  const handleSignUpSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Do something with the data (e.g., send to API or update state)
    alert("Form Submitted Successfull!");
  };
  return (
    <div className="App">
      <SignUp handleSubmit={handleSignUpSubmit} />
    </div>
  );
}
