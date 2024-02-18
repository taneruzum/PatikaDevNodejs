// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {

//   const photo = {
//     id: 1,
//     name: "Photo Name",
//     description: "Photo description"
//   }
//   res.send(photo)
// })

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Sunucu http://localhost:${port} portunda başlatıldı..`);
// });
// ------------------------------------------------------------------------------------------------


// npm run start -> with nodemon
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('public'));

// app.get('/', (req, res) => {

//   const blog = {
//     id: 1,
//     title: "Blog title",
//     description: "Blog description"
//   }
//   res.send(blog)
// })

app.get('/', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'temp/index.html'))
})



const port = 4000;
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} portunda başlatıldı..`);
});