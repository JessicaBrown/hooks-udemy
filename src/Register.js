import React, { useState } from "react";

import {
    Link
  } from "react-router-dom";

const initialFormState = {
	username: "",
	email: "",
	password: "",
};
export const Register= () => {
	const [form, setForm] = useState(initialFormState);
	const [user, setUser] = useState();
	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setUser(form);
		setForm(initialFormState);
	};
	return (
		<>
		<div className="Back">
            <Link to="/" className="Back-link">
               Back 
            </Link>
        </div>
		<div style={{ textAlign: "center" }}>
			<h2>Register</h2>
			<form
				onSubmit={handleSubmit}
				style={{
					display: "grid",
					alignItems: "center",
					justifyItems: "center",
				}}
			>
				<input
					type="text"
					placeholder="user"
					name="username"
					onChange={handleChange}
					value={form.username}
				></input>
				<input
					type="password"
					placeholder="password"
					name="password"
					onChange={handleChange}
					value={form.password}
				></input>
				<input
					type="email"
					placeholder="email"
					name="email"
					onChange={handleChange}
					value={form.email}
				></input>
				<button type="submit">Submit</button>
			</form>

			{user && JSON.stringify(user, null, 2)}
		</div>
		</>
	);
}
