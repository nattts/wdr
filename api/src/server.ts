const express = require("express");
const http = require("http");
const port = process.env.PORT || "5000";

const app = express();
app.use(express.json());

app.get('/ping', (req: any, res: any) => {
    res.send('server is alive')
})

app.get('/parse', (req: any, res: any) => {
    res.send('ready to parse')
})

function main(): any {
    try {
		http
			.createServer(app)
			.listen(port, () => console.log(`running on http://127.0.0.1:${ port }/`));
	} catch(err: any) {
		throw new Error(err);
	}
}

main()