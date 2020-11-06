[![Build Status](https://travis-ci.org/gauravdas014/fcm-reminder.svg?branch=main)](https://travis-ci.org/gauravdas014/fcm-reminder)

# fcm-reminder

## A package for sending reminders using Firebase Cloud Messaging

## Installation

#### You should have Node.js installed in your system

### Using npm

`$ npm install fcm-reminder`

### Using yarn

`$ yarn add fcm-reminder`

## Importing

```javascript
// Using Node.js `require()`
const FCMReminder = require("fcm-reminder");
```

## Overview

```javascript
const serviceAccount = require("path_to_firebase_config_file");
const FCM_DB_URL = `<Firebase_DB_URL>`;
const regToken = `<FCM token of the device to which the reminder is to be sent>`;
const timestamp = `<Time at which the reminder is to be sent>`;
const messageData = `<A json which will be sent to the device as a notification>`;
FCMReminder.FCMReminder(
  serviceAccount,
  FCM_DB_URL,
  regToken,
  timestamp,
  messageData
);
```

- Note: `timestamp` should be in ISO-8601 and the format is: `YYYY-MM-DDTHH:mm:ss.sssZ`

- Example of messageData:

```javascript
messageData: {
  title: "Reminder";
}
```
