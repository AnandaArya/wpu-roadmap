
class Clock {
    constructor({ template }) {
        var timer;
        var date = new Date();
        this.hours = date.getHours();
        if (this.hours < 10) this.hours = '0' + hours;
        this.mins = date.getMinutes();
        if (this.mins < 10) this.mins = '0' + mins;
        this.secs = date.getSeconds();
        if (this.secs < 10) this.secs = '0' + secs;
    }

    render() {
        var output = template
            .replace('h', this.hours)
            .replace('m', this.mins)
            .replace('s', this.secs);
        console.log(output);
    }
    
    stop() {
        render();
        timer = setInterval(render, 1000);
    }
    start() {
        render();
        timer = setInterval(render, 1000);
    }

}

var clock = new Clock({template: 'h:m:s'});
clock.start();

// function Clock({ template }) {

//     var timer;

//     function render() {
//         var date = new Date();
    
//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
    
//         var mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
    
//         var secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
    
//         var output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
    
//         console.log(output);
//     }

//     this.stop = function() {
//         clearInterval(timer);
//     };

//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };

// }
//     var clock = new Clock({template: 'h:m:s'});
//     clock.start();


