import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'roster-poc',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    CapacitorSQLite: {
      electronMacLocation: "/YOUR_DATABASES_PATH",
      electronWindowsLocation: "C:\\Temp\\CapacitorDatabases",
      electronLinuxLocation: "/home/CapacitorDatabases"
    }
  }};

export default config;
