(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lib/wxapp-redux"), require("lib/redux-logger"), require("lib/redux-thunk"));
	else if(typeof define === 'function' && define.amd)
		define(["lib/wxapp-redux", "lib/redux-logger", "lib/redux-thunk"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lib/wxapp-redux"), require("lib/redux-logger"), require("lib/redux-thunk")) : factory(root["lib/wxapp-redux"], root["lib/redux-logger"], root["lib/redux-thunk"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_41__, __WEBPACK_EXTERNAL_MODULE_42__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "//";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(3);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(13);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(12);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(11);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(2);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(6);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(22);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(20);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(14);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(16);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(21);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// import fetch from 'isomorphic-fetch'

/*
* 1. 请求的类型 type get post
* 2. 请求地址 url
* 3. 是异步的还是同步的 async false true
* 4. 请求内容的格式 contentType
* 5. 传输的数据 data json对象
*
* 6.响应成功处理函数 success function
* 7.响应失败的处理函数 error function
*
* 这些都是动态参数 参数对象 options
* */

// window.$ = {};
// $.ajax = function(options){

//   if(!options || typeof options != 'object'){
//     return false;
//   }
//   var type = options.method || 'get';
//   var url = options.url || location.pathname;
//   var async = true;
//   var contentType = "text/html";
//   var data = options.data || {};
//   var dataStr = ''
//   for(var key in data){
//     dataStr += key+'='+data[key]+'&';
//   }
//   dataStr = dataStr && dataStr.slice(0,-1);

//   /*ajax 编程*/
//   var xhr = new XMLHttpRequest();
//   xhr.open(type,(type=='get'?url+'?'+dataStr:url),async);
//   if(type == 'post'){
//     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//   }

//   /*请求主体*/
//   需要判断请求类型
//   xhr.send(type=='get'?null:dataStr);

//   /*监听响应状态的改变 响应状态*/
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//       /*success*/
//       var data = '';
//       var contentType = xhr.getResponseHeader('Content-Type');
//       if(contentType.indexOf('xml') > -1){
//         data = xhr.responseXML;
//       }else if(contentType.indexOf('json') > -1){
//         data = JSON.parse(xhr.responseText);
//       }else{
//         data = xhr.responseText;
//       }
//       options.success && options.success(data);
//     }else if(xhr.readyState == 4){
//       /*fail*/
//       options.fail && options.fail('you request fail !');
//     }

//   }
// }


/**
  * @param {Obj} options 传入的对象
  */
function http(options) {
  // try{
  //   wx.request(options)
  // }catch(e){
  // const init = {
  //   method:options.method||'GET',
  //   body:JSON.stringify(options.data||'')
  // }
  // fetch(options.url,init)
  //   .then(response => {
  //     if (response.status >= 400) {
  //         throw new Error("Bad response from server");
  //     }
  //     return response.json()
  //   })
  //   .then(options.success||function(response){console.log(response)})
  //   .catch(options.fail||function(response){console.log(response)})
  // return this
  // }
  // if(typeof wx ==='object'){
  wx.request(options);
  // }else{
  // fetch(options)
  // }
}
// http.prototype.request = typeof wx==="undefined"?fetch:wx.request//这个是传进来的，什么环境下传入它对应的request方法


exports.default = http;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(2);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(3);

var _isPlainObject = __webpack_require__(6);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(4);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (process.env.NODE_ENV !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (process.env.NODE_ENV !== 'production') {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(5);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(17);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(18);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(19);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(5);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(15);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(23);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(24);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), __webpack_require__(25)(module)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionType = undefined;
exports.payWay = payWay;
exports.chargeMoney = chargeMoney;
exports.submit = submit;
exports.payStartHttp = payStartHttp;

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

var _util = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionType = exports.ActionType = {
  PAYWAY: "payWay",
  CHANGEMONEY: "changeMoney",
  VERIFY: "verify",
  HTTPREQ: "http_requert",
  HTTPREQ_SUCCESS: "http_requert_success",
  HTTPREQ_ERROR: "http_requert_error"
};

function payWay(payway) {
  return {
    type: ActionType.PAYWAY,
    payload: payway
  };
};

/**
  * 修改输入金额的action
  * @param {String} value  输入的金额
  *
  */
function chargeMoney(value) {
  return function (dispatch) {
    dispatch({
      type: ActionType.CHANGEMONEY,
      payload: value
    });
    return value;
  };
};

var verify = function verify(dispatch, _verify) {
  dispatch({
    type: ActionType.VERIFY,
    payload: _verify
  });
};

/**
  * 提交表单的action
  * @param {func} fundsPayment  零钱支付
  * @param {func} weichatPayment  微信支付
  * @param {func} notMoney  没有足够的零钱的时候
  * @param {func} errMoney  输入的金额有误的时候
  */
function submit(fundsPayment, weichatPayment, notMoney, errMoney) {
  return function (dispatch, getState) {
    var _getState$pay = getState().pay,
        balance = _getState$pay.balance,
        chargeMoney = _getState$pay.chargeMoney,
        payWay = _getState$pay.payWay,
        userName = _getState$pay.userName;

    if (chargeMoney > 0) {
      if (payWay === 'funds') {
        balance >= chargeMoney ? function () {
          verify(dispatch, true);
          fundsPayment(chargeMoney, userName);
        }() : function () {
          notMoney();
          verify(dispatch, false);
        }();
      } else if (payWay === 'weichat') {
        weichatPayment(chargeMoney);
        verify(dispatch, true);
      }
    } else {
      errMoney();
      verify(dispatch, false);
    }
  };
}

// 页面加载时的请求
var payStartREQ = function payStartREQ() {
  return {
    type: ActionType.HTTPREQ
  };
};

var payStartREQ_SUCCESS = function payStartREQ_SUCCESS(response) {
  return {
    type: ActionType.HTTPREQ_SUCCESS,
    payload: response
  };
};

function payStartREQ_ERROR(reqError) {
  return function (dispatch) {
    reqError();
    dispatch({
      type: ActionType.HTTPREQ_ERROR
    });
  };
}

// TODO 暂定为从这里获取用户的userName (或者由上一个页面传入)
/**
  * 页面加载时请求的action
  * @param {func} reqError  请求失败
  *
  */
function payStartHttp(reqError) {
  return function (dispatch) {
    dispatch(payStartREQ());
    return (0, _http2.default)({
      url: '/userdata_start',
      success: function success(response) {
        return dispatch(payStartREQ_SUCCESS({ userName: response.username, ratio: response.balance }));
      },
      fail: function fail(response) {
        return dispatch(payStartREQ_ERROR(reqError));
      }
    });
  };
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomString = randomString;
var string = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function randomString(n) {
    var tmp = "";
    for (var i = 0; i < n; i++) {
        var id = Math.floor(Math.random() * 36);
        tmp += string[id];
    }
    return tmp;
}

// export function orderNum (){
// 	const date = new Date(Date.now())
// 	return date.toLocaleString().replace(/\D/g,'')
// }

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionType = undefined;
exports.Message = Message;
exports.Tel = Tel;
exports.Submit = Submit;

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionType = exports.ActionType = {
  MESSAGE: 'message',
  TEL: 'tel',
  SUBMIT: 'submit',
  SUBMITSUCC: 'submit_success',
  SUBMITFAIL: 'submit_fail'
};

// 输入的留言信息
function Message(value) {
  return {
    type: ActionType.MESSAGE,
    payload: value
  };
}

// 输入的电话号码
function Tel(value) {
  return {
    type: ActionType.TEL,
    payload: value
  };
}

// 提交表单
function Submit(errorMsg, submitSuccess, submitFail) {
  return function (dispatch, getState) {
    var _getState$feedback = getState().feedback,
        message = _getState$feedback.message,
        tel = _getState$feedback.tel;

    var phoneRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

    if (message.trim() === '') {
      errorMsg('请输入建议！');
      return;
    }

    if (!phoneRegExp.test(tel)) {
      errorMsg('请输入正确的手机号！');
      return;
    }

    dispatch({ type: ActionType.SUBMIT });
    (0, _http2.default)({
      url: '',
      data: {
        messages: message,
        phoneNum: tel
      },
      success: function success(response) {
        if (response.success) {
          dispatch({ type: ActionType.SUBMITSUCC });
          submitSuccess();
        } else {
          dispatch({ type: ActionType.SUBMITFAIL });
          submitFail();
        }
      },
      fail: function fail() {
        dispatch({ type: ActionType.SUBMITFAIL });
        submitFail();
      }
    });
  };
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionType = undefined;
exports.showIntroduce = showIntroduce;
exports.showDetails = showDetails;
exports.collect = collect;
exports.payStartHttp = payStartHttp;

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionType = exports.ActionType = {

  SHOWINTRODUCE: "showIntroduce",
  SHOWDETAILS: "showDetails",
  COLLECTION: "collect",
  HTTPREQ: "http_requert",
  HTTPREQ_SUCCESS: "http_requert_success",
  HTTPREQ_ERROR: "http_requert_error"
};

// 展示
function showIntroduce() {
  return {
    type: ActionType.SHOWINTRODUCE
  };
}

function showDetails() {
  return {
    type: ActionType.SHOWDETAILS
  };
}

function collect(suc) {
  return function (dispatch, getState) {
    var _getState$goods = getState().goods,
        collect = _getState$goods.collect,
        httpreq = _getState$goods.httpreq;

    if (!httpreq) {
      dispatch({
        type: ActionType.HTTPREQ
      });
      (0, _http2.default)({
        url: "",
        success: function success(res) {
          dispatch({
            type: ActionType.HTTPREQ_SUCCESS,
            payload: {
              httpreq: false
            }
          });
          if (res.success) {
            suc();
            dispatch({
              type: ActionType.COLLECTION,
              payload: !collect
            });
          }
        },
        fail: function fail(res) {
          dispatch({
            type: ActionType.HTTPREQ_ERROR,
            payload: {
              httpreq: false
            }
          });
        }
      });
    }
  };
};

var payStartREQ_SUCCESS = function payStartREQ_SUCCESS(response) {
  var payloadObj = Object.assign({}, response, {
    httpreq: false
  });
  return {
    type: ActionType.HTTPREQ_SUCCESS,
    payload: payloadObj
  };
};

function payStartREQ_ERROR(reqError) {
  return function (dispatch) {
    reqError();
    dispatch({
      type: ActionType.HTTPREQ_ERROR,
      payload: {
        httpreq: false
      }
    });
  };
}

function payStartHttp(reqError) {
  return function (dispatch) {
    dispatch({
      type: ActionType.HTTPREQ
    });
    return (0, _http2.default)({
      url: '',
      success: function success(response) {
        if (response.success) {
          dispatch(payStartREQ_SUCCESS(response));
        } else {
          dispatch(payStartREQ_ERROR(reqError));
        }
      },
      fail: function fail(response) {
        return dispatch(payStartREQ_ERROR(reqError));
      }
    });
  };
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ActionType = undefined;
exports.keyInput = keyInput;
exports.sendVerify = sendVerify;
exports.submint = submint;
exports.checkedBox = checkedBox;

var _http = __webpack_require__(8);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionType = exports.ActionType = {
	SENDVERIFY: 'sendVerify',
	SETIFO: 'setIfo',
	SETCHECKED: 'setChecked',
	VERIFY: 'verify',
	VERIFYSUCCESS: 'verifySuccess',
	VERIFYFAIL: "verifyFail",
	SUBMIT: 'submit',
	SUBMITSUCCESS: 'submitSuccess',
	SUBMITFAIL: 'submitFail'
};

/**
 * 获得输入内容的action
 * @param keys  	{String} store中要修改的key
 * @param values  	{String} store中要修改的key的value
 *
 */
function keyInput(keys, values) {
	return {
		type: ActionType.SETIFO,
		payload: {
			key: keys,
			value: values
		}
	};
}

/**
 * 发送验证码的action
 * @param verifyError  	{func} 验证码发送失败
 *
 */
function sendVerify(verifyError) {
	return function (dispatch, getState) {
		// 如果按钮的内容是“获取验证码”，则发起请求
		var verifyCode = getState().signup.verifyCode;

		if (verifyCode === '获取验证码') {
			(0, _http2.default)({
				url: '',
				method: 'POST',
				// 请求成功修改按钮内容为倒计时
				success: function success() {
					var setInt = setInterval(function () {
						var msg = '';
						var verifyCode = getState().signup.verifyCode;

						if (verifyCode === '获取验证码') {
							msg = 59;
						} else if (verifyCode <= 1) {
							msg = '获取验证码';
						} else {
							msg = verifyCode - 1;
						}
						dispatch({
							type: ActionType.SENDVERIFY,
							payload: msg
						});
						msg === '获取验证码' ? clearInterval(setInt) : '';
					}, 1000);
				},
				// 请求失败执行传入的失败事件
				fail: verifyError()
			});
		}
	};
}

/**
 * 表单提交按钮的action
 * @param msg 			{Obj} 需要提交的内容
 * @param errorMsg  	{func} 输入信息有误的
 * @param submitSuccess {func} 表单提交成功
 * @param submitError 	{func} 表单提交失败
 *
 */
function submint(msg, errorMsg, submitSuccess, submitError) {
	return function (dispatch, getState) {
		var _getState$signup = getState().signup,
		    phone = _getState$signup.phone,
		    verify = _getState$signup.verify,
		    username = _getState$signup.username,
		    password = _getState$signup.password,
		    passwordagain = _getState$signup.passwordagain,
		    referrer = _getState$signup.referrer;

		var Phone = phone.trim();
		var Verify = verify.trim();
		var Username = username.trim();
		var Password = password.trim();
		var Passwordagain = passwordagain.trim();
		var Referrer = referrer.trim();
		var phoneRegExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;

		if (!phoneRegExp.test(Phone)) {
			errorMsg('请输入正确的手机号！');
			return;
		}
		if (Verify === '' || Verify.length !== 4) {
			errorMsg('验证码输入错误！');
			return;
		}
		if (Username === '') {
			errorMsg('请输入用户名！');
			return;
		}
		if (Password === '') {
			errorMsg('请输入密码！');
			return;
		}
		if (Passwordagain === Password) {
			errorMsg('两次输入的密码不同！');
			return;
		}
		if (!phoneRegExp.test(Referrer)) {
			errorMsg('请输入正确的推荐人手机号！');
			return;
		}
		console.log('form发生了submit事件，携带数据为：', msg);
		dispatch({
			type: ActionType.SUBMIT
		});
		(0, _http2.default)({
			url: '',
			method: 'POST',
			success: function success(response) {
				if (response.success) {
					dispatch({
						type: ActionType.SUBMITSUCCESS
					});
					submitSuccess();
				} else {
					dispatch({
						type: ActionType.SUBMITFAIL
					});
					submitError();
				}
			},
			fail: function fail() {
				dispatch({
					type: ActionType.SUBMITFAIL
				});
				submitError();
			}
		});
	};
}

// 修改复选框选中状态的action
function checkedBox() {
	return {
		type: ActionType.SETCHECKED
	};
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(0);

var _reducers = __webpack_require__(38);

var _reducers2 = _interopRequireDefault(_reducers);

var _middlewares = __webpack_require__(33);

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancer = (0, _redux.compose)(_middlewares2.default);

exports.default = (0, _redux.createStore)(_reducers2.default, enhancer);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(0);

var _reduxThunk = __webpack_require__(42);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(41);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const en = __REDUX_DEVTOOLS_EXTENSION__ ? __REDUX_DEVTOOLS_EXTENSION__() : compose
var en = _redux.compose;

exports.default = en((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()));

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initState = {};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];
  return state;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initState = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments[1];
  var type = action.type,
      payload = action.payload;


  switch (type) {
    case _action.ActionType.COUNTER_INC:
      return Object.assign({}, state, {
        value: Math.min(state.max, state.value + 1)
      });

    case _action.ActionType.COUNTER_DEC:
      return Object.assign({}, state, {
        value: Math.max(state.min, state.value - 1)
      });

    default:
      return state;
  }
};

var _action = __webpack_require__(26);

var initState = exports.initState = {
  value: 5,
  max: 10,
  min: 0
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initState = undefined;

var _redux = __webpack_require__(0);

var _feedbackAction = __webpack_require__(28);

var initState = exports.initState = {
	message: '',
	tel: '',
	http: false,
	response: ''
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];
	var type = action.type,
	    payload = action.payload;

	switch (type) {
		// 留言信息
		case _feedbackAction.ActionType.MESSAGE:
			return Object.assign({}, state, {
				message: payload
			});
		//电话号码 
		case _feedbackAction.ActionType.TEL:
			return Object.assign({}, state, {
				tel: payload
			});
		//提交表单 
		case _feedbackAction.ActionType.SUBMIT:
			return Object.assign({}, state, {
				http: true
			});
		case _feedbackAction.ActionType.SUBMITSUCC:
			return Object.assign({}, state, {
				http: false,
				response: true
			});
		case _feedbackAction.ActionType.SUBMITFAIL:
			return Object.assign({}, state, {
				message: '',
				tel: '',
				http: false,
				response: false
			});
		default:
			return state;
	}
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initState = undefined;

var _redux = __webpack_require__(0);

var _goodsAction = __webpack_require__(29);

var initState = exports.initState = {
	payType: "gold", //integral,gold
	imgUrls: ['./../../static/images/test1.jpg', './../../static/images/test2.jpg', './../../static/images/test1.jpg'],
	price: 0, //每个的价钱
	hasConversion: 0, //已兑
	conversion: 0, //共多少件
	company: "", //公司名
	phoneNumber: "18810630121", //公司电话
	introduceContent: ["1111", '111'], //商品介绍的内容
	detailsContent: ["2222", '22'], //商家信息的内容
	notice: { //兑换须知
		way: "",
		startTime: "",
		endTime: "",
		rule: ""
	},
	showTab: "introduce", //details,introduce 显示的菜单栏
	collect: false, //收藏
	httpreq: false };

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];
	var type = action.type,
	    payload = action.payload;

	switch (type) {
		// 切换显示Tab 商品介绍
		case _goodsAction.ActionType.SHOWINTRODUCE:
			return Object.assign({}, state, {
				showTab: "introduce"
			});
		case _goodsAction.ActionType.SHOWDETAILS:
			return Object.assign({}, state, {
				showTab: "details"
			});
		// 切换显示Tab 商家详情
		case _goodsAction.ActionType.COLLECTION:
			return Object.assign({}, state, {
				collect: payload
			});
		// httpreq是否正在发送 
		case _goodsAction.ActionType.HTTPREQ:
			return Object.assign({}, state, {
				httpreq: true
			});
		case _goodsAction.ActionType.HTTPREQ_SUCCESS:
			return Object.assign({}, state, payload);

		case _goodsAction.ActionType.HTTPREQ_ERROR:
			return Object.assign({}, state, payload);

		default:
			return state;
	}
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(0);

var _app = __webpack_require__(34);

var _app2 = _interopRequireDefault(_app);

var _counter = __webpack_require__(35);

var _counter2 = _interopRequireDefault(_counter);

var _pay = __webpack_require__(39);

var _pay2 = _interopRequireDefault(_pay);

var _signup = __webpack_require__(40);

var _signup2 = _interopRequireDefault(_signup);

var _feedback = __webpack_require__(36);

var _feedback2 = _interopRequireDefault(_feedback);

var _goods = __webpack_require__(37);

var _goods2 = _interopRequireDefault(_goods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  app: _app2.default,
  counter: _counter2.default,
  pay: _pay2.default,
  signup: _signup2.default,
  feedback: _feedback2.default,
  goods: _goods2.default
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initState = undefined;

var _redux = __webpack_require__(0);

var _action = __webpack_require__(26);

var initState = exports.initState = {
	payWay: "funds",
	chargeMoney: '',
	balance: 100,
	verify: false,
	StartHttp: false,
	ratio: 5,
	userName: ''
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];
	var type = action.type,
	    payload = action.payload;

	switch (type) {
		// 设置支付方式
		case _action.ActionType.PAYWAY:
			return Object.assign({}, state, {
				payWay: payload
			});
		// 设置充值金额
		case _action.ActionType.CHANGEMONEY:
			return Object.assign({}, state, {
				chargeMoney: payload
			});
		// 设置是否完成验证(验证是否有足够的余额)
		case _action.ActionType.VERIFY:
			return Object.assign({}, state, {
				verify: payload,
				chargeMoney: ''
			});
		// 页面加载后发送的请求
		case _action.ActionType.HTTPREQ:
			return Object.assign({}, state, {
				StartHttp: true
			});
		// 页面加载时的请求成功
		case _action.ActionType.HTTPREQ_SUCCESS:
			return Object.assign({}, state, {
				StartHttp: false,
				ratio: payload.ratio,
				userName: payload.userName
			});
		// 页面加载时的请求失败
		case _action.ActionType.HTTPREQ_ERROR:
			return Object.assign({}, state, {
				StartHttp: false,
				ratio: '*'
			});
		default:
			return state;
	}
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initState = undefined;

var _signupAction = __webpack_require__(30);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initState = exports.initState = {
	verifyCode: '获取验证码',
	phone: "",
	verify: '',
	username: '',
	password: '',
	passwordagain: '',
	referrer: '',
	checked: false,
	submit: false
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
	var action = arguments[1];
	var type = action.type,
	    payload = action.payload;

	switch (type) {
		// 设置输入内容
		case _signupAction.ActionType.SETIFO:
			return Object.assign({}, state, _defineProperty({}, payload.key, payload.value));
		// 设置是否已经阅读协议(复选框)
		case _signupAction.ActionType.SETCHECKED:
			return Object.assign({}, state, {
				checked: !state.checked
			});
		// 设置发送验证码按钮的内容
		case _signupAction.ActionType.SENDVERIFY:
			return Object.assign({}, state, {
				verifyCode: payload
			});
		// 设置发送开始
		case _signupAction.ActionType.SUBMIT:
			return Object.assign({}, state, {
				submit: true
			});
		// 设置表单提交成功
		case _signupAction.ActionType.SUBMITSUCCESS:
			return Object.assign({}, state, {
				submit: false
			});
		// 设置表单提交失败
		case _signupAction.ActionType.SUBMITFAIL:
			return Object.assign({}, state, {
				verifyCode: '获取验证码',
				phone: "",
				verify: '',
				username: '',
				password: '',
				passwordagain: '',
				referrer: '',
				checked: false,
				submit: false
			});
		default:
			return state;
	}
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_42__;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(31);

var _store2 = _interopRequireDefault(_store);

var _wxappRedux = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _wxappRedux.Provider)(_store2.default)({});

/***/ })
/******/ ]);
});