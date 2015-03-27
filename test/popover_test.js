import QUnit from "steal-qunit";
import ViewModel from "popover/popover";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm, template;

QUnit.module("bitstrap-popover view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function () {
	equal( vm.attr('visible'), false, 'Visible defaults to false');
	equal( vm.attr('popoverId').indexOf('popover'), 0, 'Default Id starts with popover');
	equal( vm.attr('placement'), 'top', 'Default placement is top');
	equal( vm.attr('triggerSelector'), '', 'Default trigger selector is blank.');
});

QUnit.test('toggling', function () {
	equal( vm.attr('visible'), false, 'Visible defaults to false');
	vm.toggle();
	equal( vm.attr('visible'), true, 'Visible updates to true');
	vm.toggle(true);
	equal( vm.attr('visible'), true, 'Visible stays as true');
});

QUnit.module("bitstrap-popover component",{
	beforeEach: function () {
		template = can.stache('<button class="trigger"></button><bitstrap-popover trigger-selector=".trigger"></bitstrap-popover>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-popover',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function () {
	equal( $component.length, 1, 'Component rendered');
	equal( $component.find('.popover').is(':visible'), false, 'popover is hidden' );
});

QUnit.test('toggling', function () {
	equal( $component.find('.popover').is(':visible'), false, 'popover is hidden' );
	vm.attr('visible', true);
	
	equal( $component.find('.popover').is(':visible'), true, 'popover is visible' );
});
