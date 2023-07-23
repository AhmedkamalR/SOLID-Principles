// UserDataStorage class for handling user data storage.
class UserDataStorage {
    constructor() {
      this.usersDatabase = [];
    }
  
    saveUserData(user) {
      this.usersDatabase.push(user);
      console.log(`User data saved to the database: ${JSON.stringify(user)}`);
    }
  }
  
  // EmailService class for handling email notifications.
  class EmailService {
    constructor() {
    }
    sendEmailNotification(user) {
      // Send email notification to the user about profile update.
      console.log(`Sending email to ${user.email}: Your profile has been updated.`);
    }
  }
  
  // UserProfileManager class for managing user profiles and their updates.
  class UserProfileManager {
    constructor(userDataStorage, emailService) {
      this.userDataStorage = userDataStorage;
      this.emailService = emailService;
    }
  
    updateUserProfile(user, newProfileData) {
      user.age = newProfileData.age;
  
      this.userDataStorage.saveUserData(user);
      this.emailService.sendEmailNotification(user);
    }
  }
  
  // Usage of the good example:
  const userDataStorage = new UserDataStorage();
  const emailService = new EmailService();
  const userProfileManager = new UserProfileManager(userDataStorage, emailService);
  
  const user = { id: 1, name: 'Ahmed Kamal', email: 'Ahmedkamal@example.com', age: 26 };
  userProfileManager.updateUserProfile(user, { age: 31 });
  