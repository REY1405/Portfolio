/**
 * Apps Script: send_notification
 *
 * Paste this into Extensions -> Apps Script in the Google Sheet linked to your Form.
 * Then create an Installable Trigger: On form submit -> sendNotification
 */
function sendNotification(e) {
  try {
    const row = e.values; // array of values in the submitted row
    const timestamp = row[0];
    const name = row[1];
    const email = row[2];
    const message = row[3];

    const to = "kathal.rishi@gmail.com"; // change if needed
    const subject = "New portfolio message from " + name;
    const body = `Time: ${timestamp}\nFrom: ${name} <${email}>\n\n${message}`;

    MailApp.sendEmail(to, subject, body);
  } catch (err) {
    console.error(err);
  }
}
