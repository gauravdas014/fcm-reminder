# fcm-reminder

## A package for sending reminders using Firebase Cloud Messaging

## Installation

### Using npm

`$ npm install fcm-reminder`

### Using yarn

`$ yarn add fcm-reminder`

```javascript
const FCMReminder = require("fcm-reminder");
const serviceAccount = require("path_to_firebase_config_file");
const FCM_DB_URL = `<Firebase_DB_URL>`;
const regToken = `<FCM token of the device to which the reminder is to be sent>`;
const timestamp = `<Time at which the reminder is to be sent>`;
const messageData = `<A json which will be sent to the device as a notification>`;
FCMReminder(serviceAccount, FCM_DB_URL, regToken, timestamp, messageData);
```

- Example of messageData:

```javascript
messageData: {
  title: "Reminder";
}
```
