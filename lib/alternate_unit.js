var BaseUnit = require('./base_unit');
var ProductUnit = require('./product_unit');

function AlternateUnit(quantity, symbol, unit) {
    this.quantity = quantity;
    this.symbol = symbol;
    this.unit = unit;
}

AlternateUnit.prototype.getQuantity = function() {
    return this.quantity;
};

AlternateUnit.prototype.getSymbol = function() {
    return this.symbol;
};

AlternateUnit.prototype.getUnit = function() {
    return this.unit;
};

AlternateUnit.prototype.toString = function() {
    return '[' + this.getSymbol() + ']';
};

AlternateUnit.prototype.multiply = function(unit) {
        return new ProductUnit([ [ProductUnit.NOP, this], [ ProductUnit.MULTIPLY, unit ] ]);
};

AlternateUnit.prototype.divide = function(unit) {
        return new ProductUnit([ [ProductUnit.NOP, this], [ ProductUnit.DIVIDE, unit ] ]);
};

AlternateUnit.prototype.getParentUnit = function() {
    return this.unit;
};

AlternateUnit.prototype.equals = function(other) {
    return this === other ||
        (other instanceof AlternateUnit &&
         this.quantity === other.quantity &&
         this.symbol === other.symbol &&
         this.unit.equals(other.unit));
};

AlternateUnit.prototype.getSimplified = function() {
    return new AlternateUnit(this.getQuantity(), this.getSymbol(), this.getUnit());
};

module.exports = AlternateUnit;
