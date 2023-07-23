class UserDataManager {
    constructor() {
      this.usersDatabase = [];
    }
  
    saveUserData(user) {
      // Save user data to the database.
      this.usersDatabase.push(user);
      console.log(`User data saved to the database: ${JSON.stringify(user)}`);
  
      // Send email notification to the user about profile update.
      console.log(`Sending email to ${user.email}: Your profile has been updated.`);
    }
  
    updateUserProfile(user, newProfileData) {
      user.age = newProfileData.age;
      this.saveUserData(user);
    }
  }
  
  // Usage of the bad example:
  const userDataManager = new UserDataManager();
  const user = { id: 1, name: 'Ahmed Kamal', email: 'Ahmedkamal@example.com', age: 26 };
  
  userDataManager.updateUserProfile(user, { age: 27 });
  
  