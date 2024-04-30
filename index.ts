import reminderRoute from './routers/reminders'; // Importing the reminders router
import express from "express"; // Importing the Express framework
const app = express(); // Creating an instance of the Express application

app.use(express.json()); // Middleware to parse requests with content-type 'application/json'

// Mounting the reminders router at the '/reminders' endpoint
app.use('/reminders', reminderRoute);

// Define a route handler for the root URL that returns 'Hello world'
app.get('/', (req, res) => {
  res.send('Hello word');
});

// Start the server and listen on port 8000
app.listen(8000, () => console.log('Server started'));
