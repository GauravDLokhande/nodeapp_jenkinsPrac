const express = require('express')

const app = express()

app.get('/',(request,response) => {
	response.send('Juice Pilado Mosambi ka............')
})

app.listen(4000,'0.0.0.0',() => {
	console.log('server started on port 4000')
})
