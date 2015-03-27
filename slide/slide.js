import can from 'can';
import 'can/map/define/define';
import template from './slide.stache!';
import {converters as conv} from '../utils/component_utils/component_utils';

export default can.Component.extend({
    tag: 'bitstrap-carousel-slide',
    template: template,
    scope: can.Map.extend({
        define: {
            active: {
                value: false,
                set: conv.as_boolean
            }
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
            if (!this.element) return;

            if(this.scope.attr('active')) {
                this.element.addClass('active');
            } else {
                this.element.removeClass('active');
            }
        }
    }
});
