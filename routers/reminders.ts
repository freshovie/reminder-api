import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();

// Initialize reminders array to store Reminder objects
const reminders: Reminder[] = [];

// GET all reminders
router.get("/", (req, res) => {
  res.json(reminders); // Return all reminders
});


// POST a new reminder
router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title); // Create a new Reminder object
  reminders.push(reminder); // Add the new reminder to the array
  res.status(201).json(reminders); // Return the updated reminders array
});

// PUT/update an existing reminder by ID
router.put("/:id", (req, res) => {
  const reminderId: string = req.params.id;
  const updatedReminder: Reminder = req.body;

  const reminderIndex: number = reminders.findIndex(
    (reminder: Reminder) => reminder.id === reminderId
  );

  if (reminderIndex !== -1) {
    // Update the existing reminder with the provided data
    reminders[reminderIndex] = {
      ...reminders[reminderIndex],
      ...updatedReminder,
    };
    return res.json(reminders[reminderIndex]); // Return the updated reminder
  } else {
    return res.status(404).json({ message: "Reminder Not Found" }); // Reminder not found
  }
});

// DELETE a reminder by ID
router.delete("/:id", (req, res) => {
  const reminderId: string = req.params.id;

  const reminderIndex: number = reminders.findIndex(
    (reminder: Reminder) => reminder.id === reminderId
  );

  if (reminderIndex !== -1) {
    reminders.splice(reminderIndex, 1); // Remove the reminder from the array
    return res.status(200).json({ message: "Reminder successfully deleted." }); // Return success message
  } else {
    return res.status(404).json({ message: "Reminder not found" }); // Reminder not found
  }
});

// GET a specific reminder by ID
router.get("/:id", (req, res) => {
  // Find the reminder with the given ID
  const reminder = reminders.find((reminder) => reminder.id === req.params.id);
  if (!reminder)
    return res.status(404).json("The reminder with the given ID was not found");
  res.json(reminder); // Return the found reminder
});

export default router;
