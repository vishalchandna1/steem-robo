export const steemConnectConfig = {
  app: 'steemrobo',
  callbackURL: window.location.origin.indexOf('localhost') >= 0 ? "http://127.0.0.1:3001" : window.location.origin,
  scope: ['vote', 'offline'],
}
