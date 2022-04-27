import { initializeApp } from 'firebase/app'
import { getDatabase } from '@firebase/database'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: 'https://dreamers-eidy-default-rtdb.firebaseio.com',
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

export const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)