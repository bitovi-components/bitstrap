/**
* @module {can.Map} dropdown/ViewModel View Model
* @parent dropdown
* @author Juan Orozco
*
* @description View model of the [dropdown] component.
*
* @signature
* var ViewModel = can.Map.extend({});
*
*/

//Deps
import can from 'can';
import itemTemplate from './itemTemplate.stache!';
import buttonTemplate from './buttonTemplate.stache!';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        
        /**
         * @property {String} dropdown.scope.items items
         * @description The dropdown items.
         * @option {String} Default is empty array.
         */
        items: {
            value:[]
        },

        /**
         * @property {boolean} dropdown.scope.visible visible
         * @description Visibility of dropdown items.
         * @option {boolean} Default is `false`.
         */
        visible: {
            value: false,
            type: 'boolean'
        },

        /**
         * @property {string} dropdown.scope.buttonName buttonName
         * @description The trigger label.
         * @option {string} Default is empty string.
         */
        buttonName: {
            value: '',
            type: 'string'
        },
        
        /**
         * @property {function} dropdown.scope.itemRenderer itemRenderer
         * @description Returns custom template renderer.
         * @option {function} Template renderer.
         */
        itemRenderer: {
            value: function () {
                return itemTemplate;
            }
        },
        
        /**
         * @property {function} dropdown.scope.buttonRenderer buttonRenderer
         * @description Returns custom template renderer.
         * @option {function} Template renderer.
         */
        buttonRenderer: {
            value: function () {
                return buttonTemplate;
            }
        },

        /**
         * @property {string} dropdown.scope.dropdownId dropdownId
         * @description The unqiue dropdown id.
         * @option {string} Default is `dropdown<random number>`.
         */
        dropdownId: {
            value: function () {
                return 'dropdown' + Math.floor( Math.random() * 1000000 );
            },
            type: 'string'
        },
        
        /**
         * @property {String} dropdown.scope.alignment alignment
         * @description The alignment of the dropdown in relation to the trigger.
         * @option {String} Default is 'left'.
         */
        alignment: {
            value: 'left',
            type: function (val) {
                return (val === 'left' || val === 'right') ? val : 'left';
            }
        }
    },

    /**
     * @function dropdown.scope.toggleDropdown toggleDropdown
     * @description Toggles the visibility of dropdown.
     */
    toggleDropdown: function () {
        this.attr('visible', !this.attr('visible'));
    },

    /**
     * @function dropdown.scope.getItem getItem
     * @description Wraps a partial renderer and passes required contexts to renderer.
     * @param {object} ctx The current template context.
     * @param {object} contexts The stack of contexts.
     * @return {DocumentFragment} Rendered template.
     */
    getItem: function (context, contexts) {
        var renderer = this.attr('itemRenderer');
        return renderer(contexts);
    },

    /**
     * @function dropdown.scope.getButton getButton
     * @description Wraps a partial renderer and passes required contexts to renderer.
     * @param {object} ctx The current template context.
     * @param {object} contexts The stack of contexts.
     * @return {DocumentFragment} Rendered template.
     */
    getButton: function (context, contexts) {
        var renderer = this.attr('buttonRenderer');
        return renderer(contexts);
    }

});
