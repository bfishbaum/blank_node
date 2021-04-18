require('dotenv').config()
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser')
const cors = require('cors')
const { ExpressPeerServer } = require('peer')
const uuidv4 = require('uuid/v4')
const port = 3000;

const app = express()
app.use(bodyparser.json())

const corsFrontend = (req, res, next) => {
	const allowedUrls = [process.env.FRONTEND_URL_LOCAL, process.env.FRONTEND_URL, process.env.FRONTEND_URL_DEV]
	var origin = req.headers.origin;
	// console.log(origin)
	if(allowedUrls.indexOf(origin) > -1 || allowedUrls == []){
		res.setHeader('Access-Control-Allow-Origin', origin);
	}
	//res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
	res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	res.header('Access-Control-Allow-Credentials', true);
	return next();
}

app.use(express.static(path.join(__dirname, '../dist')))
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})
app.use(corsFrontend)

app.post('/ping', function(req, res, next){
    res.json({success: true})
})

server = app.listen(port, () => console.log("listening on port: ", port))