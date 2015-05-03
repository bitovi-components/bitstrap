import QUnit from "steal-qunit";
import ViewModel from "modal/modal";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm, template;

QUnit.module("bitstrap-modal view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function () {
	equal( vm.attr('visible'), false, 'Visible defaults to false');
	equal( vm.attr('modalTitle'), '', 'Title defaults to empty string.');
	equal( vm.attr('modalSize'), '', 'Size defaults to empty string.');
	equal( vm.attr('isModal'), true, 'Is modal by default.');
	equal( vm.attr('isHidden'), true, 'isHidden flips visible');
});


QUnit.module("bitstrap-modal component",{
	beforeEach: function () {
		template = can.stache('<bitstrap-modal></bitstrap-modal>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-modal',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function () {
	equal( $component.length, 1, 'Component rendered');
	equal( $component.find('.modal').is(':visible'), false, 'Modal is hidden' );
});

QUnit.test('toggles', function () {
	vm.attr('visible', true);
	equal( $component.find('.modal').is(':visible'), true, 'Modal is visible' );
	equal( $component.find('.modal-backdrop').is(':visible'), true, 'Modal is visible' );
	equal( $('body').hasClass('modal-open'), true, 'Class added to body' );
	vm.attr('visible', false);
	equal( $component.find('.modal').is(':visible'), false, 'Modal is hidden' );
	equal( $component.find('.modal-backdrop').is(':visible'), false, 'Modal is visible' );
	equal( $('body').hasClass('modal-open'), false, 'Class removed from body' );
});

QUnit.test('header', function () {
	equal( $component.find('.modal-header').length, 0, 'Header is not rendered' );
	
	vm.attr('modalTitle', 'test');
	vm.attr('visible', true);
	equal( $component.find('.modal-header').length, 1, 'Header is rendered' );
	equal( $component.find('.modal-header').is(':visible'), true, 'Header is visible' );
	equal( $component.find('.modal-title').text(), 'test', 'Modal title is rendered' );
});
