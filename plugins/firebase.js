import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCdtrpuhuemhiSlOEoPFzdt5bd1kuusnKA",
      authDomain: "fir-pj-87454.firebaseapp.com",
      projectId: "fir-pj-87454",
      storageBucket: "fir-pj-87454.appspot.com",
      messagingSenderId: "603712938928",
      appId: "1:603712938928:web:53cc10b2eb2552717dac75",
      measurementId: "G-7MCW5LHTD1"
    }
  )
}
export default firebase