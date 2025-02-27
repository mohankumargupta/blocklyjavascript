Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "output_alert",
        "message0": "alert with message %1",
        "args0": [
            {
                "type": "input_value",
                "name": "TEXT",
                "check": "String"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "rgb(144, 0, 144)"
    },
    {
        "type": "elements_script",
        "message0": "script element",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "STATEMENTS"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "rgb(0, 191, 186)"
    },
    {
        "type": "elements_element_textcontent",
        "message0": '%1 element with text content \"%2\"',
        "args0": [
            {
                "type": "field_input",
                "name": "ELEMENT",
                "spellcheck": false
            },
            {
                "type": "field_input",
                "name": "TEXTCONTENT",
                "spellcheck": false
            }            
        ],
        "message1": "attributes %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "STATEMENT"
            }
        ]
    }
]);