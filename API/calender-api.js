const { google } = require('googleapis');
const calendar = google.calendar('v3');

async function getBusyIntervals(calendarId, timeMin, timeMax) {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: 'test-project-for-zincat-957496b853cd.json', // need to replace sevice account key
            scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
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

        console.log("Busy Intervals:", busyIntervals);
        
        return busyIntervals;
    } catch (error) {
        console.error("Error retrieving busy intervals:", error);
    }
}


const calendarId = 'hasitanilupul@gmail.com';
const timeMin = '2024-11-01T00:00:00Z';
const timeMax = '2024-11-30T23:59:59Z';

getBusyIntervals(calendarId, timeMin, timeMax);
