var rect1 = {
    id: '1',
    color: 'red',
    size: {
        width: 100,
        height: 20
    }
};
var rect2 = {
    id: '2',
    size: {
        width: 120,
        height: 40
    }
};
rect2.color = 'blue';
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '5',
    size: {
        width: 30,
        height: 15
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
