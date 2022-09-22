function Walker(name = 'John Doe', state = 'dead') {
  this.name = name;
  this.state = state;
}
Walker.prototype = {
  walk(speedInMph = 10) {
    return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
  },
  eat(foodName = 'meat') {
    return `${this.name} the ${this.state} eats ${foodName}!`;
  },
  speak(sound = 'grrrrrr') {
    return `${this.name} the ${this.state} says ${sound}!`;
  },
  get firstName() {
    return this.name.split(' ')[0];
  },
  set firstName(value) {
    this.name = `${value} ${this.name.split(' ')[1]}`;
  },
  get lastName() {
    return this.name.split(' ')[1];
  },
  set lastName(value) {
    this.name = `${this.name.split(' ')[0]} ${value}`;
  },

};

export default Walker;

/*
const Walker = {
    name: 'John Doe',
    state: 'dead',
    walk: function(speedInMph) {
        return this.name + ' the ' + this.state + ' walks with ' + speedInMph + ' mph!'
    },
    eat: function(foodName) {
        return this.name + ' the ' + this.state + ' eats ' + foodName + '!'
    },
    speak: function(sound){
        return this.name + ' the ' + this.state + ' says ' + sound + '!'
    }
}
*/
