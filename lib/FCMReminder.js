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

  const startTime = timestamp;
  const endTime = timestamp + 5000;
  var j = schedule.scheduleJob(
    { start: startTime, end: endTime, rule: "*/1 * * * * *" },
    function () {
      console.log("Scheduled reminder");
      admin.messaging().send(message);
      j.cancel();
    }
  );
};
