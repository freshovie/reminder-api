import reminderRoute from  './routers/reminders';
import express from "express";
const app = express();

app.use(express.json()); // parse requests of content-type - application/json
// define a simple route that returns "Hello
app.use('/reminders', reminderRoute)

app.get('/', (req, res) => {
  res.send('Hello word');
})





app.listen(8000, () => console.log('Server started'))
