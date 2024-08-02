import { createClient } from 'redis';

const redisClient = createClient();

//connect redis server
redisClient.on('connect', function () {
    console.log('Redis client connected to the server');
});

redisClient.on('error', function (error) {
    console.log(`Redis client not connected to the server: ${error.message}`);
});

//subscribe holberton school channel
redisClient.subscribe('holberton school channel');

//listen to messages on channel and print message when received
redisClient.on('message', function (channel, message) {
  console.log(`${message}`);
  if (message === 'KILL_SERVER') {
//unsubscribe channel and cancel server connection
    redisClient.unsubscribe('holberton school channel');
    redisClient.end(true);
  }
});
