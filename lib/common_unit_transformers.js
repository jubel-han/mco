var Quantity = require('./quantity');
var UnitTransformer = require('./unit_transformer');
var BaseUnit = require('./base_unit');
var ProductUnit = require('./product_unit');
var AddOperation = require('./add_operation');
var MultiplyOperation = require('./multiply_operation');

UnitTransformer.getTransformer = function(fromUnit, toUnit) {
    for (var i = 0; i < UnitTransformer.CommonTransformers.length; ++i) {
        var transformer = UnitTransformer.CommonTransformers[i];
        if (transformer.fromUnit.equals(fromUnit) && transformer.toUnit.equals(toUnit)) {
            return transformer;
        }

        var inverse = transformer.inverse();
        if (inverse.fromUnit.equals(fromUnit) && inverse.toUnit.equals(toUnit)) {
            return inverse;
        }
    }
}

UnitTransformer.CommonTransformers = [
    // Length
    new UnitTransformer(
        new BaseUnit(Quantity.LENGTH, 'ft'),
        new BaseUnit(Quantity.LENGTH, 'mile'), // land mile
        [ new MultiplyOperation(5280) ]
    ),
    new UnitTransformer(
        new BaseUnit(Quantity.LENGTH, 'm'),
        new BaseUnit(Quantity.LENGTH, 'yd'),
        [ new MultiplyOperation(0.9144) ]
    ),
    new UnitTransformer(
        new BaseUnit(Quantity.LENGTH, 'ft'),
        new BaseUnit(Quantity.LENGTH, 'in'),
        [ new MultiplyOperation(12) ]
    ),
    new UnitTransformer(
        new BaseUnit(Quantity.LENGTH, 'yd'),
        new BaseUnit(Quantity.LENGTH, 'in'),
        [ new MultiplyOperation(36) ]
    ),

    // Temperature
    new UnitTransformer(
        new BaseUnit(Quantity.TEMPERATURE, 'K'),
        new BaseUnit(Quantity.TEMPERATURE, '°C'),
        [ new AddOperation(-273.15) ]
    ),
    new UnitTransformer(
        new BaseUnit(Quantity.TEMPERATURE, 'K'),
        new BaseUnit(Quantity.TEMPERATURE, '°F'),
        [ new MultiplyOperation(9/5), new AddOperation(-459.67) ]
    ),
    new UnitTransformer(
        new BaseUnit(Quantity.TEMPERATURE, '°F'),
        new BaseUnit(Quantity.TEMPERATURE, '°C'),
        [ new AddOperation(-32), new MultiplyOperation(5/9) ]
    ),
];