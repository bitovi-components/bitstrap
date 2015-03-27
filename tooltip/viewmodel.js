import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        
		/**
		 * @property {boolean} tooltip.viewModel.visible visible
         * @parent tooltip/viewModal
		 * @description Controls visibility of modal
		 * @option {boolean} Defaults to `false`.
		 */
         visible: {
            value: false,
            type: 'boolean'
        },
            
		/**
		 * @property {string} tooltip.viewModel.tooltipId tooltipId
         * @parent modal/viewModal
		 * @description Tooltip id attribute value
		 * @option {string} defaults to tooltip + <random number>
		 */
        tooltipId: {
            value: function () {
                return 'tooltip' + Math.floor( Math.random() * 1000000 );
            }
        },
            
		/**
		 * @property {string} tooltip.viewModel.placement placement
         * @parent modal/viewModal
		 * @description The placement of the tooltip. Must be bottom, top, left, right.
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
        }
    },
    
    /**
     * @function tooltip.viewModel.toggle toggle
     * @parent tooltip/viewModel
     * @description Toggle the tooltip
     * @param {boolean} force Forces the visiblity of tooltip
     */
    toggle: function (force) {
        force = force || !this.attr('visible');
        this.attr('visible', force);
    }
});
