// In the bad example, 
// the UserDataManager class violates the Single Responsibility Principle by 
// handling both user data storage and email notification. 
// This leads to a class with multiple responsibilities, making it harder to maintain and understand.

// In the good example, 
// we refactor the code by creating separate classes UserDataStorage and EmailService, 
// each responsible for a single concern: user data storage and email notifications, 
// respectively. The UserProfileManager class now only handles the task of updating the user's profile,
//  adhering to the Single Responsibility Principle. This makes the code more modular and maintainable, 
//  and each class has a clear and single purpose.