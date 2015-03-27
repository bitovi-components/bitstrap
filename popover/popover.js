/**
* @module {can.Component} popover popover
* @parent bitstrap
* @group popover/events 0 Events
* @group popover/helpers 1 Helpers
* @group popover/viewModel 2 ViewModel
* @author Juan Orozco
*
*
* @description
* 
*
*
* @signature '<bitstrap-popover></bitstrap-popover>'
*
* @param {boolean} visible The modal's visibility
*
*
* @body
*
* ## Component Initialization
*
* ```html
*   <bitstrap-popover></bitstrap-popover>
* ```
*
*
* @demo bit-strap.html#dropdown
*/
import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './popover.less!';
var $ = can.$;

import template from './popover.stache!';
import Positioner from '../utils/positioner';


function popoverHandler(el){
    $(el).one('inserted', function() {
        $(this).trigger('reposition');
    });
}

can.Component.extend({
    tag: 'bitstrap-popover',
    template: template,
    scope: ViewModel,
    helpers : {
        
        /**
         * @function popover.helpers.positionPopover Position popover Helper
         * @description Bootstraps the repositioning event.
         */
        positionPopover : function(){
            return popoverHandler;
        }
    },
    events: {
        
        /**
         * @function popover.events.inserted Inserted Handler
         * @description Initializes the positioning handler for popovers
         */
        inserted: function () {
            var triggerSelector = this.viewModel.attr('triggerSelector');
            if ( triggerSelector ) {
                var opts = {
                    placement: this.viewModel.attr('placement'),
                    trigger: triggerSelector,
                    target: '.popover',
                    buffer: {bottom:15, top:15, left:15, right: 15}
                };
                this.positioner = new Positioner(this.element.parent(), opts);
                this.element.trigger('reposition');    
            }
            
        },
        
        /**
         * @function popover.events.triggerMouseoverEvent Trigger Mouseover Event Handler
         * @description Shows popover on mouseover
         */
        '.popover-trigger mouseover': function () {
            this.viewModel.toggle(true);
        },
        
        /**
         * @function popover.events.triggerMouseoutEvent Trigger Mouseout Event Handler
         * @description Shows popover on mouseout
         */
        '.popover-trigger mouseout': function () {
            this.viewModel.toggle(false);
        }
    }
});

export default ViewModel;
