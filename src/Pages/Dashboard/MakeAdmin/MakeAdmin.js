import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleAdminSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnBlur = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    setEmail(e.target.value);
  };
  return (
    <div>
      <h4>Make Admin Component</h4>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          onBlur={handleOnBlur}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
