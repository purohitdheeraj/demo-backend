const express = require("express");
require("dotenv").config();

// ye mera server hai
// sensitive data

// express ki sari superpowers app ko de di
const app = express();

// virtual ports (65300 somethings, free port)
// const port = 4000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
	res.send("the_indianyoga");
});

app.get("/login", (req, res) => {
	res.send("<h1>Please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
	res.send("<h2>Hare Krishna</h2>");
});

app.listen(process.env.PORT, () => {
	console.log(
		`Example app listening on port ${process.env.PORT}`
	);
});
