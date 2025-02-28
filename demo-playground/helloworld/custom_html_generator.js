const htmlGenerator = new Blockly.Generator('HTML');

htmlGenerator.forBlock['output_alert'] = function(block, generator) {
    return 'boo';
}
