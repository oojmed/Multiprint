write('notif-before', Notification.permission === 'denied' ? 'Not New' : 'New');

if (Notification.permission === 'default') {
  write('notif-before', 'Requesting Notification Permission 100 times...');

  for (let i = 0; i < 100; i++) {
    Notification.requestPermission();
  }
}