export var converters = {
    as_boolean: val => typeof val === "string" || val,
    as_number: val => +val
};

export function makeElementMethod(method) {
    return function() {
        method.apply(this, arguments);
    };
}
