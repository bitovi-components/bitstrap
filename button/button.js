/**
 * @module {can.Component} button bitstrap-button
 * @group button/events 0 Events
 * @group button/viewModel 1 ViewModel
 *
 * @author Curtis Cummings
 *
 * @signature '<bitstrap-button></bitstrap-button>'
 *
 * @param {HTMLBoolean} disabled Contains the model to search with.
 * @param {HTMLBoolean} submit The ID of the input element.
 * @param {HTMLBoolean} active Marks when a selection is made.
 * @param {HTMLBoolean} block The selected item object.
 * @param {String} name The amount of time to wait before searching.
 * @param {String} size The number of characters that must be entered to trigger a search.
 * @param {String} type The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} success The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} info The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} warning The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} danger The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} primary The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} secondary The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} tertiary The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} link The number of characters that must be entered to trigger a search.
 * @param {HTMLBoolean} default The number of characters that must be entered to trigger a search.
 * @param {String} href The number of characters that must be entered to trigger a search.
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
 * ##Tags
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
import can from "can";
import _ from "lodash";
import "can/map/define/define";
import ViewModel from './viewmodel';
import template from "./button.stache!";
import "./button.less!";

export default can.Component.extend({
	tag: "bitstrap-button",
	template: template,
	viewModel: ViewModel,
	events: {
		click: function(el, ev) {
			if (this.viewModel.attr("disabled")) {
				ev.preventDefault();
				ev.stopPropagation();
			}
		}
	}
});

export default ViewModel;
