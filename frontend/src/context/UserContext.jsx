import React, { createContext } from "react";
import { useState } from "react";

export const UserContextData = createContext();

export const UserContext = ({ children }) => {
	const [user, setUser] = useState({
		email: "",
		fullName: {
			firstName: "",
			lastName: "",
		},
	});
	return (
		<div>
			<UserContextData.Provider value={[user, setUser]}>
				{children}
			</UserContextData.Provider>
		</div>
	);
};
