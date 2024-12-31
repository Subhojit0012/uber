import app from "./index.js";
import coonectDB from "./db/dbConnect.js";

const PORT = process.env.PORT || 8080;

coonectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log("server running at:", `http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
