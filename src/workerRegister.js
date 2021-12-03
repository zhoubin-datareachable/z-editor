// /* eslint-disable */
// import { WorkerWrapper } from '@possie-engine/dr_middleend_web_worker';

// export default function workerRegister() {
//     window.addEventListener('load', () => {
//         // This is the name exported by webpack in webpack.config.js:8
//         if ('serviceWorker' in navigator) {
//             navigator.serviceWorker.register('serviceWorker.js');
//             console.warn('ServiceWorker Loaded.');
//         }

//         if (window.Worker) {
//             // This is the name exported by webpack in webpack.config.js:9
//             let ww = new WorkerWrapper('/webWorker.js');
//             console.warn('WebWorker wrapper loaded.');
//             setInterval(() => {
//                 ww.updateData({
//                     // The schema of updateData is below.
//                     user_id: 'my user', // String; valid user id.
//                     user_tag: `user tag+[autosave.${Date.now()}]`, // String; unique or it will fail autosave.
//                     data: JSON.stringify({
//                         // String; Arbitrary JSON encoded.
//                         fieldX: "arbitrary data is fine here as long as it's encoded as a valid utf8 string, I don't really care",
//                         randomNumberForIdkWhyJustDoIt: Math.random(),
//                     }),
//                 });
//                 console.debug('Dispatched data update');
//             }, 60e3); // Every minute;
//         }
//     });
// }