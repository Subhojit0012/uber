import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContextData } from "../context/UserContext";
import axios from "axios";

function UserLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { user, setUser } = useContext(UserContextData);

	async function submitHandler(e) {
		e.preventDefault();
		const userData = {
			email: email,
			password: password,
		};

		await axios
			.post(`http://localhost:8000/auth/v2/user/login`, userData)
			.then((res) => {
				if (res.status === 200) {
					const data = res.data;
					if (!data) {
						console.log(res.data.error);
					}
					// console.log(data.token)
					setUser(data.user);
					navigate("/home");
				}
				console.log(res.status);
			})
			.catch((error) => {
				console.log(error.response.status);
				console.log(error.response.data);
			});

		setEmail("");
		setPassword("");
	}

	return (
		<div className="p-7 h-screen flex flex-col justify-between">
			<div>
				<form action="" onSubmit={submitHandler}>
					<img
						className="w-16 mb-7"
						src=""
						alt=""
						srcSet="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef0d5158e94c8cf501f5ea3_Uber_logo_2018-p-3200.png"
					/>
					<h3 className="text-lg font-medium mb-2">Enter Your Email</h3>
					<input
						className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-sm"
						type="email"
						name="Email"
						id="email"
						placeholder="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
					<input
						className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-sm"
						type="password"
						name=""
						id=""
						placeholder="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
					/>
					<br />
					<button className="bg-[#000000] text-white font-semibold rounded mb-7 px-2 py-2 border w-full text-xl placeholder:text-sm">
						Login
					</button>
				</form>
				<p className="text-center">
					New here?{" "}
					<Link to="/sign-up" className="text-blue-600">
						Create an Account
					</Link>
				</p>
			</div>
		</div>
	);
}

export default UserLogin;
