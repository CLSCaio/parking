const express = require('express')
const app = express()
const PORT = process.env.PORT || 9000

app.use(express.static('build'))
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))