let htmlGenerator = new Blockly.Generator('HTML');
htmlGenerator['forBlock'] = {};

const standard_blocks = [
    "lists_create_empty",
    "lists_create_with",
    "lists_repeat",
    "lists_length",
    "lists_isEmpty",
    "lists_indexOf",
    "lists_getIndex",
    "lists_setIndex",
    "lists_getSublist",
    "lists_sort",
    "lists_split",
    "lists_reverse",
    "logic_compare",
    "logic_operation",
    "logic_negate",
    "logic_boolean",
    "logic_null",
    "logic_ternary",
    "math_number",
    "math_arithmetic",
    "math_single",
    "math_constant",
    "math_number_property",
    "math_change",
    "math_round",
    "math_trig",
    "math_on_list",
    "math_modulo",
    "math_constrain",
    "math_random_int",
    "math_random_float",
    "math_atan2",
    "procedures_defreturn",
    "procedures_defnoreturn",
    "procedures_callreturn",
    "procedures_callnoreturn",
    "procedures_ifreturn",
    "text",
    "text_join",
    "text_append",
    "text_length",
    "text_isEmpty",
    "text_indexOf",
    "text_charAt",
    "text_getSubstring",
    "text_changeCase",
    "text_trim",
    "text_print",
    "text_prompt_ext",
    "text_prompt",
    "text_count",
    "text_replace",
    "text_reverse",
    "variables_get",
    "variables_set",
    "variables_get_dynamic",
    "variables_set_dynamic"
];

for (const block of standard_blocks) {
  const forblock = javascript.javascriptGenerator.forBlock[block];
  htmlGenerator.forBlock[block] = forblock;
}

/*
jsonGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ',\n' + jsonGenerator.blockToCode(nextBlock);
  }
  return code;
};
*/

/*
jsonGenerator.forBlock['logic_null'] = function (block) {
  return ['null', Order.ATOMIC];
};

jsonGenerator.forBlock['text'] = function (block) {
  const textValue = block.getFieldValue('TEXT');
  const code = `"${textValue}"`;
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock['math_number'] = function (block) {
  const code = String(block.getFieldValue('NUM'));
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock['logic_boolean'] = function (block) {
  const code = block.getFieldValue('BOOL') == 'TRUE' ? 'true' : 'false';
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock['member'] = function (block, generator) {
  const name = block.getFieldValue('MEMBER_NAME');
  const value = generator.valueToCode(block, 'MEMBER_VALUE', Order.ATOMIC);
  const code = `"${name}": ${value}`;
  return code;
};

jsonGenerator.forBlock['lists_create_with'] = function (block, generator) {
  const values = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, 'ADD' + i, Order.ATOMIC);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(',\n');
  const indentedValueString = generator.prefixLines(
    valueString,
    generator.INDENT,
  );
  const codeString = '[\n' + indentedValueString + '\n]';
  return [codeString, Order.ATOMIC];
};

jsonGenerator.forBlock['object'] = function (block, generator) {
  const statementMembers = generator.statementToCode(block, 'MEMBERS');
  const code = '{\n' + statementMembers + '\n}';
  return [code, Order.ATOMIC];
};
*/

const Order = {
  ATOMIC: 0
};

htmlGenerator.forBlock['output_alert'] = function(block, generator) {
    const textValue = javascript.javascriptGenerator.valueToCode(block, 'TEXT', Order.ATOMIC) || "";
    let code = `alert(${textValue});\n`
    
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock) {
      // Recursively generate code for the next block
      const nextCode = generator.blockToCode(nextBlock);
      code += nextCode; // Append the generated code for the next block
    }

    return code;
}


htmlGenerator.forBlock['elements_script'] = function(block, generator) {
    const innerHTMLContent = generator.statementToCode(block, 'STATEMENTS') || "";
    const code = `<script>\n${innerHTMLContent}</script>`;
    return code;
}

htmlGenerator.forBlock['functions_def'] = function(block, generator) {
  const function_name = block.getFieldValue('TEXT') || "";
  const innerHTMLContent = generator.statementToCode(block, 'STATEMENTS') || "";
  const code = `function ${function_name}() {\n${innerHTMLContent}}\n`;
  return code;
}

htmlGenerator.forBlock['elements_element_textcontent'] = function(block, generator) {
  const tag = block.getFieldValue('TAG') || "";
  const textContent = block.getFieldValue('TEXT') || "";
  //let code = `<${tag}>${eventName}</${tag}>\n`;

    // Generate code for the input value (the "do" part)
  const actionCode = generator.valueToCode(
    block, 
    'TEXT', 
    Order.ATOMIC
  ) || 'null'; // Default to 'null' if no input is provided

  // Map ITEM1/ITEM2 to actual event names
  const eventMap = {
    'ITEM1': 'click',
    'ITEM2': 'dblclick' // Use standard DOM event names
  };
  const eventType = eventMap[textContent] || 'click';

  const attributes = generator.statementToCode(block, 'STATEMENT') || "";
  const code = `<${tag} ${attributes} ${eventType}="${actionCode}">${textContent}</${tag}>\n`;

  //const eventHandler = generator.valueToCode(block, 'EVENTHANDLER', Order.ATOMIC) || "";

  // const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  // if (nextBlock) {
  //   // Recursively generate code for the next block
  //   const nextCode = generator.blockToCode(nextBlock);
  //   code += nextCode; // Append the generated code for the next block
  // }
  
  return code;
}

htmlGenerator.forBlock['functions_call'] = function(block, generator) {
  const function_name = block.getFieldValue('TEXT') || "";
  const code = `${function_name}()`;
  return [code, Order.ATOMIC];
}

/*
Blockly.JavaScript['elements_on'] = function(block) {
  // Get the selected event type from the dropdown
  const eventName = block.getFieldValue('FIELDNAME'); // "ITEM1" (click) or "ITEM2" (double click)
  
  // Generate code for the input value (the "do" part)
  const actionCode = Blockly.JavaScript.valueToCode(
    block, 
    'TEXT', 
    Blockly.JavaScript.ORDER_ATOMIC
  ) || 'null'; // Default to 'null' if no input is provided

  // Map ITEM1/ITEM2 to actual event names
  const eventMap = {
    'ITEM1': 'click',
    'ITEM2': 'dblclick' // Use standard DOM event names
  };
  const eventType = eventMap[eventName] || 'click';

  // Generate the final JavaScript code
  const code = `element.addEventListener('${eventType}', function() {\n  ${actionCode}\n});\n`;
  
  return code;
};
*/

htmlGenerator.forBlock['elements_on'] = function(block, generator) {
  const event = block.getFieldValue('FIELDNAME') || "";
  const handler = generator.valueToCode(block, 'EVENTHANDLER', Order.ATOMIC) || "";
  const code = `on${event}="${handler}"`;
  return code;
}

