 Firebase.db
---
### 🇬🇧 English
A module made for Firestore. You can save, delete, update and shoot data. It allows you to do it all aesthetically and quickly.
[Discord Server](https://discord.gg/qbzCJkcG).
### 🇹🇷 Türkçe
Firestore için yapılmış bir modül.Veri kaydedebilirsiniz,silebilirsiniz,güncelleyebilirsiniz ve çekebilirsiniz.Hepsini estetik ve hızlı şekilde yapmanızı sağlar.
[Discord Sunucusu](https://discord.gg/qbzCJkcG).
---

```shell
npm install firebase.db
```

```javascript
const firebase = require('firebase.database')
var serviceAccount = require("./service.json"); //service account
firebase.connect(serviceAccount)
let db = firebase.db
var data = db.collection('collec').doc('docs');

//set
data.set({
'ver1': true,
'codare': 'tic'
})

//update
data.update({
  'codare': 'tics'
  })

//get
data.get().then((a) => {
if(!a.exists) return console.log('Not data :/')
console.log(a.data().codare)
})

//delete
data.delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
```
