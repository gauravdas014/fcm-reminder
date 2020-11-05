const admin = require("firebase-admin");
const schedule = require("node-schedule");

/**
 * @param {json} serviceAccount - It is a json file which is given by firebase on configuring up firebase admin sdk
 * the path to the json file is expected here
 * @param {String} FCM_DB_URL - Database url which is given by firebase on configuring firebase admin sdk
 * @param {String} regToken - FCM token which is unique to each user and this token is used to send
 * notification to a specific device
 * @param {String} timestamp - The time at which the reminder is expected. This should be in ISO-861 format
 * i.e. `YYYY-MM-DDTHH:MM:SS.SSSZ`
 * @param {Object} messageData - An Object which will contain the json which is to be sent as a notification/reminder
 * using Firebase Cloud Messaging
 * @returns {*}
 */

const FCMReminder = (
  serviceAccount,
  FCM_DB_URL,
  regToken,
  timestamp,
  messageData
) => {
  /**
   * @type {Object} admin - Firebase admin object used to execute many functions (cloud messaging here)
   * @type {String} databaseURL - Database url which is given by firebase on configuring firebase admin sdk
   */

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FCM_DB_URL,
  });

  /**
   * @type {String} registrationToken - FCM token which is unique to each user and this token is used to send
   */

  const registrationToken = regToken;

  /**
   * @type {Object} message - It will be the contain the message to be sent and the FCM token
   * @type {Object} data - The message which is to be sent as a reminder using Firebase Cloud Messaging
   * @type {String} token - FCM token which is unique to each user and this token is used to send
   * notification to a specific device
   */

  const message = {
    data: messageData,
    token: registrationToken,
  };

  /**
   * @type {Date} myDate - Get the time in ISO-861 format i.e. `YYYY-MM-DDTHH:MM:SS.SSSZ`
   * @type {Number} result - Get the time in milliseconds format
   */

  const myDate = new Date(timestamp);
  const result = myDate.getTime();

  /**
   * @param {Number} startTime - The time at which the reminder is to be scheduled.
   * This should be in milliseconds format
   * @param {Number} endTime - Any time after the reminder is scheduled.
   * @param {*} rule - The rule according to which the reminder will be scheduled using node schedule.
   * Here the reminder will be send only once and then the job is cancelled, thus we restrict it to send reminder only once
   * @type {scheduleJob} j - Th job which is scheduled so that it can send the reminder using Firebase Cloud Messaging
   */
  const startTime = result;
  const endTime = startTime + 100000;
  var j = schedule.scheduleJob(
    { start: startTime, end: endTime, rule: "*/1 * * * * *" },
    function () {
      /**
       * Console.log to verify if the reminder was sent successfully
       */

      console.log("Reminder sent successfully");

      /**
       * Firebase admin sdk's function to send Firebase Cloud messaging
       * @type {Object} admin - Firebase admin object used to execute many functions (cloud messaging here)
       */

      admin.messaging().send(message);

      /**
       * Cancelling the scheduled task after it's done once
       * @type {Scheduled-job} j
       */

      j.cancel();
    }
  );
};

module.exports = FCMReminder;
