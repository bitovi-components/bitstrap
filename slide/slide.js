import can from 'can';
import 'can/map/define/define';
import template from './slide.stache!';
import {converters as conv} from '../utils/component_utils/component_utils';

export default can.Component.extend({
    tag: 'bitstrap-carousel-slide',
    template: template,
    scope: can.Map.extend({
        define: {
            active: { value: false, set: conv.as_boolean },
            transitionDuration: { value: 600, type: conv.as_number}
        }
    }),
    events: {
        // Inserted and removed events don't bubble
        inserted: function(elem) {
            can.$(elem).addClass('item');
            this.checkActive(arguments);
            this.element.trigger('attached');
        },
        removed: function() {
            this.element.trigger('detached');
        },
        '{scope} active': 'checkActive',
        checkActive: function() {
            if(this.scope.attr('active')) {
                this.element && this.element.addClass('left next');
                setTimeout(() => {
                    this.element && this.element.removeClass('left next').addClass('active');
                }, this.scope.attr('transitionDuration'));
            } else {
                this.element && this.element.addClass('left');
                setTimeout(() => {
                    this.element && this.element.removeClass('left active');
                }, this.scope.attr('transitionDuration'));
            }
        }
    }
});
