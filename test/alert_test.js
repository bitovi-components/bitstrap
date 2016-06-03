import QUnit from "steal-qunit";
import ViewModel from "alert/alert";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm, template;

QUnit.module("bitstrap-alert view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function () {
	equal( vm.attr('severity'), 'info', 'Severity defaults to "info"');
	equal( vm.attr('isDismissable'), true, 'isDismissable defaults to true');
	equal( vm.attr('visible'), false, 'Visible defaults to false');
	equal( vm.attr('alertBody'), '', 'alertBody defaults to empty string');
	equal( vm.attr('useContentTag'), true, 'useContentTag defaults to true');
	equal( vm.attr('alertTitle'), '', 'alertTitle defaults to empty string');
});

QUnit.test('toggling', function () {
	equal( vm.attr('visible'), false, 'Visible defaults to false');
	vm.toggle();
	equal( vm.attr('visible'), true, 'Visible updates to true');
});

QUnit.test('updating', function () {
	equal( vm.attr('alertBody'), '', 'alertBody defaults to empty string');
	equal( vm.attr('useContentTag'), true, 'useContentTag defaults to true');
	vm.update("TEST");
	equal( vm.attr('alertBody').trim(), 'TEST', 'alertBody udpates');
	equal( vm.attr('useContentTag'), false, 'useContentTag is now false');
});

QUnit.module("bitstrap-alert component",{
	beforeEach: function () {
		template = can.stache('<bitstrap-alert>HELLO</bitstrap-alert>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-alert',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function () {
	equal( $component.length, 1, 'Component rendered');
	equal( $component.find('.alert').is(':visible'), false, 'alert is hidden' );
});

QUnit.test('toggling', function () {
	equal( $component.find('.alert').is(':visible'), false, 'alert is hidden' );
	vm.toggle();
	
	equal( $component.find('.alert').is(':visible'), true, 'tooltip is visible' );
});

QUnit.test('updating', function () {
	vm.toggle();
	equal( $component.find('.alert-body').text().trim(), 'HELLO', 'Alert has correct content.' );
	vm.update('WORLD');
	equal( $component.find('.alert-body').text().trim(), 'WORLD', 'Alert updates with new content.' );
});
