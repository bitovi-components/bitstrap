import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        
		/**
		 * @property {boolean} modal.viewModel.visible visible
         * @parent modal/viewModal
		 * @description Controls visibility of modal
		 * @option {boolean} Defaults to `false`.
		 */
        visible: {
            value: false,
            type: 'boolean'
        },
            
		/**
		 * @property {string} modal.viewModel.modalTitle modalTitle
         * @parent modal/viewModal
		 * @description The modal's title. If empty, will hide the header.
		 * @option {string} Defaults to empty string.
		 */
        modalTitle: {
            value: '',
            type: 'string'
        },
            
		/**
		 * @property {string} modal.viewModel.modalSize modalSize
         * @parent modal/viewModal
		 * @description The size of the modal, must be lg, sm, or empty string.
		 * @option {string} Defaults to empty string.
		 */
        modalSize: {
            value: '',
            type: function (val) {
                return (val === 'lg' || val === '' || val === 'sm') ?
                        val:
                        '';
            }
        },
            
		/**
		 * @property {string} modal.viewModel.isModal isModal
         * @parent modal/viewModal
		 * @description Whether to use overlay or not.
		 * @option {string} Defaults to `true`.
		 */
        isModal: {
            value: true,
            type: 'boolean'
        },
            
		/**
		 * @property {string} modal.viewModel.isHidden isHidden
         * @parent modal/viewModal
		 * @description A helper for the aria is hidden property.
		 * @option {string} Flips whatever visible is currently set to..
		 */
        isHidden: {
            get: function () {
                return !this.attr('visible');
            }
        }
    },
    
    /**
     * @function modal.viewModel.closeModal closeModal
     * @parent modal/viewModel
     * @description Closes the modal
     */
    closeModal: function () {
        this.attr('visible', false);
    },
    
    /**
     * @function modal.viewModel.openModal openModal
     * @parent modal/viewModel
     * @description Opens the modal
     */
    openModal: function () {
        this.attr('visible', true);
        
    },
    
    /**
     * @function modal.viewModel.showBackdrop showBackdrop
     * @parent modal/viewModel
     * @description Only render the overlay when the dialog is visible and is a legit modal.
     * @return {boolean} Returns true when visible and isModal are true.
     */
    showBackdrop: function () {
        return this.attr('isModal') && this.attr('visible');
    }
});
