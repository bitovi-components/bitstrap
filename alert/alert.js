/**
* @module {can.Component} alert alert
* @parent bitstrap
* @group alert/events 0 Events
* @group alert/helpers 1 Helpers
* @group alert/viewModel 2 ViewModel
* @author Juan Orozco
*
*
* @description
* 
*
*
* @signature '<bitstrap-alert></bitstrap-alert>'
*
* @param {boolean} visible The modal's visibility
*
*
* @body
*
* ## Component Initialization
*
* ```html
*   <bitstrap-alert></bitstrap-alert>
* ```
*
*
* @demo bit-strap.html#dropdown
*/
import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './alert.less!';
var $ = can.$;

import template from './alert.stache!';

import '../alert/alert';

can.Component.extend({
    tag: 'bitstrap-alert',
    template: template,
    scope: ViewModel
});

export default ViewModel;
