import localforage from 'localforage'

export default function configureLocalForage() {
  localforage.config({
    // driver: localforage.WEBSQL,
    name: "CRM",
    version: 1.0,
    // storeName: 'WebSQLStore',
    description: 'CRM'
  });
}
