/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/interaction',
  '@fullcalendar/react',
  '@fullcalendar/timegrid',
  '@fullcalendar/list',
  '@fullcalendar/timeline'
]);

const nextConfig = withTM({
  reactStrictMode: true
});

const runtimeCaching = require('next-pwa/cache')

const withPWA = require("next-pwa")({
  dest: 'public', 
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disableDevLogs: true,
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA(nextConfig);

