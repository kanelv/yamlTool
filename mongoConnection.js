const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://10.5.110.21:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('connect to MongoDb successfully');
})

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));