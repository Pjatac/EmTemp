import express from "express";
const cors = require("cors");
import expressFileUpload from "express-fileupload";
const dotenv = require("dotenv");
import emailRoutes from "./API/emailRoutes";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
app.use(expressFileUpload());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(
  cors()
);
app.use("/api/v1/email", emailRoutes);
app.listen(PORT, () => {
  console.log(`server is listening in port:${PORT} :)`);
});
