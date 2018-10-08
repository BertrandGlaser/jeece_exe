const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    console.log(req.body)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sitepersobertrand@gmail.com',
            pass: 'bertrand9826'
        }
    })

    const mailOption = {
        from: req.body.email, // sender address
        to: 'bertrandglaser@gmail.com', // list of receivers
        subject: 'depuis le site', // Subject line
        replyTo: req.body.email,
        html: req.body.message +'    '+req.body.email // plain text body
    }

    console.warn(req.body.email)

    transporter.sendMail(mailOption, () => {
        if (err) {
            console.log(err)
        }
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})