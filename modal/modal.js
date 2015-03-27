/**
* @module {can.Component} modal Modal
* @parent bitstrap
* @group modal/events 0 Events
* @group modal/viewModel 1 ViewModel
* @author Juan Orozco
*
*
* @description
*
*
*
* @signature '<bitstrap-modal></bitstrap-modal>'
*
* @param {boolean} visible The modal's visibility
*
*
* @body
*
* ## Component Initialization
*
* ```html
*   <bitstrap-modal></bitstrap-modal>
* ```
*
*
* @demo ../modal/demos/modal.html
*/
import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';

import template from './modal.stache!';

can.Component.extend({
    tag: 'bitstrap-modal',
    template: template,
    scope: ViewModel,
    events: {

        /**
         * @function modal.events.visibleChangeEvent Visible Property Change Event Handler
         * @description Manages a class in the `BODY` tag used by the modal.
         * @param {object} scope Points to the scope/viewmodel.
         * @param {string} key The key name of the current property, `visible`
         * @param {boolean} newVal The new value of `visible`.
         */
        '{viewModel} visible': function (scope, key, newVal) {
            var $target = $('body')
            if (newVal) {
                $target.addClass('modal-open');
            } else {
                $target.removeClass('modal-open');
            }
        }
    }
});

export default ViewModel;
