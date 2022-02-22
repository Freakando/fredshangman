import { useState } from "react";
function UserData() {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event);
  };

  const handleSubmit = () => {
    alert("A name was submitted: " + this.state.value);
  };

  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={userName} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
