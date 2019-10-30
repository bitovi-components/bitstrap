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

QUnit.test("basics", function(assert) {
	assert.equal( vm.attr('severity'), 'info', 'Severity defaults to "info"');
	assert.equal( vm.attr('isDismissable'), true, 'isDismissable defaults to true');
	assert.equal( vm.attr('visible'), false, 'Visible defaults to false');
	assert.equal( vm.attr('alertBody'), '', 'alertBody defaults to empty string');
	assert.equal( vm.attr('useContentTag'), true, 'useContentTag defaults to true');
	assert.equal( vm.attr('alertTitle'), '', 'alertTitle defaults to empty string');
});

QUnit.test('toggling', function(assert) {
	assert.equal( vm.attr('visible'), false, 'Visible defaults to false');
	vm.toggle();
	assert.equal( vm.attr('visible'), true, 'Visible updates to true');
});

QUnit.test('updating', function(assert) {
	assert.equal( vm.attr('alertBody'), '', 'alertBody defaults to empty string');
	assert.equal( vm.attr('useContentTag'), true, 'useContentTag defaults to true');
	vm.update("TEST");
	assert.equal( vm.attr('alertBody').trim(), 'TEST', 'alertBody udpates');
	assert.equal( vm.attr('useContentTag'), false, 'useContentTag is now false');
});

QUnit.module("bitstrap-alert component",{
	beforeEach: function () {
		template = can.stache('<bitstrap-alert>HELLO</bitstrap-alert>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-alert',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function(assert) {
	assert.equal( $component.length, 1, 'Component rendered');
	assert.equal( $component.find('.alert').is(':visible'), false, 'alert is hidden' );
});

QUnit.test('toggling', function(assert) {
	assert.equal( $component.find('.alert').is(':visible'), false, 'alert is hidden' );
	vm.toggle();
	
	assert.equal( $component.find('.alert').is(':visible'), true, 'tooltip is visible' );
});

QUnit.test('updating', function(assert) {
	vm.toggle();
	assert.equal( $component.find('.alert-body').text().trim(), 'HELLO', 'Alert has correct content.' );
	vm.update('WORLD');
	assert.equal( $component.find('.alert-body').text().trim(), 'WORLD', 'Alert updates with new content.' );
});
