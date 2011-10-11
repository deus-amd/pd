// ## [Github Repo](https://github.com/Raynos/pd)

// pd converts all the values of the properties into propertydescriptors
var pd = function _pd(obj) {
    var keys = Object.getOwnPropertyNames(obj);
    var o = {};
    keys.forEach(function _each(key) {
        var pd = Object.getOwnPropertyDescriptor(obj, key);
        o[key] = pd;
    });
    return o;
};

// Extend natives. This implements the getOwnPropertyDescriptors as defined in es.next
pd.extendNatives = function _extendNatives() {
    if (!Object.getOwnPropertyDescriptors) {
        Object.getOwnPropertyDescriptors = pd;
    }
};

// DEPRECATED
// merges merges all objects passed in. The later objects take preference in clashes
pd.merge = function _merge() {
    var o = {};
    for (var k in arguments) {
        var obj = arguments[k];
        Object.keys(obj).forEach(function _each(key) {
            o[key] = obj[key];
        });
    }
    return o;
};

// DEPRECATED
// object is an Object.create shortcut. Consider it an improved object literal.
pd.object = function _obj(o) {
    return Object.create(Object.prototype, pd(o));
};

if ("undefined" !== typeof module && module.exports) {
    module.exports = pd;
} else {
    window.pd = pd;
}