import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function CaptainLogin() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [captainData, setCaptainData] = useState({});

	function submitHandler(e) {
		e.preventDefault();
		setCaptainData({
			email: email,
			password: password,
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
					<Link to="/captain-signup" className="text-blue-600">
						Create an Account as Captain
					</Link>
				</p>
			</div>
		</div>
	);
}

export default CaptainLogin;
