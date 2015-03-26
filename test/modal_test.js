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

QUnit.test("basics", function(){
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
