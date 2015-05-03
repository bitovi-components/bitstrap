/**
* @module {can.Component} dropdown Dropdown
* @parent bitstrap
* @author Juan Orozco
*
*
* @description
* Takes a list of options and creates button toggles using radio inputs.
*
*
* @signature '<bitstrap-dropdown></bitstrap-dropdown>'
*
* @param {can.List|Array} items The list of dropdown options.
* @param {String} alignment Can be left or right.
* @param {String} dropdown-name The dropdown trigger unique ID.
* @param {String} button-label The dropdown trigger label.
*
*
* @body
*
* ## Component Initialization
*
* ```html
*   <bitstrap-dropdown items="{items}" alignment="left" button-label="Dropdown" dropdown-name="my-dropdown"></bitstrap-dropdown>
* ```
*
*
* @demo ../dropdown/demos/simple.html
*/
import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';

import template from './dropdown.stache!';

can.Component.extend({
    tag: 'bitstrap-dropdown',
    template: template,
    scope: ViewModel
});

export default ViewModel;
