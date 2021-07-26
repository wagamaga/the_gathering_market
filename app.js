const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const path = require("path");
const connect = require("./db/connect");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const FileStore = require("session-file-store")(session);
const dotenv = require("dotenv");
const app = express();
const cardRouter = require("./routes/card");
const updateInfoRouter = require("./routes/updateInfo");
const signupRouter = require("./routes/signup");
const addCardRouter = require("./routes/addCard");
const loginRouter = require("./routes/login");
const indexRouter = require("./routes/index");
const profileRouter = require("./routes/profile");
const contactsRouter = require("./routes/contacts");
const cartRouter = require("./routes/cart");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(session({
  store: new FileStore(),
  key: "user_sid",
  secret: "sobaka",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 9000000,
    httpOnly: true,
  },
}));
app.use("/updateInfo", updateInfoRouter)
app.use("/contacts", contactsRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/", indexRouter);
app.use("/profile", profileRouter);
app.use("/addCard", addCardRouter);
app.use("/cart", cartRouter);
app.use("/card", cardRouter);

connect();
app.listen(PORT, () => {
  console.log(`Вы запустились на порту ${PORT}, приятного полета`);
});
