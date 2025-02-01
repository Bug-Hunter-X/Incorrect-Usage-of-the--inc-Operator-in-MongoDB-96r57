```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}},{upsert:true});
//or
db.collection('myCollection').findOneAndUpdate({"_id":ObjectId("someId")},{ $inc: { counter: 1 } }, { upsert: true, returnOriginal: false });
```