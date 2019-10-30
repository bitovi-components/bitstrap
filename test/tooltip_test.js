import QUnit from "steal-qunit";
import ViewModel from "tooltip/tooltip";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm, template;

QUnit.module("bitstrap-tooltip view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function(assert) {
	assert.equal( vm.attr('visible'), false, 'Visible defaults to false');
	assert.equal( vm.attr('tooltipId').indexOf('tooltip'), 0, 'Default Id starts with tooltip');
	assert.equal( vm.attr('placement'), 'top', 'Default placement is top');
});

QUnit.test('toggling', function(assert) {
	assert.equal( vm.attr('visible'), false, 'Visible defaults to false');
	vm.toggle();
	assert.equal( vm.attr('visible'), true, 'Visible updates to true');
	vm.toggle(true);
	assert.equal( vm.attr('visible'), true, 'Visible stays as true');
});

QUnit.module("bitstrap-tooltip component",{
	beforeEach: function () {
		template = can.stache('<bitstrap-tooltip></bitstrap-tooltip>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-tooltip',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function(assert) {
	assert.equal( $component.length, 1, 'Component rendered');
	assert.equal( $component.find('.tooltip').is(':visible'), false, 'tooltip is hidden' );
});

QUnit.test('toggling', function(assert) {
	assert.equal( $component.find('.tooltip').is(':visible'), false, 'tooltip is hidden' );
	$component.find('.tooltip-trigger').trigger('mouseover');
	
	assert.equal( $component.find('.tooltip').is(':visible'), true, 'tooltip is visible' );
});
