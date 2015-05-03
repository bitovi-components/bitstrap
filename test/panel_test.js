import QUnit from "steal-qunit";
import ViewModel from "panel/panel";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm, template;

QUnit.module("bitstrap-panel view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function () {
	equal( vm.attr('panelTitle'), '', 'Title defaults to empty string');
	equal( vm.attr('panelFooter'), '', 'Footer defaults to empty string');
	equal( vm.attr('classes'), 'panel-default', 'Panel class list defaults to \'panel-default\'');
});

QUnit.module("bitstrap-panel component",{
	beforeEach: function () {
		template = can.stache('<bitstrap-panel panel-title="HEYO" panel-footer="AUSTIN" classes="panel-warning">TEST</bitstrap-panel>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-panel',$('#qunit-fixture') );
		vm = can.viewModel($component);
	}
});

QUnit.test('renders', function () {
	equal( $component.length, 1, 'Component rendered');
	equal( $component.find('.panel-body').is(':visible'), true, 'Panel body is visible' );
	equal( $component.find('.panel-body').text().trim(), 'TEST', 'Panel body content renders.' );
	equal( $component.find('.panel-heading').text().trim(), 'HEYO', 'Panel header content renders.' );
	equal( $component.find('.panel-footer').text(), 'AUSTIN', 'Panel footer content renders.' );
	equal( $component.find('.panel').hasClass('panel-warning'), true, 'Panel gets correct contextual class.' );
});
