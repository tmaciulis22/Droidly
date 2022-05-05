const express = require('express')
const multer = require('multer')

const port = 8080
const app = express()
const storage = multer.diskStorage({
  destination: function (_req, _file, callback) {
    callback(null, '../droidly-app/app/src/main/java/com/example/droidly/')
  },
  filename: function (_req, file, callback) {
    callback(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

app.get('/', (_req, res) => {
  res.send('Welcome to Droidly app builder backend. Make a POST request with generated code to get a working APK file.')
})

app.post('/build', upload.single('generatedApp'), (req, res) => {
  console.log(req.file)
})

app.listen(port, () => console.log(`Listening on ${port}`))
