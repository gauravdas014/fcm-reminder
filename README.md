# <div align="center">FCM Reminder</div>

<div align="center">An npm package for sending reminders using Firebase Cloud Messaging.</div><br>  
<div align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/Platform-Node-yellow.svg"
      alt="Platform" />
  </a>

  <a href="https://www.npmjs.com/package/fcm-reminder">
    <img alt="npm" src="https://img.shields.io/npm/v/fcm-reminder.svg" alt="npm package" />
  </a>

  <a href="https://travis-ci.org/gauravdas014/fcm-reminder">
    <img src="https://travis-ci.org/gauravdas014/fcm-reminder.svg?branch=main"
      alt="Build Status" />
  </a>
 <a href="https://www.codefactor.io/repository/github/gauravdas014/fcm-reminder">
  <img src="https://www.codefactor.io/repository/github/gauravdas014/fcm-reminder/badge" alt="CodeFactor" />
 </a>

  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-red.svg"
      alt="License: MIT" />
  </a>
</div><br>

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
