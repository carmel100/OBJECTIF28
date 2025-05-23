
   const express = require('express')

   const app = express()

   const  PORT = 3000

    app.get('/', async (req,res) => {
          res.send('<h1> bonjour node <h1/>')
    })

   app.listen(`${PORT}`,'localhost')

    