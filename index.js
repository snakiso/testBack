import {app} from "./src/app.js";

const port = process.env.PORT || 3000


const startApp = async () => {
    try{
        console.log('res')
    }catch (e){
        console.log(e)
    }


    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
startApp()