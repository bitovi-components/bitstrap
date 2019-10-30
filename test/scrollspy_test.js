import QUnit from "steal-qunit";
// import {CanPanelVM, CanTabsVM} from "bit-tabs";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

QUnit.module("bit-strap-scrollspy view model");

QUnit.test("basics", function(assert) {
	assert.ok(true, 'works');
});

var template = can.stache("<div></div>");

QUnit.module("bit-strap-scrollspy component",{
	beforeEach: function(assert) {
		$("#qunit-fixture").append(template());
	}
});

QUnit.test("basics", function(assert) {
	assert.ok(true, 'works');
});
