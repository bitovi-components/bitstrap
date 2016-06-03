import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        
		/**
		 * @property {boolean} panel.viewModel.panelTitle panelTitle
         * @parent panel/viewModal
		 * @description The panel title.
		 * @option {boolean} Defaults to empty string.
		 */
        panelTitle: {
            value: '',
            type: 'string'
        },
        
		/**
		 * @property {boolean} panel.viewModel.panelFooter panelFooter
         * @parent panel/viewModal
		 * @description The panel footer string.
		 * @option {boolean} Defaults to empty string.
		 */
        panelFooter: {
            value: '',
            type: 'string'
        },
        
		/**
		 * @property {boolean} panel.viewModel.classes classes
         * @parent panel/viewModal
		 * @description The panel contextual classes plus any other classes desired for the panel.
		 * @option {boolean} Defaults to `panel-default`.
		 */
        classes: {
            value: 'panel-default',
            type: 'string'
        }
    }
});
