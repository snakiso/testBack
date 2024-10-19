import {app} from "./src/app.js";

const port = process.env.PORT || 3000
    app.get('/', (req, res) => {
        res.send('hello world')
    })

    app.listen(4444, (e) => {
        if (e) {
            return console.log(e)
        }
        console.log(`Example app listening on port ${port}`)
    })
