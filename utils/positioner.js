import can from 'can';

var $ = can.$;
/**
 * @description Takes the target's height and width along with it's top and left positioning to align it based on
 * a provided placement
 * @param {jQuery selector} parentElement The parent element selector.
 * @param {string} trigger The target element selector.
 * @param {string} target The static element selector.
 * @param {string} placement Where target will appear in relation to trigger..
 * @param {object} buffer The buffer object contains a set of numbers to use in the final offset calculation.
 */

export default can.Control.extend({
    
    /**
     * @function positioner.init init
     * @description Init event. Sets up defaults for buffer.
     */
    init () {
        this.options.buffer = can.extend(this.defaultBuffer, this.options.buffer);
    },
    
    /**
     * @function positioner.defaultBuffer defaultBuffer
     * @description The default settings for the buffer.
     */
    defaultBuffer: {bottom:0,left:0, right:0, top:0},
    
    /**
     * @function positioner.getDimensions getDimensions
     * @description Retrives dimensions of the target element.
     * @param {jQuery Selector} $el The target element selector.
     */
    getDimensions ( $el ) {
        var resp = {height: null, width: null};
        resp.height = $el.outerHeight();
        resp.width = $el.outerWidth();
        
        return resp;
    },
    
    /**
     * @function positioner.getOffset getOffset
     * @description Gets the top and left offset of the target element.
     * @param {jQuery Selector} $el The target element selector.
     */
    getOffset ($el) {
        return can.extend({left:null, top: null}, $el.offset() );
    },
    
    /**
     * @function positioner.repositionTarget repositionTarget
     * @description Initiates the repositioning process.
     */
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
    
    /**
     * @function positioner.viewModel.reposition reposition
     * @description Binds to the custom event of `repostion`. Executes the repositioning method.
     */
    ' reposition' () {
        this.repositionTarget();
        
    },
    
    /**
     * @function positioner.updateOffset updateOffset
     * @description Updates the offset (the top and left) of the target element.
     * @param {jQuery Selector} $target The target element selector.
     * @param {object|can.Map} offset The new offset for the target element.
     */
    updateOffset ($target, offset) {
        $target.offset(offset);
        $target.css('display', 'block')
    },
    
    /**
     * @function positioner.calculateOffset calculateOffset
     * @description Calculates the positioning of target in relation to trigger.
     * @param {string} placement Changes calculation based on top, left, right, bottom.
     * @param {jQuery Selector} $target The target element selector.
     * @param {jQuery Selector} $trigger The trigger element selector.
     * @param {object|can.Map} buffer The buffer object, will add these values to the final offset.
     * @return {object} offset The calculated offset of the target element.
     */
    calculateOffset (placement, $trigger, $target, buffer ) {
        var offset = {top:null, left:null};
        
        //defaults to bottom
        offset.top = $trigger.top + $trigger.height + buffer.bottom;
        offset.left = $trigger.left + $trigger.width / 2 - $target.width / 2;
        
        if (placement === 'left') {
            offset.top = $trigger.top + $trigger.height / 2  - $target.height / 2;
            offset.left = $trigger.left - $target.width - buffer.left;
        }
        
        if (placement === 'right') {
            offset.top = $trigger.top + $trigger.height / 2  - $target.height / 2;
            offset.left = $trigger.left + $trigger.width + buffer.right;
        }
        
        if (placement === 'top') {
            offset.top = $trigger.top - $target.height - buffer.top;
            offset.left = $trigger.left + $trigger.width / 2 - $target.width / 2;
            
        }
        
        return offset;
    }

});
