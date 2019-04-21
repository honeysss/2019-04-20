var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
var thing = new EventEmitter();

// life.setMaxListeners(2);
function sleep(who) {
    console.log(who + '要睡觉了');
}

life.on('events', sleep);
life.addListener('events', function (who) {
    console.log(who + '要吃饭了');
})
life.on('events', function (who) {
    console.log(who + '又要睡觉了');
})

thing.on('events', function (thing) {
    console.log('我要做这件事：' + thing);
})

// life.removeListener('events', sleep);
// life.removeAllListeners('events');

var eventsListener = life.emit('events', '狗成杰');
thing.emit('events', '狗成杰');
// console.log(thing.listeners('events').length);
// console.log(EventEmitter.listenerCount(life, 'events'));
