const express = require('express') //import library
const app = express()
const port = 3000

// Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// Run the program : chạy chương trình
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})