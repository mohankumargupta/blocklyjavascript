Blockly.common.defineBlocksWithJsonArray([
    {
        "type": "functions_call",
        "message0": "call %1",
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
        
    },
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
        "message0": "%1 element with text content \" %2 \"",
        "args0": [
            {
                "type": "field_input",
                "name": "ELEMENT"
            },
            {
                "type": "field_input",
                "name": "TEXTCONTENT"
            }            
        ],
        "message1": "attributes %1",
        "args1": [
            {
                "type": "input_statement",
                "name": "STATEMENT"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "rgb(0, 191, 186)"        
    },
    {
        "type": "elements_on",
        "message0": "on %1 do %2",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "FIELDNAME",
                "options": [
                    ["click", "ITEM1"],
                    ["double click", "ITEM2"]
                 ]
            },
            {
                "type": "input_value",
                "name": "VALUE",
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "rgb(254, 214, 81)"
    }
]);