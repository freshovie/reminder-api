/**
 * Represents the data transfer object (DTO) for creating a new reminder.
 * This interface defines the structure of the data expected when creating a new reminder.
 */
export default interface CreateReminderDto {
    title: string; // The title of the reminder, a required field
}
