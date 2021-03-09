const express = require('express') //web application framework for Node
const cors = require('cors'); //Cross-Origin Resource Sharing middleware

const path = require('path');


// if (process.env.NODE_ENV !== 'production')
require('dotenv').config();

//sensetive information
//const { MONGODB } = require('./config.js');
const connectionDB = require('./config/mongodb.config');
const colors = require('colors');
// const {notFound, errorHandler} = require('./middlewares/errorHandling.js');
const personnelRouter = require('./routers/Personnel.routes')
const itAssetsRouter = require('./routers/ItAssets.routes')

const app = express();

const PORT = process.env.PORT || 5000


app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

connectionDB();

//Error Handling
//Промежуточный обработчик для обработки ошибок должен быть определен последним, после указания всех app.use() и вызовов маршрутов
// app.use(notFound);
// app.use(errorHandler)



//Routes call under cors
app.use('/api/personnel', personnelRouter)
app.use('/api/itAssets', itAssetsRouter)



// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
//   });




// app.listen(PORT, error => {
//     if (error) throw error;
//     console.log(`Server running im ${process.env.NODE_ENV} on ${process.env.PORT} port`.yellow.bold);
// })



// app.use(express.static(path.join(__dirname, '../client/build/index.html')));


if (process.env.NODE_ENV === 'production') {
    app.use(function (req, res, next) {
        res.setHeader(
          'Content-Security-Policy-Report-Only',
          "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
        );
        next()
      });

    app.use(express.static(path.join(__dirname, '../client/build')));
   
    app.get('*', (req, res) => {
       
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    })
  }
  
  
  app.listen(PORT, error => {
    if (error) throw error;
    console.log(`Server running im ${process.env.NODE_ENV} on ${PORT} port`.yellow.bold);
  });

//For development mode
// if (process.env.NODE_ENV === 'production') {
//     app.get('*', function (req, res) {
      
//         res.sendFile(path.resolve('../client', 'build', 'index.html')); //or path.join
//     });
// } else {
//     app.get('/', (req, res, next) => {
//         res.send('API running ✌').json({
//             message: 'hello'
//         });
//     });
// }



// 404 Error
// app.use((req, res, next) => {
//     next(createError(404));
// });

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });