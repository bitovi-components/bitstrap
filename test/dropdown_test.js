import QUnit from "steal-qunit";
import ViewModel from "dropdown/dropdown";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $component, vm, template;

QUnit.module("bit-strap-dropdown view model", {
	beforeEach: function () {
		vm = new ViewModel({});
	}
});

QUnit.test("basics", function(assert) {
	assert.equal( vm.attr('items').length, 0, 'Items is empty array');
	assert.equal( vm.attr('visible'), false, 'Visible defaults to false');
	assert.equal( vm.attr('buttonName'), '', 'Button');
	assert.equal( vm.attr('dropdownId').indexOf('dropdown'), 0, 'Dropdow ID default is prefixed with dropdown');
	assert.equal( vm.attr('alignment'),'left', 'Alignment defualts to left.');
});


QUnit.module("bit-strap-dropdown component",{
	beforeEach: function () {
		template = can.stache('<bitstrap-dropdown items="{items}" button-label="test"></bitstrap-dropdown>');
		$('#qunit-fixture').append(template({}));
		$component = $('bitstrap-dropdown',$('#qunit-fixture') );
		vm = can.viewModel($component);
		
		var items = new can.List([{label:'test'},{label:'hello'}]);
		
		vm.attr('items', items);
	}
});

QUnit.test("basics", function(assert) {
	assert.equal( $component.find('.dropdown').is(':visible'), true, 'Dropdown container is visible' );
	assert.equal( $component.find('.dropdown-toggle').is(':visible'), true, 'Dropdown button is visible' );
	assert.equal( $component.find('.dropdown-menu').is(':visible'), false, 'Dropdown menu options are not visible' );
});

QUnit.test('toggle', function(assert) {
	assert.equal( $component.find('.dropdown-menu').is(':visible'), false, 'Dropdown menu options are hidden' );
	$component.find('.dropdown-toggle').click();
	assert.equal( $component.find('.dropdown-menu').is(':visible'), true, 'Dropdown menu options is visible' );
	assert.equal( $component.find('.dropdown-menu-item').length, 2, 'Dropdown menu renders all items' );
	assert.equal( $component.find('.dropdown-menu-item').eq(0).text(), 'test', 'Dropdown menu item renders text' );
});
