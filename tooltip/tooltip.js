/**
* @module {can.Component} tooltip Tooltip
* @parent bitstrap
* @group tooltip/events 0 Events
* @group tooltip/helpers 1 Helpers
* @group tooltip/viewModel 2 ViewModel
* @author Juan Orozco
*
*
* @description
* 
*
*
* @signature '<bitstrap-tooltip></bitstrap-tooltip>'
*
* @param {boolean} visible The modal's visibility
*
*
* @body
*
* ## Component Initialization
*
* ```html
*   <bitstrap-tooltip></bitstrap-tooltip>
* ```
*
*
* @demo bit-strap.html#dropdown
*/
import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './tooltip.less!';
var $ = can.$;

import template from './tooltip.stache!';
import Positioner from '../utils/positioner';


function tooltipHandler(el){
    $(el).one('inserted', function() {
        $(this).trigger('reposition');
    });
}

can.Component.extend({
    tag: 'bitstrap-tooltip',
    template: template,
    scope: ViewModel,
    helpers : {
        
        /**
         * @function tooltip.helpers.positionTooltip Position Tooltip Helper
         * @description Bootstraps the repositioning event.
         */
        positionTooltip : function(){
            return tooltipHandler;
        }
    },
    events: {
        
        /**
         * @function tooltip.events.inserted Inserted Handler
         * @description Initializes the positioning handler for tooltips
         */
        inserted: function () {
            var opts = {
                placement: this.viewModel.attr('placement'),
                trigger: '.tooltip-trigger',
                target: '#' + this.viewModel.attr('tooltipId'),
                buffer: {bottom:12, top:10, left:2}
            };
            this.positioner = new Positioner(this.element, opts);
            this.element.trigger('reposition');
        },
        
        /**
         * @function tooltip.events.triggerMouseoverEvent Trigger Mouseover Event Handler
         * @description Shows tooltip on mouseover
         */
        '.tooltip-trigger mouseover': function () {
            this.viewModel.toggle(true);
        },
        
        /**
         * @function tooltip.events.triggerMouseoutEvent Trigger Mouseout Event Handler
         * @description Shows tooltip on mouseout
         */
        '.tooltip-trigger mouseout': function () {
            this.viewModel.toggle(false);
        }
    }
});

export default ViewModel;
