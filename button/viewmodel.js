/**
 * @module {can.Map} button/ViewModel View Model
 * @parent button
 * @author Curtis Cummings
 *
 * @description View model of the [button] component.
 *
 * @signature
 * var ViewModel = can.Map.extend({});
 *
 */
import can from 'can';
import _ from 'lodash';
import 'can/map/define/';

var TYPES = ["success", "info", "warning", "danger", "primary", "secondary", "tertiary", "link", "default"];
var SIZES = {
	large: "lg",
	default: null,
	small: "sm",
	extrasmall: "xs",
	"extra-small": "xs",
	"extra_small": "xs"
};

export default can.Map.extend({
	define: {
		/**
		 * @property {HTMLBoolean} button.viewModel.disabled disabled
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		disabled: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.submit submit
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		submit: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.active active
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		active: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.block block
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		block: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.wide wide
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		wide: {
			value: false,
			type: 'htmlbool'
		},
		name: {
			value: null
		},
		size: {
				value: null,
				type: x => SIZES[(x||"").toLowerCase()] || x
		},
		type: {
				get: function () {
						return _.find(
										TYPES, type => this.attr((type || "").toLowerCase())) ||
								"default";
				},
				set: function (type) {
						if (this.attr("type")) {
								this.attr(this.attr("type"), false);
						}
						this.attr(type, true);
						return type;
				}
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.wide wide
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		success: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.wide wide
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		info: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.warning warning
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		warning: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.danger danger
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		danger: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.primary primary
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		primary: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.secondary secondary
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		secondary: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.tertiary tertiary
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		tertiary: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.link link
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		link: {
			value: false,
			type: 'htmlbool'
		},
		/**
		 * @property {HTMLBoolean} button.viewModel.default default
		 * @description Whether the button is disabled.
		 * @option {HTMLBoolean} Defaults to `false`.
		 */
		default: {
			value: false,
			type: 'htmlbool'
		},
		href: {
			value: null
		}
	}
});
