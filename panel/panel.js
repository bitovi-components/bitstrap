/**
* @module {can.Component} panel panel
* @parent bitstrap
* @group panel/events 0 Events
* @group panel/helpers 1 Helpers
* @group panel/viewModel 2 ViewModel
* @author Juan Orozco
*
*
* @description
* 
*
*
* @signature '<bitstrap-panel></bitstrap-panel>'
*
* @param {boolean} panelTitle The panel's title.
* @param {boolean} panelFooter The panel's footer string.
* @param {boolean} classes The panel's contextual class list.
*
*
* @body
*
* ## Component Initialization
*
* ```html
*   <bitstrap-panel panel-title="Test" panel-footer="Bitovi" classes="panel-danger"></bitstrap-panel>
* ```
*
*
* @demo bit-strap.html#panel
*/
import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './panel.less!';
var $ = can.$;

import template from './panel.stache!';

can.Component.extend({
    tag: 'bitstrap-panel',
    template: template,
    scope: ViewModel
});

export default ViewModel;
