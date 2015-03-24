import QUnit from "steal-qunit";
// import {CanPanelVM, CanTabsVM} from "bit-tabs";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

QUnit.module("bit-strap-tab view model");

QUnit.test("basics", function(){
	QUnit.ok(true, 'works');
});

var template = can.stache("<div></div>");

QUnit.module("bit-strap-tab component",{
	setup: function(){
		$("#qunit-fixture").append(template());
	}
});

QUnit.test("basics", function(){
	QUnit.ok(true, 'works');
});
