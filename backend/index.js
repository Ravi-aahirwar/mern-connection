const express = require("express")
const cors = require("cors")
const app = express();

const isDev = app.settings.env === "development"
const URL = isDev ? "http://localhost:5173" :"https://mern-connection-client.vercel.app/"

app.use(cors({origin: URL}))

app.get("/api/data", (req, res) => {
    const data = [
        {
            id: 1,
            name: "Object 1",
            description: "This is the first object.",
            value: 10,
            isActive: true
        },
        {
            id: 2,
            name: "Object 2",
            description: "This is the second object.",
            value: 20,
            isActive: false
        },
        {
            id: 3,
            name: "Object 3",
            description: "This is the third object.",
            value: 30,
            isActive: true
        },
        {
            id: 4,
            name: "Object 4",
            description: "This is the fourth object.",
            value: 40,
            isActive: false
        },
        {
            id: 5,
            name: "Object 5",
            description: "This is the fifth object.",
            value: 50,
            isActive: true
        }
    ]

    res.send(data);

})

app.listen(5000, () => console.log("http://localhost:5000"))

