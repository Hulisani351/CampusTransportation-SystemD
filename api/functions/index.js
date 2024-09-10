/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from 'firebase-functions/v2';

export const helloworld = functions.https.onRequest((request, response ) => {
    const name = request.params[0].replace('/', '');
    const items = { lamp: 'this is a lamp', chair: 'great chair'};
    const message = items[name];
    response.send(`<h1>${message}</h1>`);
});
