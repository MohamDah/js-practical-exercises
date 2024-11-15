function person() {};

person.prototype.talk = function() {
    return "Speech";
}

person.prototype.ask = function() {
    return "What is your name?"
}

const moham = new person();
moham.mohamFunc = function() {
    return "This is a func in the moham object"
}

const dahab = Object.create(moham);


dahab.__proto__ === moham; // true

moham.__proto__ === person.prototype // true