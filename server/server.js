const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


//DB connection
const  connectDB = async () => {
      await mongoose.connect(`mongodb://localhost:27017/dev` , {
          useNewUrlParser : true,
          useCreateIndex: true,
          useFindAndModify : false,
          useUnifiedTopology : true
      }).catch(err => console.log(err))
      console.log('MongoDB is up')
}

connectDB();

// routes
const developerRoute = require('./route/developerRoute')

const app = express();

//app middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())
app.use(cors());


app.use('/api/v1', developerRoute)


app.get('/', (req , res) => {
    res.json({msg: 'Hello DevC'})
})


const PORT = 6000;

app.listen(PORT , console.log(`App is running on PORT ${PORT}`))