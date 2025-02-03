import React from "react";
import { Link } from "react-router-dom";

function UserLogin() {
	return (
		<div className="p-7">
			<div>
				<form action="" className="">
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
						name=""
						id=""
						placeholder="email"
					/>
					<h3 className="text-lg font-medium mb-2">Enter Your Password</h3>
					<input
						className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-sm"
						type="password"
						name=""
						id=""
						placeholder="password"
						required
					/>
					<br />
					<button className="bg-[#000000] text-white font-semibold rounded mb-7 px-2 py-2 border w-full text-xl placeholder:text-sm">
						Login
					</button>
				</form>
			</div>
			<div>
				<button className="bg-[#f1efef] text-blue-950 font-semibold rounded mb-7 px-2 py-2 border w-full text-xl placeholder:text-sm">
					<Link to='/sign-up'>Create an Account</Link>
				</button>
			</div>
		</div>
	);
}

export default UserLogin;
