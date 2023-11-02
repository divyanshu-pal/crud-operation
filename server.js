const app = require('./app')

 require('dotenv').config();
 const connectDB = require('./database');
    process.on('uncaughtException',err=>{
    console.log(`ERROR: $(err.message)`);
    console.log('shutting down due to uncaught expception')
    process.exit(1)
    console.log(`ERROR: ${err.message}`);
})


connectDB();
app.listen(process.env.PORT,()=>{
    console.log(`Server started on PORT: ${process.env.PORT} in  mode.`)
})