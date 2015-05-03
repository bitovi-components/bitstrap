import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        
		/**
		 * @property {boolean} popover.viewModel.visible visible
         * @parent popover/viewModal
		 * @description Controls visibility of modal
		 * @option {boolean} Defaults to `false`.
		 */
        visible: {
            value: false,
            type: 'boolean'
        },
            
		/**
		 * @property {string} popover.viewModel.popoverId popoverId
         * @parent modal/viewModal
		 * @description popover id attribute value
		 * @option {string} defaults to popover + <random number>
		 */
        popoverId: {
            value: function () {
                return 'popover' + Math.floor( Math.random() * 1000000 );
            }
        },
            
		/**
		 * @property {string} popover.viewModel.placement placement
         * @parent modal/viewModal
		 * @description The placement of the popover. Must be bottom, top, left, right.
		 * @option {string} Defaults to top string.
		 */
        placement: {
            value: 'top',
            type: 'string',
            set: function (val) {
                return (val === 'bottom' || val === 'top' || val === 'left' || val === 'right' ) ?
                        val :
                        'top';
            }
        },
            
		/**
		 * @property {string} popover.viewModel.triggerSelector triggerSelector
         * @parent modal/viewModal
		 * @description The trigger's selector to use for positioning
		 * @option {string} Defaults to empty string.
		 */
        triggerSelector: {
            value: '',
            type: 'string'
        }
    },
    
    /**
     * @function popover.viewModel.toggle toggle
     * @parent popover/viewModel
     * @description Toggle the popover
     * @param {boolean} force Forces the visiblity of popover
     */
    toggle: function (force) {
        force = force || !this.attr('visible');
        this.attr('visible', force);
    }
});
