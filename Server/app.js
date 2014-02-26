var io = require('socket.io').listen(3457);

console.log('This is the IP address(es) that are associated with this machine:');
var os = require('os');
var ifaces = os.networkInterfaces();
for (var dev in ifaces) {
    var alias = 0;
    ifaces[dev].forEach(function (details) {
        if (details.family == 'IPv4') {
            console.log(dev + (alias ? ':' + alias : ''), details.address);
            ++alias;
        }
    });
}

function killPlayer() {
        var exec = require('child_process').exec;
        //var child = exec('taskkill /IM vlc.exe /F', function (error, stdout, stderr) {
		exec('sudo pkill omxplayer');
}

io.sockets.on('connection', function (socket) {
    socket.on('message', function (message) {
        console.log(message);

        killPlayer();

        var theJobType = message + ' best -np "omxplayer -o local"';
        var exec = require('child_process').exec;
        //var child = exec('livestreamer\\livestreamer.exe ' + theJobType, function (error, stdout, stderr) {
		exec('clear');
		exec('sudo livestreamer ' + theJobType, function (error, stdout, stderr) {
            if (error != null) {
                console.log(stderr);
            }
        });
    });
});