import can from 'can';
import 'can/map/define/define';

export default can.Map.extend({
    define: {
        severity: {
            value: 'warning',
            type: 'string',
            set: function (val) {
                var allowed = ['warning','danger'],
                    isValid = allowed.indexOf(val);
                
                return isValid ? val: allowed[0];
            }
        },
        isDismissable: {
            value: true,
            type: 'boolean'
        },
        visible: {
            value: false,
            type: 'boolean'
        },
        alertBody: {
            value: '',
            type: 'string'
        },
        useContentTag: {
            value: true,
            type: 'boolean'
        },
        alertTitle: {
            value: '',
            type: 'string'
        }
    },
    toggle: function () {
        this.attr('visible', !this.attr('visible') );
    },
    update: function (newContent) {
        this.attr('useContentTag', false);
        this.attr('alertBody', newContent);
    }
});
