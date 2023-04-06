const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()

app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
	const { username } = req.body

	try {
		const r = await axios.put(
			"https://api.chatengine.io/users/",
			{
				username: username,
				secret: username,
				first_name: username,
			},
			{
				headers: {
					"PRIVATE-KEY": "4e93f6da-27ed-4a96-b2e5-8709b738fee4",
				},
			}
		)
		return res.status(r.status).json(r.data)
	} catch (e) {
		return res.status(e.response.status).json(e.response.data)
	}
})

app.listen(3002)

// 2fd8412e-5c3f-429d-8d51-a806e5dbcbc4
