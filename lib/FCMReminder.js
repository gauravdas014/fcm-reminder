exports.FCMReminder = (
  serviceAccount,
  FCM_DB_URL,
  regToken,
  timestamp,
  messageData
) => {
  const admin = require("firebase-admin");
  const schedule = require("node-schedule");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FCM_DB_URL,
  });

  const registrationToken = regToken;

  const message = {
    data: messageData,
    token: registrationToken,
  };

  const myDate = new Date(timestamp);
  const result = myDate.getTime();

  const startTime = result;
  const endTime = startTime + 100000;
  var j = schedule.scheduleJob(
    { start: startTime, end: endTime, rule: "*/1 * * * * *" },
    function () {
      console.log("Reminder sent successfully");
      admin.messaging().send(message);
      j.cancel();
    }
  );
};
