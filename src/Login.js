import React, { useState } from "react";

import {
    Link
  } from "react-router-dom";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [user, setUser] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		const userData = {
			username,
			password,
		};
		setUser(userData);
		//clears form after you add value to input
		setUsername("");
		setPassword("");
	};

	return (
		<>
		<div className="Back">
            <Link to="/" className="Back-link">
               Back 
            </Link>
        </div>
		<div style={{ textAlign: "center" }}>
			<h2>Login</h2>
			<form
				style={{
					display: "grid",
					alignItems: "center",
					justifyItems: "center",
				}}
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					placeholder="user"
					onChange={(event) => setUsername(event.target.value)}
					value={username}
				></input>
				<input
					type="password"
					placeholder="password"
					onChange={(event) => setPassword(event.target.value)}
					value={password}
				></input>
				<button type="submit">Submit</button>
			</form>

			{user && JSON.stringify(user, null, 2)}
		</div>
		</>
	);
}
