const express = require('express')
const multer = require('multer')
const cmd = require('node-cmd')
const path = require('path')
const cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000'
}
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

app.use(cors(corsOptions))

app.get('/', (_req, res) => {
  res.send('Welcome to Droidly app builder backend. Make a POST request with generated code to get a working APK file.')
})

app.post('/build', upload.single('generatedApp'), (req, res) => {
  console.log('Received file:')
  console.log(req.file)
  buildApp((error, _data, stderr) => {
    if (error) {
      console.log('Build failed: ' + error)
      res.sendStatus(500)
    } else if (stderr)  {
      console.log('Build failed: ' + stderr)
      res.sendStatus(500)
    } else {
      console.log('Build finished')
      res.sendFile(path.join(__dirname, '../droidly-app/app/build/outputs/apk/debug/app-debug.apk'), (error) => {
        if (error)
          console.log('Sending file failed: ' + error)
        else
          console.log('File sent successfully')
      })
    }
  })
})

app.listen(port, () => console.log(`Listening on ${port}`))

const buildApp = (callback) => {
  // cmd.run('cd ../droidly-app & gradlew assembleInstall', callback)
  cmd.run('cd ../droidly-app & gradlew assembleDebug', callback)
}
