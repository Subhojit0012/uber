import React from "react";
import { Link } from "react-router-dom";

function Start() {
	return (
		<div>
			<div className="h-screen pt-8 w-full flex justify-between flex-col bg-red-400 bg-auto bg-[url(images/uber.png)] bg-no-repeat bg-center">
				<img
					className="w-16 ml-8"
					src=""
					alt=""
					srcSet="https://assets.website-files.com/5ee732bebd9839b494ff27cd/5ef0d5158e94c8cf501f5ea3_Uber_logo_2018-p-3200.png"
				/>
				<div className="bg-white py-5 px-5">
					<h2 className="text-3xl font-bold text-center">Get started with Uber</h2>
					<Link
						to="/login"
						className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-2 "
					>
						Continue
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Start;
