import can from 'can';
import _ from 'lodash';
import 'can/map/define/';

var TYPES = ['success', 'info', 'warning', 'danger', 'primary', 'secondary', 'tertiary', 'link', 'default'];
var SIZES = {
	large: 'lg',
	default: null,
	small: 'sm',
	'extra-small': 'xs'
};

export default can.Map.extend({
	define: {
		/**
		 * @property {HTMLBoolean} button.viewModel.disabled disabled
         * @parent button/viewModel
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		disabled: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.submit submit
         * @parent button/viewModel
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		submit: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.active active
         * @parent button/viewModel
		 * @description Whether the button is in an active state.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		active: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.block block
         * @parent button/viewModel
		 * @description Whether the button should be a block level button.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		block: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.href href
         * @parent button/viewModel
		 * @description The name attribute of the button.
		 */
		name: {
			value: null
		},
		size: {
			value: null,
			type: x => SIZES[(x||'').toLowerCase()] || x
		},
		type: {
			get: function () {
				return _.find(TYPES, type => this.attr((type || '').toLowerCase())) || 'default';
			},
			set: function (type) {
				if (this.attr('type')) {
						this.attr(this.attr('type'), false);
				}
				this.attr(type, true);
				return type;
			}
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.wide wide
         * @parent button/viewModel
		 * @description Makes the button use success styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		success: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.wide wide
         * @parent button/viewModel
		 * @description Makes the button use info styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		info: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.warning warning
         * @parent button/viewModel
		 * @description Makes the button use warning styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		warning: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.danger danger
         * @parent button/viewModel
		 * @description Makes the button use danger styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		danger: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.primary primary
         * @parent button/viewModel
		 * @description Makes the button use primary styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		primary: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.link link
         * @parent button/viewModel
		 * @description Makes the button use link styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		link: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.default default
         * @parent button/viewModel
		 * @description Makes the button use default styling.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		default: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.href href
         * @parent button/viewModel
		 * @description The href attribute of the button. This will render the button using an `<a>` tag.
		 */
		href: {
			value: null
		}
	}
});
