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

QUnit.test('size converter', function(){
	vm.attr('size', 'large');
	QUnit.equal(vm.attr('size'), 'lg', 'large => lg');
	vm.attr('size', 'small');
	QUnit.equal(vm.attr('size'), 'sm', 'small => s');
	vm.attr('size', 'extra-small');
	QUnit.equal(vm.attr('size'), 'xs', 'extra-small => xs');
});

QUnit.test('Only one type true at a time', function(){
	QUnit.ok(vm.attr('default'), 'default');
	vm.attr('type', 'success');
	QUnit.ok(!vm.attr('default'), 'default is false');
	QUnit.ok(vm.attr('success'), 'success is false');
});

QUnit.test('Unrecognized type', function(){
	vm.attr('type', 'good');
	QUnit.equal(vm.attr('type'), 'default', 'returns default');
});

var template = can.stache('<bitstrap-button></bitstrap-button>');

QUnit.module('bitstrap-button component',{
	setup: function(){
		$('#qunit-fixture').append(template());
		component = $('#qunit-fixture').find('bitstrap-button');
		vm = can.viewModel(component);
	}
});

QUnit.test('tag types', function(){
	QUnit.ok(component.find('.btn').is('button'), 'renders a <button> by default');
	vm.attr('href', '#');
	QUnit.ok(component.find('.btn').is('a'), 'adding an href attribute renders an <a>');
	vm.removeAttr('href');
	vm.attr('value', 'Button');
	QUnit.ok(component.find('.btn').is('input'), 'adding a value attribute renders an <input>');
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
		QUnit.equal(submitted, false, 'button did not submit the form');
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
		QUnit.equal(submitted, true, 'button submitted the form');
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
		QUnit.equal(submitted, false, 'button did not submit the form');
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
		QUnit.equal(submitted, true, 'button submitted the form');
		done();
	}, 100);
});
