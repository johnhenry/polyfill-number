/*!
 * Polyfill for Numbers
 * Copyright(c) 2013 John Henry
 * MIT Licensed
 *      
 */


(function(global,bindToPrototype){
////////////
//Setup
////////////
    var OBJ = global.Number;//The constructor object
    var prototype = global.Number.prototype;//The prototype of instances of the constructor object

    //Methodize -- Attaches functions to objects as methods
    //Note:
        //Here, "ConstructorObject.FunctionName(objectInstance,parameters...)" and "objectInstance.functionName(parameters...)" are generally equivalent.
        //This allows for the use of both Object-Oriented and Functional paradigms
        //Being aware of this should make the source code a bit less confusing
    var methodize = function(target,method,method_name,overwrite){
        if(!target[method_name] || overwrite && bindToPrototype !== false)
        target[method_name] = function(){
            return method.apply(this,[this].concat(Array.prototype.slice.call(arguments,0)));
        }
        return target;
    }
//Placeholder

})(typeof global === 'undefined'? window : global,true)