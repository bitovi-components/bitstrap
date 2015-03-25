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
* @demo bit-strap.html#dropdown
*/
var can = require('can');
var ViewModel = require('./viewmodel.js');
require('can/view/stache/stache');

var template = require('./dropdown.stache');

module.exports = can.Component.extend({
    tag: 'bitstrap-dropdown',
    template: template,
    scope: ViewModel
});
