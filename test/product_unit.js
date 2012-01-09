var mco = require('..');


module.exports = {
    test_ProductUnit_toString: function(beforeExit, assert) {
        var metre = new mco.BaseUnit('m');
        var second = new mco.BaseUnit('s');

        var metrePerSecond = metre.divide(second);
        assert.equal('[m/s]', metrePerSecond.toString());
    },

    test_ProductUnit_getSymbol: function(beforeExit, assert) {
        var metre = new mco.BaseUnit('m');
        var second = new mco.BaseUnit('s');

        var metrePerSecond = metre.divide(second);
        assert.equal('m/s', metrePerSecond.getSymbol());
    },

    test_ProductUnit_divide: function(beforeExit, assert) {
        var metre = new mco.BaseUnit('m');
        var second = new mco.BaseUnit('s');
        var metrePerSecond = metre.divide(second);

        var metrePerSquareSecond = metrePerSecond.divide(second);
        assert.equal('m/s/s', metrePerSquareSecond.getSymbol());
        assert.equal('[m/s/s]', metrePerSquareSecond.toString());
    },

    test_ProductUnit_divide: function(beforeExit, assert) {
        var metre = new mco.BaseUnit('m');
        var quadraticMetre = metre.multiply(metre);
        var cubicMetre = quadraticMetre.multiply(metre);

        assert.equal('m*m*m', cubicMetre.getSymbol());
        assert.equal('[m*m*m]', cubicMetre.toString());
    },
};
