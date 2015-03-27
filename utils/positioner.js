import can from 'can';

var $ = can.$;
/**
 * @description Takes the target's height and width along with it's top and left positioning to align it based on
 * a provided placement
 * TOP, RIGHT, BOTTOM, LEFT
 */


export default can.Control.extend({
    init () {
        console.log(this.options.buffer);
        this.options.buffer = can.extend(this.defaultBuffer, this.options.buffer);
    },
    
    defaultBuffer: {bottom:0,left:0, right:0, top:0},
    
    getDimensions ( $el ) {
        var resp = {height: null, width: null};
        resp.height = $el.outerHeight();
        resp.width = $el.outerWidth();
        
        return resp;
    },
    
    getOffset ($el) {
        return can.extend({left:null, top: null},$el.offset() );
    },
    
    repositionTarget () {
        var trigger, target, offset,
            $trigger = this.element.find(this.options.trigger),
            $target = this.element.find(this.options.target);
            
        trigger = this.getDimensions($trigger);
        trigger = can.extend(trigger, this.getOffset($trigger) );
        
        target = this.getDimensions($target);
        target = can.extend(target, this.getOffset($target) );
        
        offset = this.calculateOffset(this.options.placement, trigger, target, this.options.buffer);
        
        this.updateOffset($target, offset);
    },
    
    ' reposition' () {
        this.repositionTarget();
        
    },
    
    updateOffset (target, offset) {
        target.offset(offset);
        target.css('display', 'block')
    },
    
    calculateOffset (placement, trigger, target, buffer ) {
        var offset = {top:null, left:null};
        
        //defaults to bottom
        offset.top = trigger.top + trigger.height + buffer.bottom;
        offset.left = trigger.left + trigger.width / 2 - target.width / 2;
        
        if (placement === 'left') {
            offset.top = trigger.top + trigger.height / 2  - target.height / 2;
            offset.left = trigger.left - target.width - buffer.left;
        }
        
        if (placement === 'right') {
            offset.top = trigger.top + trigger.height / 2  - target.height / 2;
            offset.left = trigger.left + trigger.width + buffer.right;
        }
        
        if (placement === 'top') {
            offset.top = trigger.top - target.height - buffer.top;
            offset.left = trigger.left + trigger.width / 2 - target.width / 2;
            
        }
        
        return offset;
    }

});
