/**
 * Reminder class represents a single reminder item.
 */
export default class Reminder {
    id: string;        // Unique identifier for the reminder
    isComplete: boolean; // Indicates whether the reminder is marked as complete or not

    /**
     * Creates an instance of Reminder.
     * @param {string} title - The title of the reminder.
     */
    constructor(public title: string) {
        // Generate a unique identifier for the reminder using the current timestamp
        this.id = Date.now().toString();
        this.isComplete = false; // Initialize the reminder as incomplete by default
    }
}
