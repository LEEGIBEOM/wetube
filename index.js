import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 80;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleHome = (req, res) => {
  res.send("Welcome Home!!");
};

const handleProfile = (req, res) => {
  res.send("You get My Profile");
};

//middleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

//router
app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
