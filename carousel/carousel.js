import can from 'can';
import 'can/map/define/define';
import './carousel.less!';
import template from './carousel.stache!';
import {converters as conv} from '../utils/component_utils/component_utils';

export default can.Component.extend({
    tag: 'bitstrap-carousel',
    template: template,
    scope: can.Map.extend({
        define: {
            currentSlide: { value: null },
            slide: { value: 1, type: conv.as_number },
            slides: { value: {} },
            slideCount: { value: 0, type: conv.as_number },
            transitionDuration: {
                value: 600,
                type: conv.as_number,
                get: function(val) {
                    // We don't want the transition duration to be greater than the interval
                    return Math.min(val, this.attr('interval'));
                }
            },
            pause: {
                value: false,
                set: function(newVal) {
                    if (newVal) {
                        window.clearTimeout(this.attr('timeout'));
                    } else {
                        this.setTimeout();
                    }
                    return newVal;
                }
            },
            interval: {
                value: 5000,
                type: conv.as_number
            },
            pauseOn: { value: 'hover' },
            nowrap: { value: false, type: conv.as_boolean},
            nokeyboard: { value: false, type: conv.as_boolean}
        },
        next: function() {
            var myLength = this.attr('slides').length;
            var mySlide = this.attr('slide');

            if(!this.attr('nowrap')) {
                this.attr('slide', mySlide == myLength ? 1 : mySlide + 1);
            } else {
                this.attr('slide', mySlide == myLength ? myLength : mySlide + 1);
            }

            if(!this.attr('pause')) {
                this.setTimeout();
            }
        },
        prev: function() {
            var myLength = this.attr('slides').length;
            var mySlide = this.attr('slide');

            this.attr('slide', mySlide == 1 ? myLength : mySlide - 1);
            if(!this.attr('pause')) {
                this.setTimeout();
            }
        },
        setTimeout: function() {
            if (this.attr('timeout')) {
                window.clearTimeout(this.attr('timeout'));
            }
            this.attr('timeout',
                setTimeout(() => {
                    this.attr('timeout', null);
                    this.next();
                    this.setTimeout();
                }, this.attr('interval'))
            );
        },
        onMouseenter: function() {
            if(this.attr('pauseOn') == 'hover') {
                this.attr('pause', true);
            }
        },
        onMouseleave: function() {
            if (this.attr('pauseOn') == 'hover') {
                this.attr('pause', false);
            }
        },
        onIndicatorClick: function(map, elem) {
            this.attr('slide', (can.$(elem).data('ndx')));
        }
    }),
    events: {
        ' keydown': function (elem, evt) {
            if(!this.scope.attr('nokeyboard')) {
                if(evt.keyCode === 37) {
                    this.scope.prev();
                } else if(evt.keyCode === 39) {
                    this.scope.next();
                }
            }
        },
        '.carousel-control click': function(elem) {
            can.$(elem).focus();
        },
        'bitstrap-carousel-slide transitioned': function(elem, evt) {
            can.$(elem).attr('transition')
        },
        'bitstrap-carousel-slide attached': function() {
            this.scope.attr('slideCount', this.scope.attr('slideCount') + 1);
            if (!this.scope.attr('currentSlide')) {
                this.element && this.element.find('bitstrap-carousel-slide').each((ndx, slide) => {
                    var slideScope = can.$(slide).scope();
                    var thisSlide = ndx + 1;

                    slideScope.attr('transitionDuration', this.scope.attr('transitionDuration'));
                    slideScope.attr('slideNumber', thisSlide);
                    if (slideScope && slideScope.attr('active')) {
                        this.scope.attr('currentSlide', slideScope);
                        this.scope.attr('slide', thisSlide);
                    }
                });
            }
            this.scope.setTimeout();
        },
        'bitstrap-carousel-slide detached': function() {
            this.scope.attr('slideCount', this.scope.attr('slideCount') - 1);
        },
        '{scope} slideCount': function() {
            var slides = [];
            this.element && this.element.find('bitstrap-carousel-slide').each((i, slide) => {
                var slideScope = can.$(slide).scope();
                slides.push(slideScope);
            });
            this.scope.attr('slides', slides);
        },
        '{scope} slide': 'updateStep',
        updateStep: function(blah1, blah2, newVal, oldVal) {

            // If there is no change, return early
            if (newVal === oldVal) return;

            var newSlide;
            if (newVal) {
                newSlide = this.scope.attr('slides').attr(newVal - 1);
            }

            var direction = newVal > oldVal ? 'left' : 'right';
            this.scope.attr('currentSlide') && this.scope.attr('currentSlide').attr('direction', direction);
            //newSlide && newSlide.attr('direction', direction);

            this.scope.attr('currentSlide') && this.scope.attr('currentSlide').attr('active', false);
            newSlide && newSlide.attr('active', true);

            // Save off the currentSlide for later
            this.scope.attr('currentSlide', newSlide);
        }
    }
});
