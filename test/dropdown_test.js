import QUnit from "steal-qunit";
import ViewModel from "dropdown/dropdown";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm;

QUnit.module("bit-strap-dropdown view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function(){
	equal( vm.attr('items').length, 0, 'Items is empty array');
	equal( vm.attr('visible'), false, 'Visible defaults to false');
	equal( vm.attr('buttonName'), '', 'Button');
	equal( vm.attr('dropdownId').indexOf('dropdown'), 0, 'Dropdow ID default is prefixed with dropdown');
	equal( vm.attr('alignment'),'left', 'Alignment defualts to left.');
});

var template = can.stache('<bitstrap-dropdown items="{items}" button-label="test"></bitstrap-dropdown>');

QUnit.module("bit-strap-dropdown component",{
	beforeEach: function(){
		$("#qunit-fixture").append(template());
	}
});

QUnit.test("basics", function(){
	QUnit.ok(true, 'works');
});
