import express from 'express'

const app = express()

const port = 3333

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

export default app