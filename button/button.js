/**
 * @module {can.Component} button bitstrap-button
 * @group button/events 0 Events
 * @group button/viewModel 1 ViewModel
 *
 * @author Curtis Cummings
 *
 * @signature '<bitstrap-button></bitstrap-button>'
 *
 * @param {HTMLBoolean} disabled The disabled state of the button.
 * @param {HTMLBoolean} submit Whether the button will submit.
 * @param {HTMLBoolean} active The active state of the button.
 * @param {HTMLBoolean} block Whether the button should be a block level button.
 * @param {String} name The href attribute of the button.
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
 * @demo ../button/demos/styles.html
 *
 * ## Sizes
 *
 * @demo ../button/demos/sizes.html
 *
 * ## Tags
 *
 * @demo ../button/demos/tags.html
 *
 * ## Block display
 *
 * @demo ../button/demos/block.html
 *
 * ## Active and disabled states
 *
 * @demo ../button/demos/states.html
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
		click: function(el, ev) {
			if (this.viewModel.attr('disabled')) {
				ev.preventDefault();
				ev.stopPropagation();
			}
		}
	}
});

export default ViewModel;
