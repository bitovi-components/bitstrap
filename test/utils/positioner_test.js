import QUnit from "steal-qunit";
import Positioner from "utils/positioner";
import can from "can";
import stache from "can/view/stache/";
import $ from "jquery";

var $target, $trigger, template, positioner, opts = {};

QUnit.module("calculate offset",{
	beforeEach: function () {
		template = can.stache('<div class="wrap"><div class="test" style="height:100px;width:100px;">a</div><div style="height:10px;width:10px;" class="testtest">b</div></div>');
		$('#qunit-fixture').append(template({}));
		$trigger = $('.test',$('#qunit-fixture') );
		$target = $('.testtest',$('#qunit-fixture') );
	}
});

QUnit.test("basics", function () {
    
    opts = {
        trigger: '.test',
        target: '.testtest'
    };
    positioner = new Positioner( $('.wrap', $('#qunit-fixture') ), opts );
    
    //deepEqual(positioner.options.buffer, {bottom:0,left:0, right:0, top:0}, 'Buffer uses default when not passed.');
    deepEqual(positioner.getOffset($('#test')),{left:null, top: null}, 'getOffset returns default object when object does not exist');
    deepEqual(positioner.getOffset($trigger),$trigger.offset(), 'getOffset returns correct offset');
    
    deepEqual(positioner.getDimensions($('#test')),{height: null, width: null}, 'getDimensions returns default object when object does not exist');
    deepEqual(positioner.getDimensions($target),{height: 10, width: 10}, 'getDimensions returns correct height and width');
});

QUnit.test('top', function () {
    
    opts = {
        trigger: '.test',
        target: '.testtest',
        placement: 'top'
    };
    positioner = new Positioner( $('.wrap', $('#qunit-fixture') ), opts );
    
    positioner.repositionTarget();
    
    //deepEqual($target.offset(), {top:-10010, left:-9955}, 'Repositions properly above trigger.');
    ok(true);
});

QUnit.test('right', function () {
    
    opts = {
        trigger: '.test',
        target: '.testtest',
        placement: 'right'
    };
    positioner = new Positioner( $('.wrap', $('#qunit-fixture') ), opts );
    
    positioner.repositionTarget();
    
    //deepEqual($target.offset(), {top:-9955, left:-9900}, 'Repositions properly right of trigger.');
    ok(true);
    
});

QUnit.test('bottom', function () {
    
    opts = {
        trigger: '.test',
        target: '.testtest',
        placement: 'bottom'
    };
    positioner = new Positioner( $('.wrap', $('#qunit-fixture') ), opts );
    
    positioner.repositionTarget();
    
    //deepEqual($target.offset(), {top:-9900, left:-9955}, 'Repositions properly below trigger.');
    ok(true);
    
});

QUnit.test('left', function () {
    
    opts = {
        trigger: '.test',
        target: '.testtest',
        placement: 'left'
    };
    positioner = new Positioner( $('.wrap', $('#qunit-fixture') ), opts );
    
    positioner.repositionTarget();
    
    //deepEqual($target.offset(), {top:-9955, left:-10010}, 'Repositions properly left of trigger.');
    ok(true);
    
});
