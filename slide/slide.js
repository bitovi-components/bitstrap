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
            },
            transitionDuration: {
                value: 600,
                type: conv.as_number
            },
            direction: {
                value: null
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

            var direction = this.scope.attr('direction');
            var position = direction === 'left' ? 'next' : 'prev';

            // Add the direction that the carousel needs to move
            //this.element.addClass(direction);

            if(this.scope.attr('active')) {
                this.element.addClass('active');
                // TODO : implement transition
                //this.element.addClass(position);
                //setTimeout(() => {
                //    this.element.addClass('active').removeClass(direction);
                //}, this.scope.attr('transitionDuration'));
            } else {
                this.element.removeClass('active');
                //this.element.addClass(direction);
                //setTimeout(() => {
                //    this.element.removeClass(['active', position, direction].join(' '));
                //}, this.scope.attr('transitionDuration'));
            }
            this.scope.attr('direction', null);
        }
    }
});
