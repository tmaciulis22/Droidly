# Droidly 📱
 Build Android apps with Blockly.
 
 This project is made up of three parts:
 1. **droidly-builder-frontend**: Blockly based website, where user can put blocks and generate app's code file.
 2. **droidly-builder-backend**: Backend which coordinates compilation and APK file generation process.
 3. **droidly-app**: App project's "skeleton", where backend puts the generated code file to start compilation process.

### How to run 🚀:
- To run this project, first you need to install Gradle (>7 version), JDK (>1.8 version), Android SDK (>29 version) and Node (>14 version) dependencies.
- Next, you need to set up Firebase project with Realtime Database and App Check enabled. After that download `google-services.json` and put it inside `Droidly\droidly-app\app\` folder.

- Lastly, run these commands:
1. Inside droidly-builder-frontend folder run `npm install` and `npm start`.
2. Inside droidly-builder-backend folder run `npm install` and `npm start`.
