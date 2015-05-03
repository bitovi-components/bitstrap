/**
 * @module {can.Component} button bitstrap-button
 * @parent bitstrap
 * @group button/events 0 Events
 * @group button/helpers 1 Helpers
 * @group button/viewModel 2 ViewModel
 *
 * @author Curtis Cummings
 *
 * @signature '<bitstrap-button></bitstrap-button>'
 *
 * @param {HTMLBoolean} disabled The disabled state of the button.
 * @param {HTMLBoolean} submit Whether the button can submit a form.
 * @param {HTMLBoolean} active Whether the button is in an active state.
 * @param {HTMLBoolean} block Whether the button should be block level.
 * @param {String} value The value attribute of the button. This will render the button using an `<input>` tag.
 * @param {String} name The name attribute of the button.
 * @param {String} size The size of the button. Possible values are: xs, extra-small, sm, small, default, lg or large.
 * @param {String} type The style of the button.
 *                      Possible values are: default, primary, success, info, warning, danger, link.
 *                      The type of button can also be added as an HTML attribute like:
 *
 * 		<bitstrap-button primary></bitstrap-button>
 *
 * @param {String} href The href attribute of the button. This will render the button using an `<a>` tag.
 *
 * @body
 *
 * ## Styles
 *
 * Specify the style of the button with the `style` attribute.
 * Alternatively you can add a boolean attribute to the button with the name of the desired style
 * like: `<bitstrap-button primary></bitstrap-button>`.
 *
 * @demo ../button/demos/styles.html
 *
 * Specify the size of the button with the `size` attribute.
 *
 * ## Sizes
 *
 * @demo ../button/demos/sizes.html
 *
 * ## Tags
 *
 * By defualt a `<button>` is rendered. Specifying a `value` attribute will render an `<input>` and
 * specifying an `href` attribute will render an `<a>`.
 *
 * @demo ../button/demos/tags.html
 *
 * ## Block display
 *
 * Adding `block` or `block="true"` renders a block level button.
 *
 * @demo ../button/demos/block.html
 *
 * ## Active and disabled states
 *
 * @demo ../button/demos/states.html
 *
 * ## Submitting
 *
 * A button will not submit a form unless the HTML boolean attribute `submit` is specified.
 *
 * @demo ../button/demos/submit.html
 *
 */
import can from 'can';
import _ from 'lodash';
import 'can/map/define/define';
import ViewModel from './viewmodel';
import template from './button.stache!';
import './button.less!';

export default can.Component.extend({
	tag: 'bitstrap-button',
	template: template,
	viewModel: ViewModel,
	events: {
		/**
		 * @function autocomplete.events.click click
         * @parent button/events
         * @description Prevents clicks on a disabled button from propagating.
		 * @param {Element} el The element.
		 * @param {Event} ev The event object.
         */
		click: function(el, ev) {
			if (this.viewModel.attr('disabled')) {
				ev.preventDefault();
				ev.stopPropagation();
			}
		}
	},
	helpers: {
		/**
		 * @function button.helpers.className className
         * @parent button/helpers
         * @description Returns the class for the button.
		 * @returns {String}
         */
		className: function() {
			var classes = ['btn', 'btn-' + this.attr('type')];
			if(this.attr('active')) {
				classes.push('active');
			}
			if(this.attr('block')) {
				classes.push('btn-block');
			}
			if(this.attr('size')) {
				classes.push('btn-' + this.attr('size'));
			}
			if(this.attr('disabled') && this.attr('href')) {
				classes.push('disabled');
			}
			return classes.join(' ');
		},
		/**
		 * @function button.helpers.buttonType buttonType
         * @parent button/helpers
         * @description Returns the value of the `type` attribute for `<input>` and `<button>` elements.
		 * @returns {String}
         */
		buttonType: function() {
			return this.attr('submit') ? 'submit' : 'button';
		}
	}
});

export default ViewModel;
