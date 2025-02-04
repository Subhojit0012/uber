import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContextData } from "../context/UserContext";

function UserSignup() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [userDate, setUserDate] = useState({});
	const navigate = useNavigate();

	const { user, setUser } = useContext(UserContextData);

	async function submitHandler(e) {
		e.preventDefault();
		const newUser = {
			fullName: {
				firstname: firstname,
				lastname: lastname,
			},
			email: email,
			password: password,
		};

		await axios
			.post(`http://localhost:8000/auth/v2/user/register`, newUser)
			.then((res) => {
				if (res.status === 200) {
					const data = res.data.user;
					if (!data) {
						return console.log(res.data.errors);
					}
					// console.log(data);
					setUser(data);
					navigate("/home");
				}
				console.log(res.status);
			})
			.catch((error) => {
				throw console.log(error.status);
			});

		setPassword("");
		setEmail("");
		setLastName("");
		setFirstName("");
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
					<h3 className="text-base font-medium mb-2">Enter Your Name</h3>
					<div className="flex gap-4">
						<input
							className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
							type="name"
							placeholder="First name"
							value={firstname}
							onChange={(e) => {
								setFirstName(e.target.value);
							}}
						/>
						<input
							className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-1/2 text-lg placeholder:text-sm"
							type="name"
							placeholder="Last name"
							value={lastname}
							onChange={(e) => {
								setLastName(e.target.value);
							}}
						/>
					</div>
					<h3 className="text-base font-medium mb-2">Enter Your Email</h3>
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
					<h3 className="text-base font-medium mb-2">Enter Your Password</h3>
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
						Signup
					</button>
				</form>
				<p className="text-center">
					Already have an account?{" "}
					<Link to="/login" className="text-blue-600">
						Login here
					</Link>
				</p>
			</div>
			<div>
				<button className="bg-[#ffffff] text-black font-semibold rounded mb-7 px-2 py-2 border w-full text-xl placeholder:text-sm">
					<Link to="/captain-signup" className="text-blue-600">
						Sign Up As Captain
					</Link>
				</button>
			</div>
		</div>
	);
}

export default UserSignup;
