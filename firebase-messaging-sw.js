// Import Firebase scripts. These are required in the service worker context.
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize Firebase in the service worker using only the messagingSenderId.
firebase.initializeApp({
  messagingSenderId: "651250185758"
});

const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage((payload) => {
  window.alert('[firebase-messaging-sw.js] Received background message ', payload);
  
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon || '/Images/fevicon.ico' // Make sure you have an icon at this path or update it accordingly.
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
