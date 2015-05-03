import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        
		/**
		 * @property {string} alert.viewModel.severity severity
         * @parent alert/viewModal
		 * @description The class that gives the alert context. Must be either
         * info, success, warning, or danger.
		 * @option {string} Defaults to `info`.
		 */
        severity: {
            value: 'info',
            type: function (val) {
                var allowed = ['info', 'success', 'warning', 'danger'],
                    isValid = allowed.indexOf(val);
                
                return isValid ? val: allowed[0];
            }
        },
        
		/**
		 * @property {boolean} alert.viewModel.isDismissable isDismissable
         * @parent alert/viewModal
		 * @description Marks the alert as dismissable, which adds a "close" icon to the alert.
		 * @option {boolean} Defaults to `true`.
		 */
        isDismissable: {
            value: true,
            type: 'boolean'
        },
        
		/**
		 * @property {boolean} alert.viewModel.visible visible
         * @parent alert/viewModal
		 * @description Toggles visiblity of the alert
		 * @option {boolean} Defaults to `false`.
		 */
        visible: {
            value: false,
            type: 'boolean'
        },
        
		/**
		 * @property {string} alert.viewModel.alertBody alertBody
         * @parent alert/viewModal
		 * @description Used to programmatically change the content.
		 * @option {string} Defaults to empty string.
		 */
        alertBody: {
            value: '',
            type: 'string'
        },
        
		/**
		 * @property {boolean} alert.viewModel.useContentTag useContentTag
         * @parent alert/viewModal
		 * @description Either use content passed by `content` tag or use content in
         * `alertBody` property.
		 * @option {boolean} Defaults to `true`.
		 */
        useContentTag: {
            value: true,
            type: 'boolean'
        },
        
		/**
		 * @property {string} alert.viewModel.alertTitle alertTitle
         * @parent alert/viewModal
		 * @description Optional. The title of the alert.
		 * @option {string} Defaults to empty string.
		 */
        alertTitle: {
            value: '',
            type: 'string'
        }
    },
    
    /**
     * @function alert.viewModel.toggle toggle
     * @parent alert/viewModel
     * @description Toggle the alert
     */
    toggle: function () {
        this.attr('visible', !this.attr('visible') );
    },
    
    /**
     * @function alert.viewModel.update update
     * @parent alert/viewModel
     * @description Updates the content of the alert
     * @param {string} newContent The content to replace the alert body with.
     */
    update: function (newContent) {
        this.attr('useContentTag', false);
        this.attr('alertBody', newContent);
    }
});
