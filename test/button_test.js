import QUnit from 'steal-qunit';
import ViewModel from 'button/button';
import can from 'can';
import stache from 'can/view/stache/';
import $ from 'jquery';

var vm, component;

QUnit.module('bitstrap-button view model', {
	beforeEach: function(){
		vm = new ViewModel({});
	}
});

QUnit.test('size converter', function(assert) {
	vm.attr('size', 'large');
	assert.equal(vm.attr('size'), 'lg', 'large => lg');
	vm.attr('size', 'small');
	assert.equal(vm.attr('size'), 'sm', 'small => s');
	vm.attr('size', 'extra-small');
	assert.equal(vm.attr('size'), 'xs', 'extra-small => xs');
});

QUnit.test('Only one type true at a time', function(assert) {
	assert.ok(vm.attr('default'), 'default');
	vm.attr('type', 'success');
	assert.ok(!vm.attr('default'), 'default is false');
	assert.ok(vm.attr('success'), 'success is false');
});

QUnit.test('Unrecognized type', function(assert) {
	vm.attr('type', 'good');
	assert.equal(vm.attr('type'), 'default', 'returns default');
});

var template = can.stache('<bitstrap-button></bitstrap-button>');

QUnit.module('bitstrap-button component',{
	beforeEach: function(assert) {
		$('#qunit-fixture').append(template());
		component = $('#qunit-fixture').find('bitstrap-button');
		vm = can.viewModel(component);
	}
});

QUnit.test('tag types', function(assert) {
	assert.ok(component.find('.btn').is('button'), 'renders a <button> by default');
	vm.attr('href', '#');
	assert.ok(component.find('.btn').is('a'), 'adding an href attribute renders an <a>');
	vm.removeAttr('href');
	vm.attr('value', 'Button');
	assert.ok(component.find('.btn').is('input'), 'adding a value attribute renders an <input>');
});

QUnit.test('<button> does not submit by default', function(assert){
	$('#qunit-fixture').html(can.stache('<form><bitstrap-button></bitstrap-button></form>')());
	var done = assert.async();
	var submitted = false;
	$('#qunit-fixture').find('form').on('submit', function(ev){
		ev.preventDefault();
		submitted = true;
	});
	$('#qunit-fixture').find('bitstrap-button .btn').click();
	setTimeout(function(){
		assert.equal(submitted, false, 'button did not submit the form');
		done();
	}, 100);
});

QUnit.test('<button> submits', function(assert){
	$('#qunit-fixture').html(can.stache('<form><bitstrap-button submit></bitstrap-button></form>')());
	var done = assert.async();
	var submitted = false;
	$('#qunit-fixture').find('form').on('submit', function(ev){
		ev.preventDefault();
		submitted = true;
	});
	$('#qunit-fixture').find('bitstrap-button .btn').click();
	setTimeout(function(){
		assert.equal(submitted, true, 'button submitted the form');
		done();
	}, 100);
});

QUnit.test('<input> does not submit by default', function(assert){
	$('#qunit-fixture').html(can.stache('<form><bitstrap-button value="Submit"></bitstrap-button></form>')());
	var done = assert.async();
	var submitted = false;
	$('#qunit-fixture').find('form').on('submit', function(ev){
		ev.preventDefault();
		submitted = true;
	});
	$('#qunit-fixture').find('bitstrap-button .btn').click();
	setTimeout(function(){
		assert.equal(submitted, false, 'button did not submit the form');
		done();
	}, 100);
});

QUnit.test('<input> submits', function(assert){
	$('#qunit-fixture').html(can.stache('<form><bitstrap-button value="Submit" submit></bitstrap-button></form>')());
	var done = assert.async();
	var submitted = false;
	$('#qunit-fixture').find('form').on('submit', function(ev){
		ev.preventDefault();
		submitted = true;
	});
	$('#qunit-fixture').find('bitstrap-button .btn').click();
	setTimeout(function(){
		assert.equal(submitted, true, 'button submitted the form');
		done();
	}, 100);
});
