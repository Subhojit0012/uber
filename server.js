const app = require("./index");
const connectDB = require("./db/dbConnect");

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running at:", `http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
