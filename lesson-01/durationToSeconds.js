function durationToSeconds(duration) {
    var total = 0;

    if (duration.includes('D')) {
        var d = duration.split('D')[0];
        total = total + d * 24 * 60 * 60;
    }

    if (duration.includes('H')) {
        var h = duration.split('H')[0].split('D')[1] || duration.split('H')[0];
        total = total + h * 60 * 60;
    }

    if (duration.includes('M')) {
        var m = duration.split('M')[0].split('H')[1] || duration.split('M')[0].split('D')[1] || duration.split('M')[0];
        total = total + m * 60;
    }

    if (duration.includes('S')) {
        var s = duration.split('S')[0].split('M')[1] || duration.split('S')[0].split('H')[1] || duration.split('S')[0].split('D')[1] || duration.split('S')[0];
        total = total + parseInt(s);
    }

    return total;
}

var durationStr = "1D2H3M4S"; 
console.log(durationToSeconds(durationStr));
