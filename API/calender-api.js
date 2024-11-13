const { google } = require('googleapis');
const calendar = google.calendar('v3');
const moment = require('moment-timezone');

const calendarId = 'hasita0@gmail.com';

const sltStart = '2024-11-10T16:00:00.00+05:30';
const sltEnd = '2024-11-13T17:59:59.00+05:30';

getBusyIntervals(calendarId, sltStart, sltEnd);

async function getBusyIntervals(calendarId, timeMin, timeMax) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: 'test-project-for-zincat-a304aafcb8e0.json',
            scopes: ['https://www.googleapis.com/auth/calendar']
        });

        const authClient = await auth.getClient();
        google.options({ auth: authClient });

        const response = await calendar.freebusy.query({
            requestBody: {
                timeMin: timeMin,
                timeMax: timeMax,
                items: [{ id: calendarId }],
            },
        });

        const busyIntervals = response.data.calendars[calendarId].busy;

        busyIntervals.forEach(interval => {
            const startSLT = moment(interval.start).tz('Asia/Colombo').format('YYYY-MM-DD HH:mm');
            const endSLT = moment(interval.end).tz('Asia/Colombo').format('YYYY-MM-DD HH:mm');

            console.log(`Busy from ${startSLT} to ${endSLT}`);
        });

        return busyIntervals;
    } catch (error) {
        console.error("Error retrieving busy intervals:", error);
    }
}
