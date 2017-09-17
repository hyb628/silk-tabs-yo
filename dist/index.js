webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _toConsumableArray2 = __webpack_require__(1);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(85);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _index = __webpack_require__(224);

	var _index2 = _interopRequireDefault(_index);

	__webpack_require__(304);

	__webpack_require__(306);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var numberOfTabs = 8; /**
	                       * @file index.jsx
	                       * @author houyl@jingoal.com
	                       *
	                       * 标签页示例
	                       */

	var tabs = [].concat((0, _toConsumableArray3.default)(new Array(numberOfTabs))).map(function (_, i) {
	    return 'tab' + i;
	});

	var Panels = [].concat((0, _toConsumableArray3.default)(new Array(numberOfTabs))).map(function (_, i) {
	    return _react2.default.createElement(
	        'div',
	        { key: i },
	        _react2.default.createElement(
	            'div',
	            { className: 'myItem' },
	            i
	        )
	    );
	});

	var tabPanelStyle = {
	    container: {
	        overflow: 'hidden',
	        visibility: 'hidden',
	        position: 'relative'
	    },
	    wrapper: {
	        overflow: 'hidden',
	        position: 'relative'
	    },
	    child: {
	        float: 'left',
	        width: '100%',
	        position: 'relative',
	        transitionProperty: 'transform',
	        height: '250px'
	    }

	    /* eslint-disable no-console*/
	};var onChange = function onChange(index) {
	    return console.log('onChange:' + index);
	};

	var transitionEnd = function transitionEnd(index) {
	    return console.log('transitionEnd:' + index);
	};
	/* eslint-enable no-console*/

	var TabsExample = function TabsExample() {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	            _index2.default,
	            {
	                defaultIndex: 2,
	                onChange: onChange,
	                transitionEnd: transitionEnd,
	                tabs: tabs,
	                tabPanelStyle: tabPanelStyle,
	                className: 'myTabs'
	            },
	            Panels
	        )
	    );
	};

	if (document.getElementById('root')) {
	    _reactDom2.default.render(_react2.default.createElement(TabsExample, null), document.getElementById('root'));
	}

	exports.default = TabsExample;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(2);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(3), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(48);
	module.exports = __webpack_require__(12).Array.from;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(5)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(8)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6);
	var defined = __webpack_require__(7);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(9);
	var $export = __webpack_require__(10);
	var redefine = __webpack_require__(25);
	var hide = __webpack_require__(15);
	var has = __webpack_require__(26);
	var Iterators = __webpack_require__(27);
	var $iterCreate = __webpack_require__(28);
	var setToStringTag = __webpack_require__(44);
	var getPrototypeOf = __webpack_require__(46);
	var ITERATOR = __webpack_require__(45)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var core = __webpack_require__(12);
	var ctx = __webpack_require__(13);
	var hide = __webpack_require__(15);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(14);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(16);
	var createDesc = __webpack_require__(24);
	module.exports = __webpack_require__(20) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(17);
	var IE8_DOM_DEFINE = __webpack_require__(19);
	var toPrimitive = __webpack_require__(23);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(20) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(20) && !__webpack_require__(21)(function () {
	  return Object.defineProperty(__webpack_require__(22)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(21)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	var document = __webpack_require__(11).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(29);
	var descriptor = __webpack_require__(24);
	var setToStringTag = __webpack_require__(44);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(15)(IteratorPrototype, __webpack_require__(45)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(17);
	var dPs = __webpack_require__(30);
	var enumBugKeys = __webpack_require__(42);
	var IE_PROTO = __webpack_require__(39)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(22)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(43).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(16);
	var anObject = __webpack_require__(17);
	var getKeys = __webpack_require__(31);

	module.exports = __webpack_require__(20) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(32);
	var enumBugKeys = __webpack_require__(42);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(26);
	var toIObject = __webpack_require__(33);
	var arrayIndexOf = __webpack_require__(36)(false);
	var IE_PROTO = __webpack_require__(39)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(34);
	var defined = __webpack_require__(7);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(35);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(33);
	var toLength = __webpack_require__(37);
	var toAbsoluteIndex = __webpack_require__(38);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(6);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(6);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(40)('keys');
	var uid = __webpack_require__(41);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(11).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(16).f;
	var has = __webpack_require__(26);
	var TAG = __webpack_require__(45)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(40)('wks');
	var uid = __webpack_require__(41);
	var Symbol = __webpack_require__(11).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(26);
	var toObject = __webpack_require__(47);
	var IE_PROTO = __webpack_require__(39)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(7);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx = __webpack_require__(13);
	var $export = __webpack_require__(10);
	var toObject = __webpack_require__(47);
	var call = __webpack_require__(49);
	var isArrayIter = __webpack_require__(50);
	var toLength = __webpack_require__(37);
	var createProperty = __webpack_require__(51);
	var getIterFn = __webpack_require__(52);

	$export($export.S + $export.F * !__webpack_require__(54)(function (iter) { Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = getIterFn(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(17);
	module.exports = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) anObject(ret.call(iterator));
	    throw e;
	  }
	};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(27);
	var ITERATOR = __webpack_require__(45)('iterator');
	var ArrayProto = Array.prototype;

	module.exports = function (it) {
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(16);
	var createDesc = __webpack_require__(24);

	module.exports = function (object, index, value) {
	  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	var classof = __webpack_require__(53);
	var ITERATOR = __webpack_require__(45)('iterator');
	var Iterators = __webpack_require__(27);
	module.exports = __webpack_require__(12).getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(35);
	var TAG = __webpack_require__(45)('toStringTag');
	// ES3 wrong here
	var ARG = cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	module.exports = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR = __webpack_require__(45)('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	  // eslint-disable-next-line no-throw-literal
	  Array.from(riter, function () { throw 2; });
	} catch (e) { /* empty */ }

	module.exports = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};


/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(225);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(229);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(230);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(234);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(258);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file index.jsx
	                    * @author houyl@jingoal.com
	                    *
	                    * 标签页
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _TabList = __webpack_require__(266);

	var _TabList2 = _interopRequireDefault(_TabList);

	var _TabPanels = __webpack_require__(297);

	var _TabPanels2 = _interopRequireDefault(_TabPanels);

	__webpack_require__(304);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tabs = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(Tabs, _PureComponent);

	    function Tabs(props) {
	        (0, _classCallCheck3.default)(this, Tabs);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

	        _this.state = { index: _this.props.defaultIndex };
	        _this.changeTabTo = _this.changeTabTo.bind(_this);
	        _this.onChange = _this.onChange.bind(_this);
	        _this.transitionEnd = _this.transitionEnd.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(Tabs, [{
	        key: 'onChange',
	        value: function onChange(index) {
	            this.setState({
	                index: index
	            });
	            if (this.props.onChange) {
	                this.props.onChange(index);
	            }
	        }
	    }, {
	        key: 'transitionEnd',
	        value: function transitionEnd(index) {
	            if (this.props.transitionEnd) {
	                this.props.transitionEnd(index);
	            }
	        }
	    }, {
	        key: 'changeTabTo',
	        value: function changeTabTo(value) {
	            this.reactSwipe.getInstance().slide(value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                className = _props.className,
	                tabs = _props.tabs,
	                defaultIndex = _props.defaultIndex,
	                tabStyle = _props.tabStyle,
	                tabPanelStyle = _props.tabPanelStyle,
	                children = _props.children,
	                containerStyle = _props.containerStyle;

	            return _react2.default.createElement(
	                'div',
	                { style: containerStyle, className: className },
	                _react2.default.createElement(_TabList2.default, {
	                    tabs: tabs,
	                    index: this.state.index,
	                    onChange: this.changeTabTo,
	                    style: tabStyle
	                }),
	                _react2.default.createElement(
	                    _TabPanels2.default,
	                    {
	                        ref: function ref(_ref) {
	                            _this2.reactSwipe = _ref;
	                        },
	                        onChange: this.onChange,
	                        transitionEnd: this.transitionEnd,
	                        startSlide: defaultIndex,
	                        style: tabPanelStyle
	                    },
	                    children
	                )
	            );
	        }
	    }]);
	    return Tabs;
	}(_react.PureComponent), _class.propTypes = {
	    className: _react.PropTypes.string,
	    tabs: _react.PropTypes.arrayOf(_react.PropTypes.node),
	    defaultIndex: _react.PropTypes.number,
	    onChange: _react.PropTypes.func,
	    transitionEnd: _react.PropTypes.func,
	    containerStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    tabStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    tabPanelStyle: _react.PropTypes.object, // eslint-disable-line react/forbid-prop-types
	    children: _react.PropTypes.node
	}, _class.defaultProps = {
	    defaultIndex: 0
	}, _temp);
	exports.default = Tabs;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(226), __esModule: true };

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(227);
	module.exports = __webpack_require__(12).Object.getPrototypeOf;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(47);
	var $getPrototypeOf = __webpack_require__(46);

	__webpack_require__(228)('getPrototypeOf', function () {
	  return function getPrototypeOf(it) {
	    return $getPrototypeOf(toObject(it));
	  };
	});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10);
	var core = __webpack_require__(12);
	var fails = __webpack_require__(21);
	module.exports = function (KEY, exec) {
	  var fn = (core.Object || {})[KEY] || Object[KEY];
	  var exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
	};


/***/ }),
/* 229 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(231);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(232), __esModule: true };

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(233);
	var $Object = __webpack_require__(12).Object;
	module.exports = function defineProperty(it, key, desc) {
	  return $Object.defineProperty(it, key, desc);
	};


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(20), 'Object', { defineProperty: __webpack_require__(16).f });


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(235);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(236);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(243);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(237), __esModule: true };

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(238);
	module.exports = __webpack_require__(242).f('iterator');


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(239);
	var global = __webpack_require__(11);
	var hide = __webpack_require__(15);
	var Iterators = __webpack_require__(27);
	var TO_STRING_TAG = __webpack_require__(45)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(240);
	var step = __webpack_require__(241);
	var Iterators = __webpack_require__(27);
	var toIObject = __webpack_require__(33);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(8)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 240 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 241 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(45);


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(244), __esModule: true };

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(245);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	module.exports = __webpack_require__(12).Symbol;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(11);
	var has = __webpack_require__(26);
	var DESCRIPTORS = __webpack_require__(20);
	var $export = __webpack_require__(10);
	var redefine = __webpack_require__(25);
	var META = __webpack_require__(246).KEY;
	var $fails = __webpack_require__(21);
	var shared = __webpack_require__(40);
	var setToStringTag = __webpack_require__(44);
	var uid = __webpack_require__(41);
	var wks = __webpack_require__(45);
	var wksExt = __webpack_require__(242);
	var wksDefine = __webpack_require__(247);
	var enumKeys = __webpack_require__(248);
	var isArray = __webpack_require__(251);
	var anObject = __webpack_require__(17);
	var toIObject = __webpack_require__(33);
	var toPrimitive = __webpack_require__(23);
	var createDesc = __webpack_require__(24);
	var _create = __webpack_require__(29);
	var gOPNExt = __webpack_require__(252);
	var $GOPD = __webpack_require__(254);
	var $DP = __webpack_require__(16);
	var $keys = __webpack_require__(31);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(253).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(250).f = $propertyIsEnumerable;
	  __webpack_require__(249).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(9)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(41)('meta');
	var isObject = __webpack_require__(18);
	var has = __webpack_require__(26);
	var setDesc = __webpack_require__(16).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(21)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(11);
	var core = __webpack_require__(12);
	var LIBRARY = __webpack_require__(9);
	var wksExt = __webpack_require__(242);
	var defineProperty = __webpack_require__(16).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(31);
	var gOPS = __webpack_require__(249);
	var pIE = __webpack_require__(250);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 249 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(35);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(33);
	var gOPN = __webpack_require__(253).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(32);
	var hiddenKeys = __webpack_require__(42).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(250);
	var createDesc = __webpack_require__(24);
	var toIObject = __webpack_require__(33);
	var toPrimitive = __webpack_require__(23);
	var has = __webpack_require__(26);
	var IE8_DOM_DEFINE = __webpack_require__(19);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(20) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 255 */
/***/ (function(module, exports) {

	

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(247)('asyncIterator');


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(247)('observable');


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(259);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(263);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(235);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(260), __esModule: true };

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(261);
	module.exports = __webpack_require__(12).Object.setPrototypeOf;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(262).set });


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(18);
	var anObject = __webpack_require__(17);
	var check = function (O, proto) {
	  anObject(O);
	  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = __webpack_require__(13)(Function.call, __webpack_require__(254).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(264), __esModule: true };

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(265);
	var $Object = __webpack_require__(12).Object;
	module.exports = function create(P, D) {
	  return $Object.create(P, D);
	};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', { create: __webpack_require__(29) });


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(225);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(229);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(230);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(234);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(258);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file TabList.jsx
	                    * @author yibin.huang@qunar.com
	                    *
	                    * tabs组件
	                    * 基于yo3组件的scroller进行修改
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(267);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Tab = __webpack_require__(268);

	var _Tab2 = _interopRequireDefault(_Tab);

	var _scroller = __webpack_require__(269);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var docWidth = document.documentElement.clientWidth;

	var TabList = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(TabList, _PureComponent);

	    function TabList(props) {
	        (0, _classCallCheck3.default)(this, TabList);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (TabList.__proto__ || (0, _getPrototypeOf2.default)(TabList)).call(this, props));

	        _this.totalWidth = 0;
	        _this.isOnTap = false;
	        _this.tabWidths = []; // 记录每个tab的宽度
	        _this.handleTabClick = _this.handleTabClick.bind(_this);
	        _this.updateTabWidth = _this.updateTabWidth.bind(_this);
	        return _this;
	    }

	    (0, _createClass3.default)(TabList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.handlePosition(this.props.index);
	        }

	        // 手势左右切换 触发的更新

	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	            var index = nextProps.index;
	            this.refScroller && this.handlePosition(index);
	        }
	    }, {
	        key: 'handleTabClick',
	        value: function handleTabClick(index) {
	            this.handlePosition(index);
	            // 触发下面Slider滚动到第几个
	            this.props.onChange(index);
	        }
	    }, {
	        key: 'updateTabWidth',
	        value: function updateTabWidth(index, width) {
	            this.totalWidth = this.tabWidths[index] ? this.totalWidth - this.tabWidths[index] + width : this.totalWidth + width;
	            this.tabWidths[index] = width;
	        }
	    }, {
	        key: 'handlePosition',
	        value: function handlePosition(index) {
	            var _this2 = this;

	            var start = 0;

	            // 计算offsetX
	            for (var i = 0; i < index; i++) {
	                start += this.tabWidths[i];
	            }

	            // 底部选中border
	            this.inkBar.style.cssText = '\n            -webkit-transform: translate3d(' + (start + 6) + 'px, 0px, 0px);\n            transform: translate3d(' + (start + 6) + 'px, 0px, 0px);\n            width:' + (this.tabWidths[index] - 12) + 'px\n        ';

	            // setTimeout 解决首次横向滚动 滚不了的问题
	            setTimeout(function () {
	                var viewportHalfWidth = docWidth / 2,
	                    //屏幕的一半
	                halfWidth = _this2.tabWidths[index] / 2,
	                    //当前项的一半
	                maxScrollX = _this2.refScroller && _this2.refScroller.maxScrollX,
	                    // 最大可滚动的距离
	                scrollX = _this2.refScroller.x;

	                if (start + halfWidth > viewportHalfWidth) {
	                    var posi = Math.floor(start + halfWidth - viewportHalfWidth);
	                    _this2.refScroller && _this2.refScroller.scrollTo(-posi < maxScrollX ? maxScrollX : -posi, 0, 500);
	                } else {
	                    _this2.refScroller && _this2.refScroller.scrollTo(0, 0, 300);
	                }
	            }, 0);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props = this.props,
	                tabs = _props.tabs,
	                style = _props.style;


	            return _react2.default.createElement(
	                _scroller2.default,
	                {
	                    ref: function ref(_ref2) {
	                        _this3.refScroller = _ref2;
	                    },
	                    scrollX: true,
	                    scrollY: false,
	                    disabled: false,
	                    extraClass: 'flex',
	                    containerExtraStyle: {
	                        width: this.totalWidth > docWidth ? this.totalWidth : docWidth
	                    }
	                },
	                _react2.default.createElement(
	                    'div',
	                    {
	                        style: style,
	                        className: 'silk-tabs-nav-wrapper'
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'silk-tabs-nav-scroller silk-tabs-border-line' },
	                        _react2.default.createElement('div', { className: 'silk-tabs-ink-bar silk-tabs-ink-bar-animated', ref: function ref(_ref) {
	                                _this3.inkBar = _ref;
	                            } }),
	                        tabs.map(function (item, index) {
	                            var tabClass = (0, _classnames2.default)('silk-tabs-tab', {
	                                'silk-tabs-active': index === _this3.props.index
	                            });
	                            return _react2.default.createElement(_Tab2.default, {
	                                key: index,
	                                index: index,
	                                className: tabClass,
	                                onTap: _this3.handleTabClick,
	                                content: item,
	                                updateTabWidth: _this3.updateTabWidth
	                            });
	                        })
	                    )
	                )
	            );
	        }
	    }]);
	    return TabList;
	}(_react.PureComponent), _class.propTypes = {
	    onChange: _react.PropTypes.func,
	    tabs: _react.PropTypes.arrayOf(_react.PropTypes.node),
	    index: _react.PropTypes.number,
	    style: _react.PropTypes.object // eslint-disable-line react/forbid-prop-types
	}, _class.defaultProps = {
	    index: 0,
	    style: {}
	}, _temp);
	exports.default = TabList;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(225);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(229);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(230);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(234);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(258);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * Tab组件
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _scroller = __webpack_require__(269);

	var _scroller2 = _interopRequireDefault(_scroller);

	var _touchable = __webpack_require__(291);

	var _touchable2 = _interopRequireDefault(_touchable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tab = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(Tab, _PureComponent);

	    function Tab() {
	        (0, _classCallCheck3.default)(this, Tab);
	        return (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || (0, _getPrototypeOf2.default)(Tab)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(Tab, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.updateTabWidth(this.props.index, this.el.offsetWidth);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                index = _props.index,
	                _onTap = _props.onTap,
	                className = _props.className,
	                content = _props.content;


	            return _react2.default.createElement(
	                _touchable2.default,
	                {
	                    touchClass: 'g-touchable-opacity',
	                    onTap: function onTap() {
	                        return _onTap(index);
	                    }
	                },
	                _react2.default.createElement(
	                    'div',
	                    {
	                        // onClick={() => onClick(index)}
	                        ref: function ref(_ref) {
	                            _this2.el = _ref;
	                        },
	                        className: className
	                    },
	                    content
	                )
	            );
	        }
	    }]);
	    return Tab;
	}(_react.PureComponent), _class.propTypes = {
	    onTap: _react.PropTypes.func,
	    updateTabWidth: _react.PropTypes.func,
	    content: _react.PropTypes.node,
	    index: _react.PropTypes.number,
	    className: _react.PropTypes.string
	}, _temp);
	exports.default = Tab;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(270);
	module.exports = __webpack_require__(274);

/***/ }),
/* 270 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(275);

	var _scroller = __webpack_require__(284);

	var _scroller2 = _interopRequireDefault(_scroller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _scroller2.default;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _fastclick = __webpack_require__(276);

	var _fastclick2 = _interopRequireDefault(_fastclick);

	var _reactTapEventPlugin = __webpack_require__(278);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Ellery1 on 16/7/8.
	 */
	if (!window.___yoTapEventInjected) {
	    // 不要觉得这里没用
	    // 因为yo-router也用了tap-event-plugin，如果不加try catch会报引用两次tap-event-plugin的警告
	    try {
	        (0, _reactTapEventPlugin2.default)();
	    } catch (e) {}

	    if (document.readyState === 'complete' || document.readyState === 'interactive') {
	        _fastclick2.default.attach(document.body);
	    }

	    document.addEventListener('DOMContentLoaded', function () {
	        _fastclick2.default.attach(document.body);
	    });
	    document.body.addEventListener('touchmove', function (evt) {
	        evt.preventDefault();
	    });
	    window.___yoTapEventInjected = true;
	}

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	;(function () {
	    'use strict';

	    /**
	     * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	     *
	     * @codingstandard ftlabs-jsv2
	     * @copyright The Financial Times Limited [All Rights Reserved]
	     * @license MIT License (see LICENSE.txt)
	     */

	    /*jslint browser:true, node:true*/
	    /*global define, Event, Node*/

	    /**
	     * Instantiate fast-clicking listeners on the specified layer.
	     *
	     * @constructor
	     * @param {Element} layer The layer to listen on
	     * @param {Object} [options={}] The options to override the defaults
	     */

	    function FastClick(layer, options) {
	        var oldOnClick;

	        options = options || {};

	        /**
	         * Whether a click is currently being tracked.
	         *
	         * @type boolean
	         */
	        this.trackingClick = false;

	        /**
	         * Timestamp for when click tracking started.
	         *
	         * @type number
	         */
	        this.trackingClickStart = 0;

	        /**
	         * The element being tracked for a click.
	         *
	         * @type EventTarget
	         */
	        this.targetElement = null;

	        /**
	         * X-coordinate of touch start event.
	         *
	         * @type number
	         */
	        this.touchStartX = 0;

	        /**
	         * Y-coordinate of touch start event.
	         *
	         * @type number
	         */
	        this.touchStartY = 0;

	        /**
	         * ID of the last touch, retrieved from Touch.identifier.
	         *
	         * @type number
	         */
	        this.lastTouchIdentifier = 0;

	        /**
	         * Touchmove boundary, beyond which a click will be cancelled.
	         *
	         * @type number
	         */
	        this.touchBoundary = options.touchBoundary || 10;

	        /**
	         * The FastClick layer.
	         *
	         * @type Element
	         */
	        this.layer = layer;

	        /**
	         * The minimum time between tap(touchstart and touchend) events
	         *
	         * @type number
	         */
	        this.tapDelay = options.tapDelay || 200;

	        /**
	         * The maximum time for a tap
	         *
	         * @type number
	         */
	        this.tapTimeout = options.tapTimeout || 700;

	        if (FastClick.notNeeded(layer)) {
	            return;
	        }

	        // Some old versions of Android don't have Function.prototype.bind
	        function bind(method, context) {
	            return function () {
	                return method.apply(context, arguments);
	            };
	        }

	        var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
	        var context = this;
	        for (var i = 0, l = methods.length; i < l; i++) {
	            context[methods[i]] = bind(context[methods[i]], context);
	        }

	        // Set up event handlers as required
	        if (deviceIsAndroid) {
	            layer.addEventListener('mouseover', this.onMouse, true);
	            layer.addEventListener('mousedown', this.onMouse, true);
	            layer.addEventListener('mouseup', this.onMouse, true);
	        }

	        layer.addEventListener('click', this.onClick, true);
	        layer.addEventListener('touchstart', this.onTouchStart, false);
	        layer.addEventListener('touchmove', this.onTouchMove, false);
	        layer.addEventListener('touchend', this.onTouchEnd, false);
	        layer.addEventListener('touchcancel', this.onTouchCancel, false);

	        // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	        // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	        // layer when they are cancelled.
	        if (!Event.prototype.stopImmediatePropagation) {
	            layer.removeEventListener = function (type, callback, capture) {
	                var rmv = Node.prototype.removeEventListener;
	                if (type === 'click') {
	                    rmv.call(layer, type, callback.hijacked || callback, capture);
	                } else {
	                    rmv.call(layer, type, callback, capture);
	                }
	            };

	            layer.addEventListener = function (type, callback, capture) {
	                var adv = Node.prototype.addEventListener;
	                if (type === 'click') {
	                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
	                        if (!event.propagationStopped) {
	                            callback(event);
	                        }
	                    }), capture);
	                } else {
	                    adv.call(layer, type, callback, capture);
	                }
	            };
	        }

	        // If a handler is already declared in the element's onclick attribute, it will be fired before
	        // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	        // adding it as listener.
	        if (typeof layer.onclick === 'function') {

	            // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
	            // - the old one won't work if passed to addEventListener directly.
	            oldOnClick = layer.onclick;
	            layer.addEventListener('click', function (event) {
	                oldOnClick(event);
	            }, false);
	            layer.onclick = null;
	        }
	    }

	    /**
	     * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	     *
	     * @type boolean
	     */
	    var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	    /**
	     * Android requires exceptions.
	     *
	     * @type boolean
	     */
	    var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;

	    /**
	     * iOS requires exceptions.
	     *
	     * @type boolean
	     */
	    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;

	    /**
	     * iOS 4 requires an exception for select elements.
	     *
	     * @type boolean
	     */
	    var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);

	    /**
	     * iOS 6.0-7.* requires the target element to be manually derived
	     *
	     * @type boolean
	     */
	    var deviceIsIOSWithBadTarget = deviceIsIOS && /OS [6-7]_\d/.test(navigator.userAgent);

	    /**
	     * BlackBerry requires exceptions.
	     *
	     * @type boolean
	     */
	    var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	    /**
	     * Determine whether a given element requires a native click.
	     *
	     * @param {EventTarget|Element} target Target DOM element
	     * @returns {boolean} Returns true if the element needs a native click
	     */
	    FastClick.prototype.needsClick = function (target) {
	        switch (target.nodeName.toLowerCase()) {

	            // Don't send a synthetic click to disabled inputs (issue #62)
	            case 'button':
	            case 'select':
	            case 'textarea':
	                if (target.disabled) {
	                    return true;
	                }

	                break;
	            case 'input':

	                // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
	                if (deviceIsIOS && target.type === 'file' || target.disabled) {
	                    return true;
	                }

	                break;
	            case 'label':
	            case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
	            case 'video':
	                return true;
	        }

	        return (/\bneedsclick\b/.test(target.className)
	        );
	    };

	    /**
	     * Determine whether a given element requires a call to focus to simulate click into element.
	     *
	     * @param {EventTarget|Element} target Target DOM element
	     * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	     */
	    FastClick.prototype.needsFocus = function (target) {
	        switch (target.nodeName.toLowerCase()) {
	            case 'textarea':
	                return true;
	            case 'select':
	                return !deviceIsAndroid;
	            case 'input':
	                switch (target.type) {
	                    case 'button':
	                    case 'checkbox':
	                    case 'file':
	                    case 'image':
	                    case 'radio':
	                    case 'submit':
	                        return false;
	                }

	                // No point in attempting to focus disabled inputs
	                return !target.disabled && !target.readOnly;
	            default:
	                return (/\bneedsfocus\b/.test(target.className)
	                );
	        }
	    };

	    /**
	     * Send a click event to the specified element.
	     *
	     * @param {EventTarget|Element} targetElement
	     * @param {Event} event
	     */
	    FastClick.prototype.sendClick = function (targetElement, event) {
	        var clickEvent, touch;

	        // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	        if (document.activeElement && document.activeElement !== targetElement) {
	            document.activeElement.blur();
	        }

	        touch = event.changedTouches[0];

	        // Synthesise a click event, with an extra attribute so it can be tracked
	        clickEvent = document.createEvent('MouseEvents');
	        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	        clickEvent.forwardedTouchEvent = true;
	        targetElement.dispatchEvent(clickEvent);
	    };

	    FastClick.prototype.determineEventType = function (targetElement) {

	        //Issue #159: Android Chrome Select Box does not open with a synthetic click event
	        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
	            return 'mousedown';
	        }

	        return 'click';
	    };

	    /**
	     * @param {EventTarget|Element} targetElement
	     */
	    FastClick.prototype.focus = function (targetElement) {
	        var length;

	        // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
	            length = targetElement.value.length;
	            targetElement.setSelectionRange(length, length);
	        } else {
	            targetElement.focus();
	        }
	    };

	    /**
	     * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	     *
	     * @param {EventTarget|Element} targetElement
	     */
	    FastClick.prototype.updateScrollParent = function (targetElement) {
	        var scrollParent, parentElement;

	        scrollParent = targetElement.fastClickScrollParent;

	        // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	        // target element was moved to another parent.
	        if (!scrollParent || !scrollParent.contains(targetElement)) {
	            parentElement = targetElement;
	            do {
	                if (parentElement.scrollHeight > parentElement.offsetHeight) {
	                    scrollParent = parentElement;
	                    targetElement.fastClickScrollParent = parentElement;
	                    break;
	                }

	                parentElement = parentElement.parentElement;
	            } while (parentElement);
	        }

	        // Always update the scroll top tracker if possible.
	        if (scrollParent) {
	            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	        }
	    };

	    /**
	     * @param {EventTarget} targetElement
	     * @returns {Element|EventTarget}
	     */
	    FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {

	        // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	        if (eventTarget.nodeType === Node.TEXT_NODE) {
	            return eventTarget.parentNode;
	        }

	        return eventTarget;
	    };

	    /**
	     * On touch start, record the position and scroll offset.
	     *
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    FastClick.prototype.onTouchStart = function (event) {
	        var targetElement, touch, selection;

	        // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	        if (event.targetTouches.length > 1) {
	            return true;
	        }

	        targetElement = this.getTargetElementFromEventTarget(event.target);
	        touch = event.targetTouches[0];

	        if (deviceIsIOS) {

	            // Only trusted events will deselect text on iOS (issue #49)
	            selection = window.getSelection();
	            if (selection.rangeCount && !selection.isCollapsed) {
	                return true;
	            }

	            if (!deviceIsIOS4) {

	                // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
	                // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
	                // with the same identifier as the touch event that previously triggered the click that triggered the alert.
	                // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
	                // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
	                // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
	                // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
	                // random integers, it's safe to to continue if the identifier is 0 here.
	                if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
	                    event.preventDefault();
	                    return false;
	                }

	                this.lastTouchIdentifier = touch.identifier;

	                // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
	                // 1) the user does a fling scroll on the scrollable layer
	                // 2) the user stops the fling scroll with another tap
	                // then the event.target of the last 'touchend' event will be the element that was under the user's finger
	                // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
	                // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
	                this.updateScrollParent(targetElement);
	            }
	        }

	        this.trackingClick = true;
	        this.trackingClickStart = event.timeStamp;
	        this.targetElement = targetElement;

	        this.touchStartX = touch.pageX;
	        this.touchStartY = touch.pageY;

	        // Prevent phantom clicks on fast double-tap (issue #36)
	        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
	            event.preventDefault();
	        }

	        return true;
	    };

	    /**
	     * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	     *
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    FastClick.prototype.touchHasMoved = function (event) {
	        var touch = event.changedTouches[0],
	            boundary = this.touchBoundary;

	        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
	            return true;
	        }

	        return false;
	    };

	    /**
	     * Update the last position.
	     *
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    FastClick.prototype.onTouchMove = function (event) {
	        if (!this.trackingClick) {
	            return true;
	        }

	        // If the touch has moved, cancel the click tracking
	        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
	            this.trackingClick = false;
	            this.targetElement = null;
	        }

	        return true;
	    };

	    /**
	     * Attempt to find the labelled control for the given label element.
	     *
	     * @param {EventTarget|HTMLLabelElement} labelElement
	     * @returns {Element|null}
	     */
	    FastClick.prototype.findControl = function (labelElement) {

	        // Fast path for newer browsers supporting the HTML5 control attribute
	        if (labelElement.control !== undefined) {
	            return labelElement.control;
	        }

	        // All browsers under test that support touch events also support the HTML5 htmlFor attribute
	        if (labelElement.htmlFor) {
	            return document.getElementById(labelElement.htmlFor);
	        }

	        // If no for attribute exists, attempt to retrieve the first labellable descendant element
	        // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	        return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	    };

	    /**
	     * On touch end, determine whether to send a click event at once.
	     *
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    FastClick.prototype.onTouchEnd = function (event) {
	        var forElement,
	            trackingClickStart,
	            targetTagName,
	            scrollParent,
	            touch,
	            targetElement = this.targetElement;

	        if (!this.trackingClick) {
	            return true;
	        }

	        // Prevent phantom clicks on fast double-tap (issue #36)
	        if (this.lastClickTime) {
	            if (event.timeStamp - this.lastClickTime < this.tapDelay) {
	                this.cancelNextClick = true;
	                return true;
	            }
	        }

	        if (this.trackingClickStart) {
	            if (event.timeStamp - this.trackingClickStart > this.tapTimeout) {
	                return true;
	            }
	        }

	        // Reset to prevent wrong click cancel on input (issue #156).
	        this.cancelNextClick = false;

	        this.lastClickTime = event.timeStamp;

	        trackingClickStart = this.trackingClickStart;
	        this.trackingClick = false;
	        this.trackingClickStart = 0;

	        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
	        // is performing a transition or scroll, and has to be re-detected manually. Note that
	        // for this to function correctly, it must be called *after* the event target is checked!
	        // See issue #57; also filed as rdar://13048589 .
	        if (deviceIsIOSWithBadTarget) {
	            touch = event.changedTouches[0];

	            // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
	            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
	            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	        }

	        targetTagName = targetElement.tagName.toLowerCase();
	        if (targetTagName === 'label') {
	            forElement = this.findControl(targetElement);
	            if (forElement) {
	                this.focus(targetElement);
	                if (deviceIsAndroid) {
	                    return false;
	                }

	                targetElement = forElement;
	            }
	        } else if (this.needsFocus(targetElement)) {

	            // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
	            // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
	            if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === 'input') {
	                this.targetElement = null;
	                return false;
	            }

	            this.focus(targetElement);
	            this.sendClick(targetElement, event);

	            // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
	            // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
	            //if (!deviceIsIOS || targetTagName !== 'select') {
	            //    this.targetElement = null;
	            //    event.preventDefault();
	            //}

	            return false;
	        }

	        if (deviceIsIOS && !deviceIsIOS4) {

	            // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
	            // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
	            scrollParent = targetElement.fastClickScrollParent;
	            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
	                return true;
	            }
	        }

	        // Prevent the actual click from going though - unless the target node is marked as requiring
	        // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	        if (!this.needsClick(targetElement)) {
	            event.preventDefault();
	            this.sendClick(targetElement, event);
	        }

	        return false;
	    };

	    /**
	     * On touch cancel, stop tracking the click.
	     *
	     * @returns {void}
	     */
	    FastClick.prototype.onTouchCancel = function () {
	        this.trackingClick = false;
	        this.targetElement = null;
	    };

	    /**
	     * Determine mouse events which should be permitted.
	     *
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    FastClick.prototype.onMouse = function (event) {

	        // If a target element was never set (because a touch event was never fired) allow the event
	        if (!this.targetElement) {
	            return true;
	        }

	        if (event.forwardedTouchEvent) {
	            return true;
	        }

	        // Programmatically generated events targeting a specific element should be permitted
	        if (!event.cancelable) {
	            return true;
	        }

	        // Derive and check the target element to see whether the mouse event needs to be permitted;
	        // unless explicitly enabled, prevent non-touch click events from triggering actions,
	        // to prevent ghost/doubleclicks.
	        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

	            // Prevent any user-added listeners declared on FastClick element from being fired.
	            if (event.stopImmediatePropagation) {
	                event.stopImmediatePropagation();
	            } else {

	                // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	                event.propagationStopped = true;
	            }

	            // Cancel the event
	            event.stopPropagation();
	            event.preventDefault();

	            return false;
	        }

	        // If the mouse event is permitted, return true for the action to go through.
	        return true;
	    };

	    /**
	     * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	     * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	     * an actual click which should be permitted.
	     *
	     * @param {Event} event
	     * @returns {boolean}
	     */
	    FastClick.prototype.onClick = function (event) {
	        var permitted;

	        // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	        if (this.trackingClick) {
	            this.targetElement = null;
	            this.trackingClick = false;
	            return true;
	        }

	        // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	        if (event.target.type === 'submit' && event.detail === 0) {
	            return true;
	        }

	        permitted = this.onMouse(event);

	        // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	        if (!permitted) {
	            this.targetElement = null;
	        }

	        // If clicks are permitted, return true for the action to go through.
	        return permitted;
	    };

	    /**
	     * Remove all FastClick's event listeners.
	     *
	     * @returns {void}
	     */
	    FastClick.prototype.destroy = function () {
	        var layer = this.layer;

	        if (deviceIsAndroid) {
	            layer.removeEventListener('mouseover', this.onMouse, true);
	            layer.removeEventListener('mousedown', this.onMouse, true);
	            layer.removeEventListener('mouseup', this.onMouse, true);
	        }

	        layer.removeEventListener('click', this.onClick, true);
	        layer.removeEventListener('touchstart', this.onTouchStart, false);
	        layer.removeEventListener('touchmove', this.onTouchMove, false);
	        layer.removeEventListener('touchend', this.onTouchEnd, false);
	        layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	    };

	    /**
	     * Check whether FastClick is needed.
	     *
	     * @param {Element} layer The layer to listen on
	     */
	    FastClick.notNeeded = function (layer) {
	        var metaViewport;
	        var chromeVersion;
	        var blackberryVersion;
	        var firefoxVersion;

	        // Devices that don't support touch don't need FastClick
	        if (typeof window.ontouchstart === 'undefined') {
	            return true;
	        }

	        // Chrome version - zero for other browsers
	        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

	        if (chromeVersion) {

	            if (deviceIsAndroid) {
	                metaViewport = document.querySelector('meta[name=viewport]');

	                if (metaViewport) {
	                    // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
	                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
	                        //HACK by zongze.li add 757--759: hack for chrome version 30、37 in vivo x5 pro and HuaWei mate7, which still has 300ms delay with user-scalable=no
	                        if (chromeVersion <= 38) {
	                            return false;
	                        }

	                        return true;
	                    }
	                    // Chrome 32 and above with width=device-width or less don't need FastClick

	                    //HACK by zongze.li change 31 into 38: hack for chrome version 30、37 in vivo x5 pro and HuaWei mate7, which still has 300ms delay with width=device-width

	                    //origin: if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {

	                    if (chromeVersion > 38 && document.documentElement.scrollWidth <= window.outerWidth) {
	                        return true;
	                    }
	                }

	                // Chrome desktop doesn't need FastClick (issue #15)
	            } else {
	                return true;
	            }
	        }

	        if (deviceIsBlackBerry10) {
	            blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

	            // BlackBerry 10.3+ does not require Fastclick library.
	            // https://github.com/ftlabs/fastclick/issues/251
	            if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
	                metaViewport = document.querySelector('meta[name=viewport]');

	                if (metaViewport) {
	                    // user-scalable=no eliminates click delay.
	                    if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
	                        return true;
	                    }
	                    // width=device-width (or less than device-width) eliminates click delay.
	                    if (document.documentElement.scrollWidth <= window.outerWidth) {
	                        return true;
	                    }
	                }
	            }
	        }

	        // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
	        if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
	            return true;
	        }

	        // Firefox version - zero for other browsers
	        firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];

	        if (firefoxVersion >= 27) {
	            // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

	            metaViewport = document.querySelector('meta[name=viewport]');
	            if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
	                return true;
	            }
	        }

	        // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
	        // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
	        if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
	            return true;
	        }

	        return false;
	    };

	    /**
	     * Factory method for creating a FastClick object
	     *
	     * @param {Element} layer The layer to listen on
	     * @param {Object} [options={}] The options to override the defaults
	     */
	    FastClick.attach = function (layer, options) {
	        return new FastClick(layer, options);
	    };

	    if ("function" === 'function' && _typeof(__webpack_require__(277)) === 'object' && __webpack_require__(277)) {

	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return FastClick;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module.exports) {
	        module.exports = FastClick.attach;
	        module.exports.FastClick = FastClick;
	    } else {
	        window.FastClick = FastClick;
	    }
	})();

/***/ }),
/* 277 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	var invariant = __webpack_require__(65);
	var defaultClickRejectionStrategy = __webpack_require__(279);

	var alreadyInjected = false;

	module.exports = function injectTapEventPlugin (strategyOverrides) {
	  strategyOverrides = strategyOverrides || {}
	  var shouldRejectClick = strategyOverrides.shouldRejectClick || defaultClickRejectionStrategy;

	  if (false) {
	    invariant(
	      !alreadyInjected,
	      'injectTapEventPlugin(): Can only be called once per application lifecycle.\n\n\
	It is recommended to call injectTapEventPlugin() just before you call \
	ReactDOM.render(). If you are using an external library which calls injectTapEventPlugin() \
	itself, please contact the maintainer as it shouldn\'t be called in library code and \
	should be injected by the application.'
	    )
	  }

	  alreadyInjected = true;

	  __webpack_require__(95).injection.injectEventPluginsByName({
	    'TapEventPlugin':       __webpack_require__(280)(shouldRejectClick)
	  });
	};


/***/ }),
/* 279 */
/***/ (function(module, exports) {

	module.exports = function(lastTouchEvent, clickTimestamp) {
	  if (lastTouchEvent && (clickTimestamp - lastTouchEvent) < 750) {
	    return true;
	  }
	};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TapEventPlugin
	 * @typechecks static-only
	 */

	"use strict";

	var EventConstants = __webpack_require__(281);
	var EventPluginUtils = __webpack_require__(97);
	var EventPropagators = __webpack_require__(94);
	var SyntheticUIEvent = __webpack_require__(124);
	var TouchEventUtils = __webpack_require__(282);
	var ViewportMetrics = __webpack_require__(125);

	var keyOf = __webpack_require__(283);
	var topLevelTypes = EventConstants.topLevelTypes;

	var isStartish = EventPluginUtils.isStartish;
	var isEndish = EventPluginUtils.isEndish;

	var isTouch = function(topLevelType) {
	  var touchTypes = [
	    'topTouchCancel',
	    'topTouchEnd',
	    'topTouchStart',
	    'topTouchMove'
	  ];
	  return touchTypes.indexOf(topLevelType) >= 0;
	}

	/**
	 * Number of pixels that are tolerated in between a `touchStart` and `touchEnd`
	 * in order to still be considered a 'tap' event.
	 */
	var tapMoveThreshold = 10;
	var ignoreMouseThreshold = 750;
	var startCoords = {x: null, y: null};
	var lastTouchEvent = null;

	var Axis = {
	  x: {page: 'pageX', client: 'clientX', envScroll: 'currentPageScrollLeft'},
	  y: {page: 'pageY', client: 'clientY', envScroll: 'currentPageScrollTop'}
	};

	function getAxisCoordOfEvent(axis, nativeEvent) {
	  var singleTouch = TouchEventUtils.extractSingleTouch(nativeEvent);
	  if (singleTouch) {
	    return singleTouch[axis.page];
	  }
	  return axis.page in nativeEvent ?
	    nativeEvent[axis.page] :
	    nativeEvent[axis.client] + ViewportMetrics[axis.envScroll];
	}

	function getDistance(coords, nativeEvent) {
	  var pageX = getAxisCoordOfEvent(Axis.x, nativeEvent);
	  var pageY = getAxisCoordOfEvent(Axis.y, nativeEvent);
	  return Math.pow(
	    Math.pow(pageX - coords.x, 2) + Math.pow(pageY - coords.y, 2),
	    0.5
	  );
	}

	var touchEvents = [
	  'topTouchStart',
	  'topTouchCancel',
	  'topTouchEnd',
	  'topTouchMove',
	];

	var dependencies = [
	  'topMouseDown',
	  'topMouseMove',
	  'topMouseUp',
	].concat(touchEvents);

	var eventTypes = {
	  touchTap: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({onTouchTap: null}),
	      captured: keyOf({onTouchTapCapture: null})
	    },
	    dependencies: dependencies
	  }
	};

	var now = (function() {
	  if (Date.now) {
	    return Date.now;
	  } else {
	    // IE8 support: http://stackoverflow.com/questions/9430357/please-explain-why-and-how-new-date-works-as-workaround-for-date-now-in
	    return function () {
	      return +new Date;
	    }
	  }
	})();

	function createTapEventPlugin(shouldRejectClick) {
	  return {

	    tapMoveThreshold: tapMoveThreshold,

	    ignoreMouseThreshold: ignoreMouseThreshold,

	    eventTypes: eventTypes,

	    /**
	     * @param {string} topLevelType Record from `EventConstants`.
	     * @param {DOMEventTarget} targetInst The listening component root node.
	     * @param {object} nativeEvent Native browser event.
	     * @return {*} An accumulation of synthetic events.
	     * @see {EventPluginHub.extractEvents}
	     */
	    extractEvents: function(
	      topLevelType,
	      targetInst,
	      nativeEvent,
	      nativeEventTarget
	    ) {

	      if (!isStartish(topLevelType) && !isEndish(topLevelType)) {
	        return null;
	      }

	      if (isTouch(topLevelType)) {
	        lastTouchEvent = now();
	      } else {
	        if (shouldRejectClick(lastTouchEvent, now())) {
	          return null;
	        }
	      }

	      var event = null;
	      var distance = getDistance(startCoords, nativeEvent);
	      if (isEndish(topLevelType) && distance < tapMoveThreshold) {
	        event = SyntheticUIEvent.getPooled(
	          eventTypes.touchTap,
	          targetInst,
	          nativeEvent,
	          nativeEventTarget
	        );
	      }
	      if (isStartish(topLevelType)) {
	        startCoords.x = getAxisCoordOfEvent(Axis.x, nativeEvent);
	        startCoords.y = getAxisCoordOfEvent(Axis.y, nativeEvent);
	      } else if (isEndish(topLevelType)) {
	        startCoords.x = 0;
	        startCoords.y = 0;
	      }
	      EventPropagators.accumulateTwoPhaseDispatches(event);
	      return event;
	    }

	  };
	}

	module.exports = createTapEventPlugin;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = {
	  topAbort: null,
	  topAnimationEnd: null,
	  topAnimationIteration: null,
	  topAnimationStart: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topInvalid: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topTransitionEnd: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	};

	var EventConstants = {
	  topLevelTypes: topLevelTypes
	};

	module.exports = EventConstants;

/***/ }),
/* 282 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule TouchEventUtils
	 */

	var TouchEventUtils = {
	  /**
	   * Utility function for common case of extracting out the primary touch from a
	   * touch event.
	   * - `touchEnd` events usually do not have the `touches` property.
	   *   http://stackoverflow.com/questions/3666929/
	   *   mobile-sarai-touchend-event-not-firing-when-last-touch-is-removed
	   *
	   * @param {Event} nativeEvent Native event that may or may not be a touch.
	   * @return {TouchesObject?} an object with pageX and pageY or null.
	   */
	  extractSingleTouch: function(nativeEvent) {
	    var touches = nativeEvent.touches;
	    var changedTouches = nativeEvent.changedTouches;
	    var hasTouches = touches && touches.length > 0;
	    var hasChangedTouches = changedTouches && changedTouches.length > 0;

	    return !hasTouches && hasChangedTouches ? changedTouches[0] :
	           hasTouches ? touches[0] :
	           nativeEvent;
	  }
	};

	module.exports = TouchEventUtils;


/***/ }),
/* 283 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(285);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(85);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _utils = __webpack_require__(287);

	var _utils2 = _interopRequireDefault(_utils);

	var _util = __webpack_require__(288);

	var _classnames = __webpack_require__(267);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _lazyimage = __webpack_require__(289);

	var _lazyimage2 = _interopRequireDefault(_lazyimage);

	var _sticky = __webpack_require__(290);

	var _sticky2 = _interopRequireDefault(_sticky);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 滚动组件
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Scroller
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 滚动组件,用来提供滚动容器。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了横向滚动和纵向滚动。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了『下拉刷新』和『加载更多』功能。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了 `transition` 和 `requestAnimationFrame` 两种实现滚动的方式。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * - 提供了 `transform` 和 `position:absolute` 两种实现位移的方式。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 确定高度：Scroller 必须有一个确定的高度才能正常工作，因为它实际上就是将一系列不确定高度的子组件装进一个确定高度的容器。实现确定高度的方式有很多种：flex、指定高度、position: absolute等等。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 内容容器：作为一个滚动组件，Scroller 会创建一个 div 作为滚动容器。如果 Scroller 的子元素只有一个，则会把这个子元素当做内容容器；否则，会创建一个 div 作为内容容器。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./scroller/basic.md}{instruUrl: scroller/base.html?hideIcon}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./scroller/refresh.md}{instruUrl: scroller/refresh.html?hideIcon}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./scroller/scrollevent.md}{instruUrl: scroller/scroll.html?hideIcon}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var REFRESHSTATUS = {
	    PULL: 'pullrefresh_pull',
	    RELEASE: 'pullrefresh_release',
	    LOAD: 'pullrefresh_load',
	    SUCCESS: 'pullrefresh_success',
	    FAIL: 'pullrefresh_fail'
	};
	var LOADSTATUS = {
	    PULL: 'loadmore_pull',
	    RELEASE: 'loadmore_release',
	    LOAD: 'loadmore_load',
	    NOMORE: 'loadmore_nomore'
	};

	var _utils$getRAF = _utils2.default.getRAF(),
	    rAF = _utils$getRAF.rAF,
	    cancelrAF = _utils$getRAF.cancelrAF;

	var defaultProps = {
	    extraClass: '',
	    containerExtraClass: '',
	    containerExtraStyle: {},
	    contentOffset: {
	        x: 0,
	        y: 0
	    },
	    disabled: false,
	    scrollX: false,
	    scrollY: true,
	    freeScroll: false,
	    directionLockThreshold: 5, // 锁定某一滚动方向的阀值
	    momentum: true, // 惯性滚动
	    bounce: true, // 弹性滚动
	    bounceTime: 600, // 弹性滚动时间
	    bounceEasing: _utils2.default.ease.circular, // 弹性滚动easing函数
	    preventDefault: true, // 阻止默认事件
	    preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ }, // 阻止默认事件的例外
	    stopPropagation: false, // 阻止冒泡
	    HWCompositing: true, // 是否开启硬件加速
	    useTransition: true,
	    useTransform: true,
	    onScroll: null, // 滚动事件的回调
	    usePullRefresh: false,
	    pullRefreshHeight: 40,
	    renderPullRefresh: null,
	    onRefresh: null,
	    useLoadMore: false,
	    loadMoreHeight: 40,
	    renderLoadMore: null,
	    onLoad: null,
	    autoRefresh: true,
	    wrapper: null,
	    enableLazyLoad: true,
	    scrollWithouTouchStart: false,
	    stickyOffset: 0
	};

	var propTypes = {
	    /**
	     * 组件额外class
	     *
	     * @property extraClass
	     * @type String
	     * @description 为组件根节点提供额外的class。
	     * @default ''
	     */
	    extraClass: _propTypes2.default.string,
	    /**
	     * 内容容器额外class
	     *
	     * @property containerExtraClass
	     * @type String
	     * @description 为组件中的内容容器提供额外的class。
	     * @default ''
	     */
	    containerExtraClass: _propTypes2.default.string,
	    /**
	     * 内容容器额外style
	     *
	     * @property containerExtraStyle
	     * @type String
	     * @description 为组件中的内容容器提供额外的style，主要用于横向滚动时，动态设置容器的宽度。
	     * @default {}
	     * @version 3.0.6
	     */
	    containerExtraStyle: _propTypes2.default.object,
	    /**
	     * 内容位移
	     *
	     * @property contentOffset
	     * @type {x: Number, y: Mumber}
	     * @description 组件中内容的初始位移，这个属性变化时，会重置内容的位移。
	     * @default {x: 0, y: 0}
	     */
	    contentOffset: _propTypes2.default.shape({
	        x: _propTypes2.default.number,
	        y: _propTypes2.default.number
	    }),
	    /**
	     * @property stickyOffset
	     * @type Number
	     * @description 吸顶容器偏移，如果你希望吸顶容器不位于top:0的位置，可以修改这个属性。
	     * @default 0
	     * @version 3.0.6
	     */
	    stickyOffset: _propTypes2.default.number,
	    /**
	     * 是否禁止滚动
	     *
	     * @property disabled
	     * @type Bool
	     * @description 是否禁止滚动，默认允许滚动。
	     * @default false
	     */
	    disabled: _propTypes2.default.bool,
	    /**
	     * 横向滚动
	     *
	     * @property scrollX
	     * @type Bool
	     * @description 是否开启横向滚动，默认关闭。
	     * @default false
	     */
	    scrollX: _propTypes2.default.bool,
	    /**
	     * 纵向滚动
	     *
	     * @property scrollY
	     * @type Bool
	     * @description 是否开启纵向滚动,默认开启。
	     * @default true
	     */
	    scrollY: _propTypes2.default.bool,
	    /**
	     * 自由滚动
	     *
	     * @property freeScroll
	     * @type Bool
	     * @description 是否开启自由滚动。当设置为 `false` 时，只能响应某一个方向的滚动；当设置为 `true` 时，可以同时响应横向和纵向滚动（`scrollX` 和 `scrollY` 必须同时为 `true`）。
	     * @default false
	     * @skip
	     */
	    freeScroll: _propTypes2.default.bool,
	    /**
	     * 方向锁定阈值
	     *
	     * @property directionLockThreshold
	     * @type Number
	     * @description 只允许单向滚动的时候，会根据这个阀值来判定响应哪个方向上的位移：某一方向位移减去另一个方向位移超过阀值，就会判定为这个方向的滚动。
	     *
	     * 一个常见的示例是：在一个纵向滚动的 Scroller 中嵌套一个横向滚动的 Scroller。此时，如果斜着（约45°）滚动，则内层的 Scroller 会先响应，
	     * 但是不会锁定，触摸事件会向冒泡到外层的 Scroller，导致外层的 Scroller 也会响应。此时将 directionLockThreshold 设置成 0，保证不管向哪个方向滚动，
	     * Scroller 都会锁定方向而不向外冒泡，就不会出现同时响应的问题了。
	     * @default 5
	     */
	    directionLockThreshold: _propTypes2.default.number,
	    /**
	     * 惯性滚动
	     *
	     * @property momentum
	     * @type Bool
	     * @description 是否允许惯性滚动。当设置为 `true`，手指离开时，如果还有速度会继续滚动一段距离；当设置为 `false` ，手指离开时会立即停止滚动。
	     * @default true
	     */
	    momentum: _propTypes2.default.bool,
	    /**
	     * 弹性滚动
	     *
	     * @property bounce
	     * @type Bool
	     * @description 当滚动超出内容范围时，是否可以继续滚动一截。
	     * @default true
	     */
	    bounce: _propTypes2.default.bool,
	    /**
	     * 弹性滚动回弹时间
	     *
	     * @property bounceTime
	     * @type Number
	     * @description 当弹性滚动一截之后，回到滚动范围内位置的时间，单位为毫秒（ms）。
	     * @default 600
	     */
	    bounceTime: _propTypes2.default.number,
	    /**
	     * 弹性滚动回弹动画
	     *
	     * @property bounceEasing
	     * @type Object
	     * @description 弹性回滚动画。
	     *
	     * Scroller 提供了五种默认的动画函数：`quadratic`, `circular`, `back`, `bounce`, `elastic`，可以通过 `Scroller.ease.xxx` 来使用。
	     *
	     * 用户也可以自定义动画对象，比如：
	     *
	     * ``
	     * {
	     *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	     *     fn: function (k) {
	     *         return k * ( 2 - k );
	     *     }
	     * }
	     * ``
	     * @default Scroller.ease.circular
	     */
	    bounceEasing: _propTypes2.default.object,
	    /**
	     * transition开关
	     *
	     * @property useTransition
	     * @type Bool
	     * @description 如果设置为true,会使用transition来实现滚动效果;如果设置为false,会使用requestAnimationFrame来实现。
	     * @default true
	     */
	    useTransition: _propTypes2.default.bool,
	    /**
	     * transform开关
	     *
	     * @property useTransform
	     * @type Bool
	     * @description 如果设置为true,会使用transform来实现位移;如果设置为false,会使用left和top来实现位移（position: absolute）。
	     * @default true
	     */
	    useTransform: _propTypes2.default.bool,
	    /**
	     * 滚动事件回调
	     *
	     * @property onScroll
	     * @type Function
	     * @param {e} event 滚动事件的回调，结构为: {contentOffset: {x: x, y: y}}
	     * @description (event) => void
	     *
	     * 滚动事件的回调。一旦设置了这个回调，为了能够监听滚动事件，会将useTransition属性强制设置为false，会由此带来一定的性能牺牲。
	     */
	    onScroll: _propTypes2.default.func,
	    /**
	     * 自动刷新高度
	     *
	     * @property autoRefresh
	     * @type Bool
	     * @description 默认为true,在componentDidUpdate的时候会自动刷新高度;如果设置为false,则在内容发生变化时，需要用户主动调用refresh方法来刷新高度。
	     * @default true
	     * @skip
	     */
	    autoRefresh: _propTypes2.default.bool,
	    /**
	     * 硬件加速
	     *
	     * @property HWCompositing
	     * @type Bool
	     * @description 是否开启硬件加速
	     * @default true
	     */
	    HWCompositing: _propTypes2.default.bool,
	    eventPassthrough: _propTypes2.default.bool,
	    /**
	     * @property preventDefault
	     * @type Bool
	     * @description 是否需要在Scroller容器上对所有的触摸事件（touchstart/touchmove/touchend/touchcancel）调用preventDefault。
	     * 这个属性的默认值为true，这是为了避免一些安卓的兼容性问题。如果你发现一些默认效果没有被触发（例如输入框的blur），可以尝试设置这个属性为false。
	     */
	    preventDefault: _propTypes2.default.bool,
	    preventDefaultException: _propTypes2.default.object,
	    stopPropagation: _propTypes2.default.bool,
	    /**
	     * 下拉刷新
	     *
	     * @property usePullRefresh
	     * @type Bool
	     * @description 是否开启下拉刷新功能
	     * @default false
	     * hasPullRefresh
	     */
	    usePullRefresh: _propTypes2.default.bool,
	    /**
	     * 下拉刷新事件回调
	     *
	     * @property onRefresh
	     * @type Function
	     * @param {e} event 结构为: ({contentOffset: {x: x, y: y}})
	     * @description (event) => void
	     *
	     * 下拉刷新时开始刷新的回调。
	     */
	    onRefresh: _propTypes2.default.func,
	    /**
	     * 下拉刷新高度
	     *
	     * @property pullRefreshHeight
	     * @type Number
	     * @description 触发下拉刷新状态的高度（一般即为下拉刷新提示区域的高度）
	     * @default 40
	     * 可以考虑不要
	     */
	    pullRefreshHeight: _propTypes2.default.number,
	    /**
	     * 下拉刷新渲染函数
	     *
	     * @property renderPullRefresh
	     * @type Function
	     * @returns {JSX} 用来渲染 pullRefresh 的 JSX
	     * @description () => JSX
	     *
	     * 自定义的下拉刷新渲染函数
	     */
	    renderPullRefresh: _propTypes2.default.func,
	    /**
	     * 加载更多
	     *
	     * @property useLoadMore
	     * @type Bool
	     * @description 是否开启加载更多功能.『加载更多』与『下拉刷新』略有不同，加载更多的提示区域是追加在内容区域的最后
	     * @default false
	     * hasLoadMore
	     */
	    useLoadMore: _propTypes2.default.bool,
	    /**
	     * 加载更多事件回调
	     *
	     * @property onLoad
	     * @type Function
	     * @param {e} event 结构为: ({contentOffset: {x: x, y: y}})
	     * @description (event) => void
	     *
	     * 加载更多时开始加载的回调。
	     */
	    onLoad: _propTypes2.default.func,
	    /**
	     * 加载更多高度
	     *
	     * @property loadMoreHeight
	     * @type Number
	     * @description 触发加载更多状态的高度（一般即为加载更多提示区域的高度）
	     * @default 40
	     */
	    loadMoreHeight: _propTypes2.default.number,
	    /**
	     * 加载更多渲染函数
	     *
	     * @property renderLoadMore
	     * @type Function
	     * @returns {JSX} 用来渲染 loadMore 的 JSX
	     * @description () => JSX
	     *
	     * 自定义的加载更多渲染函数
	     */
	    renderLoadMore: _propTypes2.default.func,
	    deceleration: _propTypes2.default.number,
	    wrapper: _propTypes2.default.object,
	    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string]),
	    style: _propTypes2.default.object,
	    /**
	     * @skip
	     * @property enableLazyLoad
	     * @type Bool
	     * @description 是否开启图片lazyload,默认为true
	     */
	    enableLazyLoad: _propTypes2.default.bool,
	    /**
	     * @property scrollWithoutTouchStart
	     * @type Bool
	     * @default false
	     * @description ** 实验中的属性 **
	     * 在默认情况下一次用户触发（非调用scrollTo方法）scroller的滚动需要由touchstart事件来启动，在某些情况下，例如scroller从disable状态切换到enable状态时，
	     * 可能不能接收到这一瞬间的touchstart事件，这可能导致用户期待的滚动过程没有发生。
	     * 开启这个属性为true以后将允许scroller用touchmove启动滚动过程，这可以解决上述场景的问题。
	     * @version 3.0.2
	     */
	    scrollWithoutTouchStart: _propTypes2.default.bool
	};

	var Scroller = function (_Component) {
	    _inherits(Scroller, _Component);

	    function Scroller(props) {
	        _classCallCheck(this, Scroller);

	        var _this = _possibleConstructorReturn(this, (Scroller.__proto__ || Object.getPrototypeOf(Scroller)).call(this, props));

	        _this.x = 0;
	        _this.y = 0;
	        _this.directionX = 0;
	        _this.directionY = 0;
	        _this._scrollerStyle = {};

	        _this._resetProps(props, true);

	        _this.childLazyImages = [];
	        _this.stickyHeaders = [];
	        _this.stickyIndex = null;
	        _this.stickyOffset = null;
	        _this.wrapperOffsetTop = null;
	        return _this;
	    }

	    _createClass(Scroller, [{
	        key: 'getChildContext',
	        value: function getChildContext() {
	            return { scroller: this, isScroller: this.props.enableLazyLoad };
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.wrapper = this.noWrapper ? this.wrapper : this.refs.wrapper;
	            this.scroller = this.refs.scroller;

	            // 重置 position 属性
	            if (!this.useTransform) {
	                if (!/relative|absolute/i.test(this._scrollerStyle)) {
	                    this._scrollerStyle.position = 'relative';
	                }
	            }

	            this.refresh();

	            this._setRefreshStatus(REFRESHSTATUS.PULL);
	            this._setLoadStatus(LOADSTATUS.PULL);
	            // 内容区域高度小于容器高度时，不需要再重新定位loadMore的位置，refresh内部已经定位正确
	            // this._refreshLoadMore();

	            this._resetPosition();
	            this.scrollTo(this.props.contentOffset.x, this.props.contentOffset.y);

	            this._resize = function () {
	                _this2.forceUpdate();
	            };

	            window.addEventListener('orientationchange', this._resize, false);
	            window.addEventListener('resize', this._resize, false);

	            this._tryLoadLazyImages();
	            this._refreshSticky(true);

	            if (this.stickyHeaders.length) {
	                this.useTransition = false;
	            }
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this._resetProps(nextProps);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps, prevState) {
	            // 重置 contentOffset
	            if (prevProps.contentOffset.x !== this.props.contentOffset.x || prevProps.contentOffset.y !== this.props.contentOffset.y) {
	                this.scrollTo(this.props.contentOffset.x, this.props.contentOffset.y);
	            }

	            // 重置 position 属性
	            if (!this.useTransform) {
	                if (!/relative|absolute/i.test(this._scrollerStyle)) {
	                    this._scrollerStyle.position = 'relative';
	                    this._setStyle(this.scroller, this._scrollerStyle);
	                }
	            }

	            // 重新获取容器和内容尺寸
	            if (this.props.autoRefresh) {
	                this.refresh();
	            }

	            // 重置 pullRefresh 和 loadMore
	            if (prevState.usePullRefresh !== this.state.usePullRefresh) {
	                this._setRefreshStatus(REFRESHSTATUS.PULL);
	            }
	            if (prevState.useLoadMore !== this.state.useLoadMore) {
	                this._setLoadStatus(LOADSTATUS.PULL);
	                this._refreshLoadMore();
	            }

	            if (this.stickyHeaders.length) {
	                this.useTransition = false;
	            }

	            this._tryLoadLazyImages();
	            this._refreshSticky(true);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.removeEventListener('orientationchange', this._resize, false);
	            window.removeEventListener('resize', this._resize, false);
	        }
	    }, {
	        key: '_resetProps',
	        value: function _resetProps(props, init) {
	            this.state = this.state || {};

	            // 重置 useTransition 和 useTransform
	            this.translateZ = props.HWCompositing && _utils2.default.hasPerspective ? ' translateZ(0)' : '';
	            this.useTransition = _utils2.default.hasTransition && props.useTransition;
	            this.useTransform = _utils2.default.hasTransform && props.useTransform;

	            if (props.onScroll) {
	                this.useTransition = false;
	            }

	            // 重置 scrollX 和 scrollY
	            this.eventPassthrough = props.eventPassthrough === true ? 'vertical' : props.eventPassthrough;
	            this.preventDefault = !this.eventPassthrough && props.preventDefault;
	            this.scrollY = this.eventPassthrough === 'vertical' ? false : props.scrollY;
	            this.scrollX = this.eventPassthrough === 'horizontal' ? false : props.scrollX;
	            this.verticalBounce = this.scrollY ? props.bounce : false;
	            this.horizontalBounce = this.scrollX ? props.bounce : false;

	            // 重置 下拉刷新 和 加载更多
	            if (init) {
	                this.state.usePullRefresh = this.scrollY && !this.scrollX && props.usePullRefresh;
	                this.state.useLoadMore = this.scrollY && !this.scrollX && props.useLoadMore;
	            } else {
	                this.setState({
	                    usePullRefresh: this.scrollY && !this.scrollX && props.usePullRefresh,
	                    useLoadMore: this.scrollY && !this.scrollX && props.useLoadMore
	                });
	            }

	            // 重置 wrapper（内容容器）
	            // 兼容 Qreact 用 getOnlyChild(props) 替代 props.children && !props.children.length
	            this.noWrapper = !!props.wrapper && (0, _util.getOnlyChild)(props) && !this.state.usePullRefresh && !this.state.useLoadMore;

	            if (this.noWrapper) {
	                this.wrapper = props.wrapper;
	            }

	            // 如果disable状态发生了变化，需要重置initiated
	            if (this.disabled !== props.disabled) {
	                this.initiated = 0;
	            }
	            // 重置 disabled
	            this.disabled = props.disabled;
	            this.freeScroll = props.freeScroll && !this.eventPassthrough;
	            this.directionLockThreshold = this.eventPassthrough ? 0 : props.directionLockThreshold;
	        }
	    }, {
	        key: '_handleTouchStart',
	        value: function _handleTouchStart(e) {
	            if (this.disabled || this.initiated && _utils2.default.eventType[e.type] !== this.initiated) {
	                return;
	            }

	            if (this.preventDefault && !_utils2.default.isBadAndroid && !_utils2.default.preventDefaultException(e.target, this.props.preventDefaultException)) {
	                e.preventDefault();
	            }
	            if (this.props.stopPropagation) {
	                e.stopPropagation();
	            }

	            var point = e.touches ? e.touches[0] : e;

	            this.initiated = _utils2.default.eventType[e.type];
	            this.moved = false;
	            this.distX = 0;
	            this.distY = 0;
	            this.directionX = 0;
	            this.directionY = 0;
	            this.directionLocked = 0;

	            this.startTime = _utils2.default.getTime();

	            this.stopAnimate();

	            this.startX = this.x;
	            this.startY = this.y;
	            this.absStartX = this.x;
	            this.absStartY = this.y;
	            this.pointX = point.pageX;
	            this.pointY = point.pageY;

	            // this._execEvent('beforeScrollStart');
	        }
	    }, {
	        key: '_handleTouchMove',
	        value: function _handleTouchMove(e) {
	            if (this.disabled) {
	                return;
	            }

	            if (_utils2.default.eventType[e.type] !== this.initiated) {
	                if (this.props.scrollWithoutTouchStart) {
	                    this._handleTouchStart(e);
	                } else {
	                    return;
	                }
	            }

	            if (this.preventDefault) {
	                // increases performance on Android? TODO: check!
	                e.preventDefault();
	            }

	            if (this.props.stopPropagation) {
	                e.stopPropagation();
	            }

	            var point = e.touches ? e.touches[0] : e;
	            var timestamp = _utils2.default.getTime();
	            var deltaX = point.pageX - this.pointX;
	            var deltaY = point.pageY - this.pointY;
	            var newX = void 0;
	            var newY = void 0;

	            this.pointX = point.pageX;
	            this.pointY = point.pageY;

	            this.distX += deltaX;
	            this.distY += deltaY;

	            var absDistX = Math.abs(this.distX);
	            var absDistY = Math.abs(this.distY);

	            // We need to move at least 10 pixels for the scrolling to initiate
	            if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
	                return;
	            }

	            // If you are scrolling in one direction lock the other
	            if (!this.directionLocked && !this.freeScroll) {
	                if (absDistX > absDistY + this.directionLockThreshold) {
	                    this.directionLocked = 'h'; // lock horizontally
	                } else if (absDistY >= absDistX + this.directionLockThreshold) {
	                    this.directionLocked = 'v'; // lock vertically
	                } else {
	                    this.directionLocked = 'n'; // no lock
	                }
	            }

	            if (this.directionLocked === 'h') {
	                if (this.eventPassthrough === 'vertical') {
	                    e.preventDefault();
	                } else if (this.eventPassthrough === 'horizontal') {
	                    this.initiated = false;
	                    return;
	                }

	                deltaY = 0;
	            } else if (this.directionLocked === 'v') {
	                if (this.eventPassthrough === 'horizontal') {
	                    e.preventDefault();
	                } else if (this.eventPassthrough === 'vertical') {
	                    this.initiated = false;
	                    return;
	                }

	                deltaX = 0;
	            }

	            newX = this.x + deltaX;
	            newY = this.y + deltaY;

	            // Slow down if outside of the boundaries
	            if (newX > 0) {
	                newX = this.horizontalBounce ? this.x + deltaX / 3 : 0;
	            } else if (newX < this.maxScrollX) {
	                newX = this.horizontalBounce ? this.x + deltaX / 3 : this.maxScrollX;
	            }

	            if (newY > 0) {
	                newY = this.verticalBounce ? this.y + deltaY / 3 : 0;
	            } else if (newY < this.maxScrollY) {
	                newY = this.verticalBounce ? this.y + deltaY / 3 : this.maxScrollY;
	            }

	            if (deltaX > 0) {
	                this.directionX = -1;
	            } else if (deltaX < 0) {
	                this.directionX = 1;
	            } else {
	                this.directionX = 0;
	            }

	            if (deltaY > 0) {
	                this.directionY = -1;
	            } else if (deltaY < 0) {
	                this.directionY = 1;
	            } else {
	                this.directionY = 0;
	            }

	            if (!this.moved) {
	                this._execEvent('onScrollStart');
	            }

	            this.moved = true;

	            this._translate(newX, newY);

	            if (timestamp - this.startTime > 300) {
	                this.startTime = timestamp;
	                this.startX = this.x;
	                this.startY = this.y;
	            }

	            this._execEvent('onScroll');
	        }
	    }, {
	        key: '_handleTouchEnd',
	        value: function _handleTouchEnd(e) {
	            if (this.disabled || _utils2.default.eventType[e.type] !== this.initiated) {
	                return;
	            }

	            if (this.preventDefault && !_utils2.default.preventDefaultException(e.target, this.props.preventDefaultException)) {
	                e.preventDefault();
	            }

	            if (this.props.stopPropagation) {
	                e.stopPropagation();
	            }

	            var momentumX = void 0;
	            var momentumY = void 0;
	            var duration = _utils2.default.getTime() - this.startTime;
	            var newX = Math.round(this.x);
	            var newY = Math.round(this.y);
	            var time = 0;

	            this.isInTransition = 0;
	            this.initiated = 0;
	            this.endTime = _utils2.default.getTime();

	            // set pullrefresh
	            if (this.state.usePullRefresh && this.y >= this.props.pullRefreshHeight) {
	                if (this.refreshState === REFRESHSTATUS.LOAD) {
	                    this.scrollTo(this.x, this.props.pullRefreshHeight, 200);
	                } else {
	                    this._setRefreshStatus(REFRESHSTATUS.LOAD);
	                    this.scrollTo(this.x, this.props.pullRefreshHeight, 300);
	                    this._execEvent('onRefresh');
	                }
	                return;
	            }

	            // set loadmore
	            // jiao.shen:此处将y<=max改成了y<max
	            // 因为如果scroller正好滚到下边缘停住的时候,这时候如果scroller render,就会立刻触发loadmore,和使用习惯不符
	            if (this.state.useLoadMore && this.y < this.maxScrollY) {
	                if (this.loadState !== LOADSTATUS.NOMORE && this.loadState !== LOADSTATUS.LOAD) {
	                    this._setLoadStatus(LOADSTATUS.LOAD);
	                    this._execEvent('onLoad');
	                }
	            }

	            // reset if we are outside of the boundaries
	            if (this._resetPosition(this.props.bounceTime)) {
	                return;
	            }

	            this.scrollTo(newX, newY); // ensures that the last position is rounded

	            if (!this.moved) {
	                this._execEvent('onScrollCancel');
	                return;
	            }

	            // start momentum animation if needed
	            if (this.props.momentum && duration < 300) {
	                momentumX = this.hasHorizontalScroll ? _utils2.default.momentum(this.x, this.startX, duration, this.maxScrollX, this.horizontalBounce ? this.wrapperWidth : 0, this.props.deceleration) : {
	                    destination: newX,
	                    duration: 0
	                };
	                momentumY = this.hasVerticalScroll ? _utils2.default.momentum(this.y, this.startY, duration, this.maxScrollY, this.verticalBounce ? this.wrapperHeight : 0, this.props.deceleration) : {
	                    destination: newY,
	                    duration: 0
	                };
	                newX = momentumX.destination;
	                newY = momentumY.destination;
	                time = Math.max(momentumX.duration, momentumY.duration);
	                this.isInTransition = 1;
	            }

	            if (newX !== this.x || newY !== this.y) {
	                var easing = void 0;

	                // change easing function when scroller goes out of the boundaries
	                if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
	                    easing = _utils2.default.ease.quadratic;
	                }

	                this.scrollTo(newX, newY, time, easing);
	                this._execEvent('onMomentumScrollBegin', {
	                    targetX: newX,
	                    targetY: newY
	                });
	                return;
	            }

	            this._execEvent('onScrollEnd');
	        }
	    }, {
	        key: '_handleTransitionEnd',
	        value: function _handleTransitionEnd(e) {
	            if (e.target !== this.scroller || !this.isInTransition) {
	                return;
	            }

	            this._transitionTime();
	            if (!this._resetPosition(this.props.bounceTime)) {
	                this.isInTransition = false;
	                this._execEvent('onScrollEnd');
	            }
	        }

	        /**
	         * 尝试加载处于可视区域内的lazyimage
	         * @param y
	         */

	    }, {
	        key: '_tryLoadLazyImages',
	        value: function _tryLoadLazyImages() {
	            var _this3 = this;

	            if (this.childLazyImages.length) {
	                this.childLazyImages.forEach(function (img) {
	                    return _this3.loadImage(img);
	                });
	            }
	        }

	        /**
	         * @method loadImage
	         * @param img LazyImage 实例
	         * @description 判断并决定是否加载 LazyImage
	         * @skip
	         */

	    }, {
	        key: 'loadImage',
	        value: function loadImage(img) {
	            var self = this;
	            var _top = img.offsetTop - this.wrapperOffsetTop + this.y;
	            if (_top < self.wrapperHeight) {
	                // 出现在当前可视区域和可视区域上方都加载
	                img.load(function () {
	                    var _height = img.props.style && img.props.style.height ? img.props.style.height : img.props.height;
	                    if (!_height) {
	                        // 如果设置了高度，就不再重新刷新
	                        self.refresh();
	                    }
	                });
	            }
	        }
	    }, {
	        key: '_getCurrentSticky',
	        value: function _getCurrentSticky() {
	            var stickyOffset = this.props.stickyOffset;

	            var ret = null;
	            if (this.y < 0) {
	                var absY = Math.abs(this.y - stickyOffset);
	                var wrapperTop = this.wrapperOffsetTop;
	                var upperHeaders = this.stickyHeaders.filter(function (header) {
	                    return header.offsetTop - wrapperTop <= absY;
	                });

	                if (upperHeaders.length) {
	                    var currentHeader = upperHeaders[upperHeaders.length - 1];
	                    var nextHeader = this.stickyHeaders[upperHeaders.length];
	                    var index = upperHeaders.length - 1;
	                    if (nextHeader) {
	                        var distToNext = nextHeader.offsetTop - wrapperTop - absY;
	                        var adjustOffset = distToNext > currentHeader.height ? 0 : -(currentHeader.height - distToNext);
	                        ret = { currentHeader: currentHeader, adjustOffset: adjustOffset, index: index };
	                    } else {
	                        ret = { currentHeader: currentHeader, adjustOffset: 0, index: index };
	                    }
	                } else {
	                    ret = null;
	                }
	            } else {
	                ret = null;
	            }
	            return ret;
	        }
	    }, {
	        key: '_refreshSticky',
	        value: function _refreshSticky(forceRefresh) {
	            if (this.stickyHeaders.length) {
	                var currentSticky = this._getCurrentSticky();
	                var stickyNode = this.refs.stickyNode;

	                if (currentSticky) {
	                    var currentHeader = currentSticky.currentHeader,
	                        adjustOffset = currentSticky.adjustOffset;


	                    if (currentSticky.index !== this.stickyIndex || currentSticky.adjustOffset !== this.stickyOffset || forceRefresh) {
	                        var transform = 'translate(0px,' + adjustOffset + 'px) translateZ(0px)';
	                        stickyNode.style.transform = transform;
	                        stickyNode.style.webkitTransform = transform;
	                        stickyNode.style.display = 'block';
	                        stickyNode.className = currentHeader.stickyExtraClass;
	                        _reactDom2.default.render(_react2.default.cloneElement(currentHeader.onlyChild), stickyNode);

	                        this.stickyIndex = currentSticky.index;
	                        this.stickyOffset = currentSticky.adjustOffset;
	                    }
	                } else {
	                    this.stickyIndex = null;
	                    this.stickyOffset = null;
	                    stickyNode.style.display = 'none';
	                }
	            }
	        }

	        /**
	         * @method stopAnimate
	         * @description 停止当前的滚动动画，包括：惯性滚动、回弹、ScrollTo等。
	         */

	    }, {
	        key: 'stopAnimate',
	        value: function stopAnimate() {
	            if (this.useTransition && this.isInTransition) {
	                this._transitionTime();
	                this.isInTransition = false;

	                var pos = this._getComputedPosition();

	                this._translate(Math.round(pos.x), Math.round(pos.y));
	                this._execEvent('onScrollEnd');
	            } else if (!this.useTransition && this.isAnimating) {
	                this._execEvent('onScrollEnd');
	                cancelrAF(this.rAF);

	                this.isAnimating = false;
	            }
	        }

	        /**
	         * @method _getComputedPosition
	         * @returns {Object} 当前内容区域位移，{x: x, y: y}
	         * @description 获取当前内容区域的位移
	         * @skip
	         */

	    }, {
	        key: '_getComputedPosition',
	        value: function _getComputedPosition() {
	            var matrix = window.getComputedStyle(this.scroller, null);
	            var x = void 0;
	            var y = void 0;

	            if (this.useTransform) {
	                matrix = matrix[_utils2.default.style.transform].split(')')[0].split(', ');
	                x = +(matrix[12] || matrix[4]);
	                y = +(matrix[13] || matrix[5]);
	            } else {
	                x = +matrix.left.replace(/[^-\d.]/g, '');
	                y = +matrix.top.replace(/[^-\d.]/g, '');
	            }

	            return { x: x, y: y };
	        }

	        /**
	         * @method _execEvent
	         * @param {string} eventType 事件类型
	         * @param {Object} param 参数
	         * @description 触发事件回调
	         * @skip
	         */

	    }, {
	        key: '_execEvent',
	        value: function _execEvent(eventType, param) {
	            // console.log(eventType)
	            if (eventType === 'onScroll' || eventType === 'onScrollEnd') {
	                this._tryLoadLazyImages();
	                this._refreshSticky();
	            }
	            if (eventType === 'onScrollStart') {
	                this.isScrolling = true;
	            }
	            if (eventType === 'onScrollEnd') {
	                this.isScrolling = false;
	            }
	            if (this.props[eventType]) {
	                this.props[eventType].apply(this, [{
	                    contentOffset: {
	                        x: this.x,
	                        y: this.y
	                    },
	                    param: param
	                }]);
	            }
	        }

	        /**
	         * @method refresh
	         * @param {Object} [refreshOption] 刷新参数，{wrapperWidth, wrapperHeight, scrollerWidth, scrollerHeight}
	         * @description 刷新 Scroller，一般场景**不推荐使用**，因为当内容改变的时候，Scroller 会自动 render。
	         *
	         * 使用场景1：需要强制设置 Scroller 本身的宽高和内容容器的宽高时，可以通过refreshOption来传入宽高代替dom的宽高。
	         *
	         * 使用场景2：在某些不是通过 setState 或 Redux 等方式来改变内容导致 Scroller 不会 render 时，可以强制重新获取Scroller宽高和内容容器宽高。
	         */

	    }, {
	        key: 'refresh',
	        value: function refresh() {
	            var refreshOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	            var callFromList = arguments[1];

	            if (!callFromList) {
	                this.wrapperWidth = typeof refreshOption.wrapperWidth !== 'undefined' ? refreshOption.wrapperWidth : this.wrapper.clientWidth;
	                this.wrapperHeight = typeof refreshOption.wrapperHeight !== 'undefined' ? refreshOption.wrapperHeight : this.wrapper.clientHeight;
	                this.scrollerWidth = typeof refreshOption.scrollerWidth !== 'undefined' ? refreshOption.scrollerWidth : this.scroller.offsetWidth;

	                if (this.refs.wrapper) {
	                    this.wrapperOffsetTop = (0, _util.getElementOffsetY)(this.refs.wrapper, null);
	                }
	            }

	            this.scrollerHeight = typeof refreshOption.scrollerHeight !== 'undefined' ? refreshOption.scrollerHeight : this.scroller.offsetHeight;

	            // 如果有下拉刷新，设置下拉刷新的位置，重置scrollerHeight
	            if (this.state.useLoadMore && this.refs.LoadMore) {
	                this.refs.LoadMore.style.visibility = this.scrollerHeight > 0 ? 'visible' : 'hidden';
	                this.refs.LoadMore.style.top = this.scrollerHeight + 'px';
	                this.scrollerHeight += this.props.loadMoreHeight;
	            }

	            this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
	            this.maxScrollY = this.wrapperHeight - this.scrollerHeight;

	            this.hasHorizontalScroll = this.props.scrollX && this.maxScrollX < 0;
	            this.hasVerticalScroll = this.props.scrollY && this.maxScrollY < 0;

	            if (!this.hasHorizontalScroll) {
	                this.maxScrollX = 0;
	                this.scrollerWidth = this.wrapperWidth;
	            }

	            if (!this.hasVerticalScroll) {
	                this.maxScrollY = 0;
	                this.scrollerHeight = this.wrapperHeight;
	            }

	            this.endTime = 0;
	            this.directionX = 0;
	            this.directionY = 0;
	        }

	        /**
	         * @method refreshLazyImage
	         * @version 3.0.12
	         * @description 刷新 Scroller 中的 LazyImage。
	         *
	         * 使用场景：在某些不是通过 setState 或 Redux 等方式来**直接改变** Scroller 的内容导致 Scroller 不会 render 时，由于内容宽高发生了变化，需要通过本方法来刷新 LazyImage 的位置信息。
	         */

	    }, {
	        key: 'refreshLazyImage',
	        value: function refreshLazyImage() {
	            this._tryLoadLazyImages();
	        }

	        /**
	         * @method _resetPosition
	         * @param {Number} [time] 滚动到临界点的时间
	         * @description 校正当前内容的位置，如果超出了可滚动的范围，则滚动到临界点。主要用于回弹。
	         * @skip
	         */

	    }, {
	        key: '_resetPosition',
	        value: function _resetPosition(time) {
	            var x = this.x;
	            var y = this.y;
	            var animateTime = time || 0;

	            if (this.refreshState === REFRESHSTATUS.LOAD && this.y === this.props.pullRefreshHeight) {
	                return false;
	            }

	            if (!this.hasHorizontalScroll || this.x > 0) {
	                x = 0;
	            } else if (this.x < this.maxScrollX) {
	                x = this.maxScrollX;
	            }

	            if (!this.hasVerticalScroll || this.y > 0) {
	                y = 0;
	            } else if (this.y < this.maxScrollY) {
	                y = this.maxScrollY;
	            }

	            if (x === this.x && y === this.y) {
	                return false;
	            }

	            this.scrollTo(x, y, animateTime, this.props.bounceEasing);

	            return true;
	        }

	        /**
	         * @method scrollTo
	         * @param {Number} x 水平位移，默认值为当前水平位移
	         * @param {Number} y 垂直位移，默认值为当前垂直位移
	         * @param {Number} time 滚动时间，默认值为0
	         * @param {Object} [easing] 滚动动画对象。参照 `bounceEasing` 参数。
	         *
	         * @description 滚动到某个位置。
	         */

	    }, {
	        key: 'scrollTo',
	        value: function scrollTo() {
	            var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.x;
	            var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.y;
	            var time = arguments[2];
	            var easing = arguments[3];
	            // TODO: 给scrollTo加上回调，由于transitionend事件并不能针对某一次的transition，所以暂时不好处理
	            var _easing = easing || _utils2.default.ease.circular;
	            var transitionType = this.useTransition && _easing.style;

	            this.isInTransition = this.useTransition && time > 0;

	            if (!time || transitionType) {
	                if (transitionType) {
	                    this._transitionTimingFunction(_easing.style);
	                    this._transitionTime(time);
	                }
	                this._translate(x, y);
	            } else {
	                this._animate(x, y, time, _easing.fn);
	            }
	            // 由于scrollto不会触发onScroll事件，因此这里需要手动刷新一下sticky
	            this._refreshSticky(true);
	            this._tryLoadLazyImages();
	        }
	    }, {
	        key: '_transitionTimingFunction',
	        value: function _transitionTimingFunction(easing) {
	            this._scrollerStyle[_utils2.default.style.transitionTimingFunction] = easing;
	        }
	    }, {
	        key: '_transitionTime',
	        value: function _transitionTime(time) {
	            var _this4 = this;

	            var _time = time || 0;
	            var durationProp = _utils2.default.style.transitionDuration;
	            if (!this.useTransition) {
	                return;
	            }

	            if (!durationProp) {
	                return;
	            }
	            this._scrollerStyle[durationProp] = _time + 'ms';

	            if (!_time && _utils2.default.isBadAndroid) {
	                this._scrollerStyle[durationProp] = '0.0001ms';

	                // remove 0.0001ms
	                rAF(function () {
	                    if (_this4._scrollerStyle[durationProp] === '0.0001ms') {
	                        _this4._scrollerStyle[durationProp] = '0s';
	                    }
	                });
	            }

	            this._setStyle(this.scroller, this._scrollerStyle);
	        }
	    }, {
	        key: '_setStyle',
	        value: function _setStyle(dom, style) {
	            var _style = Object.assign({}, style);
	            var _dom = dom;

	            Object.keys(_style).forEach(function (key) {
	                _dom.style[key] = _style[key];
	            });
	        }
	    }, {
	        key: '_translate',
	        value: function _translate(x, y) {
	            if (this.useTransform) {
	                this._scrollerStyle[_utils2.default.style.transform] = 'translate(' + x + 'px,' + y + 'px)' + this.translateZ;

	                this.x = x;
	                this.y = y;

	                this._setStyle(this.scroller, this._scrollerStyle);
	            } else {
	                var _x = Math.round(x);
	                var _y = Math.round(y);

	                this._scrollerStyle.left = _x + 'px';
	                this._scrollerStyle.top = _y + 'px';

	                this.x = _x;
	                this.y = _y;

	                this._setStyle(this.scroller, this._scrollerStyle);
	            }

	            if (this.state.usePullRefresh) {
	                if (y >= this.props.pullRefreshHeight && this.refreshState === REFRESHSTATUS.PULL) {
	                    this._setRefreshStatus(REFRESHSTATUS.RELEASE);
	                } else if (y < this.props.pullRefreshHeight && this.refreshState === REFRESHSTATUS.RELEASE) {
	                    this._setRefreshStatus(REFRESHSTATUS.PULL);
	                }
	            }

	            if (this.state.useLoadMore) {
	                if (this.maxScrollY - y > 0 && this.loadState === LOADSTATUS.PULL) {
	                    // this._setRefreshStatus(LOADSTATUS.RELEASE);
	                    this._setLoadStatus(LOADSTATUS.RELEASE);
	                } else if (this.maxScrollY - y <= 0 && this.loadState === LOADSTATUS.RELEASE) {
	                    // this._setRefreshStatus(LOADSTATUS.PULL);
	                    this._setLoadStatus(LOADSTATUS.PULL);
	                }
	            }
	        }
	    }, {
	        key: '_animate',
	        value: function _animate(destX, destY, duration, easingFn) {
	            var _this5 = this;

	            var self = this;
	            var startX = this.x;
	            var startY = this.y;
	            var startTime = _utils2.default.getTime();
	            var destTime = startTime + duration;

	            var step = function step() {
	                var now = _utils2.default.getTime();
	                var easing = easingFn((now - startTime) / duration);
	                var newX = (destX - startX) * easing + startX;
	                var newY = (destY - startY) * easing + startY;

	                if (now >= destTime) {
	                    self.isAnimating = false;
	                    self._translate(destX, destY);

	                    if (!self._resetPosition(self.props.bounceTime)) {
	                        self._execEvent('onScrollEnd');
	                    }

	                    return;
	                }

	                self._translate(newX, newY);

	                _this5._execEvent('onScroll');

	                if (self.isAnimating) {
	                    cancelrAF(self.rAF);
	                    self.rAF = rAF(step);
	                }
	            };

	            this.isAnimating = true;
	            step();
	        }
	    }, {
	        key: '_setRefreshStatus',
	        value: function _setRefreshStatus(status) {
	            var _this6 = this;

	            if (!this.state.usePullRefresh) {
	                return;
	            }

	            var _prevRefreshState = this.refreshState;
	            this.refreshState = status;

	            Object.keys(REFRESHSTATUS).forEach(function (item) {
	                var _ref = REFRESHSTATUS[item];
	                if (_this6.refs[_ref]) {
	                    _this6.refs[_ref].style.display = status === _ref ? '' : 'none';
	                }
	            });

	            var releaseIcon = this.refs[REFRESHSTATUS.RELEASE].querySelector('i');
	            var pullIcon = this.refs[REFRESHSTATUS.PULL].querySelector('i');

	            // todo: 为啥用了react之后，这个地方需要setTimeout才能正常动画
	            setTimeout(function () {
	                if (_prevRefreshState === REFRESHSTATUS.PULL && status === REFRESHSTATUS.RELEASE) {
	                    releaseIcon.style[_utils2.default.style.transform] = '';
	                    pullIcon.style[_utils2.default.style.transform] = 'rotate(180deg)';
	                } else {
	                    releaseIcon.style[_utils2.default.style.transform] = 'rotate(-180deg)';
	                    pullIcon.style[_utils2.default.style.transform] = '';
	                }
	            }, 0);
	        }
	    }, {
	        key: '_setLoadStatus',
	        value: function _setLoadStatus(status) {
	            var _this7 = this;

	            if (!this.state.useLoadMore) {
	                return;
	            }

	            var _prevLoadState = this.loadState;
	            this.loadState = status;

	            Object.keys(LOADSTATUS).forEach(function (item) {
	                var _ref = LOADSTATUS[item];
	                if (_this7.refs[_ref]) {
	                    _this7.refs[_ref].style.display = status === _ref ? '' : 'none';
	                }
	            });

	            var releaseIcon = this.refs[LOADSTATUS.RELEASE].querySelector('i');
	            var pullIcon = this.refs[LOADSTATUS.PULL].querySelector('i');

	            // todo: 为啥用了react之后，这个地方需要setTimeout才能正常动画
	            setTimeout(function () {
	                if (_prevLoadState === LOADSTATUS.PULL && status === LOADSTATUS.RELEASE) {
	                    releaseIcon.style[_utils2.default.style.transform] = '';
	                    pullIcon.style[_utils2.default.style.transform] = 'rotate(180deg)';
	                } else {
	                    releaseIcon.style[_utils2.default.style.transform] = 'rotate(-180deg)';
	                    pullIcon.style[_utils2.default.style.transform] = '';
	                }
	            }, 0);
	        }

	        /**
	         * @method resetLoadStatus
	         * @param {Bool} hasLoadMore 是否能够加载更多，如果传入false，加载更多区域的文字将会变成 没有更多了，并且继续向下滚动时不会触发onLoadMore。
	         * @description 重置加载更多功能。
	         * @version 3.0.7
	         */

	    }, {
	        key: 'resetLoadStatus',
	        value: function resetLoadStatus(hasLoadMore) {
	            this._setLoadStatus(hasLoadMore ? LOADSTATUS.PULL : LOADSTATUS.NOMORE);
	        }

	        /**
	         * @method startRefreshing
	         * @param {Number} [time] 滚动到顶部的时间，默认为 300ms
	         * @description 强制开始刷新。这个方法一般是用在切换筛选项或者关键字等场景，来达到回到顶部并且开始刷新的效果。如果是用户下拉触发 `onRefresh` 时，就不需要再调用这个方法了。
	         */

	    }, {
	        key: 'startRefreshing',
	        value: function startRefreshing() {
	            var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;

	            if (this.state.usePullRefresh && this.refreshState !== REFRESHSTATUS.LOAD) {
	                this._setRefreshStatus(REFRESHSTATUS.LOAD);
	                this.scrollTo(this.x, this.props.pullRefreshHeight, time);

	                this._execEvent('onRefresh');
	            }
	        }

	        /**
	         * @method stopRefreshing
	         * @param {Bool} status 刷新的状态。true表示加载成功，false表示加载失败。
	         * @param {Object} [config] 停止刷新的动画配置
	         * @param {number} [config.duration] 回到顶部的动画时间，默认是300ms
	         * @description 停止刷新，停止之后会自动滚动到顶部。
	         */

	    }, {
	        key: 'stopRefreshing',
	        value: function stopRefreshing(status) {
	            var _this8 = this;

	            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { duration: 300 };

	            if (this.state.usePullRefresh && this.refreshState === REFRESHSTATUS.LOAD) {
	                this._setRefreshStatus(status ? REFRESHSTATUS.SUCCESS : REFRESHSTATUS.FAIL);

	                // 方案一：放在scrollTo的回调中处理状态，但是scrollTo的回调有时候会有问题；可以通过this.disabled = true 来禁止滚动解决现有的问题
	                // this.scrollTo(this.x, 0, 300, null, ()=>{
	                //     this._setRefreshStatus(REFRESHSTATUS.PULL);
	                // });

	                // 方案二：setTimeout的方式，但是不准确，尤其是在比较卡的机器上
	                this.scrollTo(this.x, 0, config.duration);
	                this.disabled = true;
	                setTimeout(function () {
	                    _this8._setRefreshStatus(REFRESHSTATUS.PULL);
	                    _this8._setLoadStatus(LOADSTATUS.PULL);
	                    _this8.disabled = false;
	                }, config.duration);
	            }
	        }

	        /**
	         * @method stopLoading
	         * @param {Bool} status 刷新的状态。true表示加载了更多数据，false表示没有更多数据了。
	         * @description 停止加载更多。
	         */

	    }, {
	        key: 'stopLoading',
	        value: function stopLoading(status) {
	            if (this.state.useLoadMore && this.loadState === LOADSTATUS.LOAD) {
	                this._setLoadStatus(status ? LOADSTATUS.PULL : LOADSTATUS.NOMORE);
	            }
	        }

	        /**
	         * @method _refreshLoadMore
	         * @skip
	         * @private
	         * @description 更新useLoadMore属性时的逻辑（该逻辑必须放到refresh之后，因为refresh才会计算的到正确的scrollerHeight）
	         *
	         * 1. 如果是去掉useLoadMore，需要重新设置位置（因为scrollerHeight变少了）
	         * 2. 如果是加上useLoadMore，需要设置LoadMore的位置（此时的scrollerHeight是包括loadMoreHeight的，所以需要减去loadMoreHHeight）
	         */

	    }, {
	        key: '_refreshLoadMore',
	        value: function _refreshLoadMore() {
	            if (!this.state.useLoadMore) {
	                this._resetPosition();
	            } else {
	                if (this.refs.LoadMore) {
	                    this.refs.LoadMore.style.top = this.scrollerHeight - this.props.loadMoreHeight + 'px';
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this9 = this;

	            var _props = this.props,
	                extraClass = _props.extraClass,
	                containerExtraClass = _props.containerExtraClass,
	                pullRefreshHeight = _props.pullRefreshHeight,
	                loadMoreHeight = _props.loadMoreHeight,
	                stickyOffset = _props.stickyOffset;

	            var pullRefreshContent = void 0;
	            var loadMoreContent = void 0;

	            if (this.state.usePullRefresh) {
	                var pullRefreshTpl = _react2.default.createElement(
	                    'div',
	                    {
	                        ref: 'pullrefresh',
	                        className: 'yo-load',
	                        style: {
	                            height: pullRefreshHeight + 'px',
	                            lineHeight: pullRefreshHeight + 'px',
	                            top: -pullRefreshHeight + 'px'
	                        }
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'pullrefresh_pull' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico' },
	                            '\uF07B'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u4E0B\u62C9\u53EF\u4EE5\u5237\u65B0'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'pullrefresh_release' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico' },
	                            '\uF079'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u91CA\u653E\u7ACB\u5373\u66F4\u65B0'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'pullrefresh_load' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico yo-ico-loading' },
	                            '\uF089'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u52AA\u529B\u52A0\u8F7D\u4E2D...'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'pullrefresh_success' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico yo-ico-succ' },
	                            '\uF078'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u52A0\u8F7D\u6210\u529F'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'pullrefresh_fail' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico yo-ico-fail' },
	                            '\uF077'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u52A0\u8F7D\u5931\u8D25'
	                        )
	                    )
	                );

	                pullRefreshContent = this.props.renderPullRefresh ? this.props.renderPullRefresh() : pullRefreshTpl;
	            }

	            if (this.state.useLoadMore) {
	                var loadMoreTpl = _react2.default.createElement(
	                    'div',
	                    {
	                        ref: 'LoadMore',
	                        className: 'yo-load',
	                        style: {
	                            height: loadMoreHeight + 'px',
	                            lineHeight: loadMoreHeight + 'px',
	                            top: -loadMoreHeight + 'px'
	                        }
	                    },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'loadmore_pull' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico' },
	                            '\uF079'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u4E0A\u62C9\u52A0\u8F7D\u66F4\u591A'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'loadmore_release' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico' },
	                            '\uF07B'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u91CA\u653E\u7ACB\u5373\u52A0\u8F7D'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'loadmore_load' },
	                        _react2.default.createElement(
	                            'i',
	                            { className: 'yo-ico yo-ico-loading' },
	                            '\uF089'
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u6B63\u5728\u52A0\u8F7D...'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'yo-loadtip', ref: 'loadmore_nomore' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text' },
	                            '\u6CA1\u6709\u66F4\u591A\u4E86...'
	                        )
	                    )
	                );

	                loadMoreContent = this.props.renderLoadMore ? this.props.renderLoadMore() : loadMoreTpl;
	            }

	            var wrapperStyle = Object.assign({ overflow: 'hidden' }, this.props.style);
	            var scrollerStyle = Object.assign({}, this.props.containerExtraStyle, this._scrollerStyle);
	            var scrollerContent = void 0;
	            var _wrapperClassName = (0, _classnames2.default)('yo-scroller', extraClass);
	            var _scrollerClassName = (0, _classnames2.default)('scroller', containerExtraClass);

	            // 兼容 Qreact
	            var theOnlyChild = (0, _util.getOnlyChild)(this.props);

	            if (this.noWrapper) {
	                // 1. 不需要滚动容器（只适用于特殊的、内容的宽高已知的情况）
	                scrollerContent = _react2.default.cloneElement(this.props.children, {
	                    ref: 'scroller',
	                    onTouchStart: function onTouchStart(evt) {
	                        return _this9._handleTouchStart(evt);
	                    },
	                    onTouchMove: function onTouchMove(evt) {
	                        return _this9._handleTouchMove(evt);
	                    },
	                    onTouchEnd: function onTouchEnd(evt) {
	                        return _this9._handleTouchEnd(evt);
	                    },
	                    onTouchCancel: function onTouchCancel(evt) {
	                        return _this9._handleTouchEnd(evt);
	                    },
	                    onTransitionEnd: function onTransitionEnd(evt) {
	                        return _this9._handleTransitionEnd(evt);
	                    }
	                });
	                // 兼容 Qreact
	            } else if (theOnlyChild && typeof theOnlyChild.type === 'string' && !this.state.usePullRefresh && !this.state.useLoadMore) {
	                // 2. 将内容的最外层节点当做滚动容器
	                if (theOnlyChild.props && theOnlyChild.props.className) {
	                    _scrollerClassName = (0, _classnames2.default)('scroller', theOnlyChild.props.className);
	                } else {
	                    _scrollerClassName = 'scroller';
	                }

	                var content = _react2.default.cloneElement(theOnlyChild, {
	                    ref: 'scroller',
	                    className: _scrollerClassName,
	                    style: scrollerStyle
	                });

	                scrollerContent = _react2.default.createElement(
	                    'div',
	                    {
	                        ref: 'wrapper',
	                        className: _wrapperClassName,
	                        onTouchStart: function onTouchStart(evt) {
	                            return _this9._handleTouchStart(evt);
	                        },
	                        onTouchMove: function onTouchMove(evt) {
	                            return _this9._handleTouchMove(evt);
	                        },
	                        onTouchEnd: function onTouchEnd(evt) {
	                            return _this9._handleTouchEnd(evt);
	                        },
	                        onTouchCancel: function onTouchCancel(evt) {
	                            return _this9._handleTouchEnd(evt);
	                        },
	                        onTransitionEnd: function onTransitionEnd(evt) {
	                            return _this9._handleTransitionEnd(evt);
	                        },
	                        style: wrapperStyle
	                    },
	                    _react2.default.createElement('div', {
	                        ref: 'stickyNode',
	                        style: { position: 'absolute', top: stickyOffset, left: 0, right: 0, zIndex: 9999 },
	                        className: 'sticky'
	                    }),
	                    content
	                );
	            } else {
	                // 3. 在内容的外面加一层滚动容器
	                scrollerContent = _react2.default.createElement(
	                    'div',
	                    {
	                        ref: 'wrapper',
	                        className: _wrapperClassName,
	                        onTouchStart: function onTouchStart(evt) {
	                            return _this9._handleTouchStart(evt);
	                        },
	                        onTouchMove: function onTouchMove(evt) {
	                            return _this9._handleTouchMove(evt);
	                        },
	                        onTouchEnd: function onTouchEnd(evt) {
	                            return _this9._handleTouchEnd(evt);
	                        },
	                        onTouchCancel: function onTouchCancel(evt) {
	                            return _this9._handleTouchEnd(evt);
	                        },
	                        onTransitionEnd: function onTransitionEnd(evt) {
	                            return _this9._handleTransitionEnd(evt);
	                        },
	                        style: wrapperStyle
	                    },
	                    _react2.default.createElement('div', {
	                        ref: 'stickyNode',
	                        style: { position: 'absolute', top: stickyOffset, left: 0, right: 0, zIndex: 9999 },
	                        className: 'sticky'
	                    }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: _scrollerClassName, ref: 'scroller', style: scrollerStyle },
	                        this.props.children,
	                        pullRefreshContent,
	                        loadMoreContent
	                    )
	                );
	            }

	            return scrollerContent;
	        }
	    }]);

	    return Scroller;
	}(_react.Component);

	Scroller.ease = _utils2.default.ease;
	Scroller.childContextTypes = {
	    scroller: _propTypes2.default.object,
	    isScroller: _propTypes2.default.bool
	};
	exports.default = Scroller;


	Scroller.defaultProps = defaultProps;
	Scroller.propTypes = propTypes;
	Scroller.Sticky = _sticky2.default;
	Scroller.LazyImage = _lazyimage2.default;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(286)();
	}


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(62);
	var invariant = __webpack_require__(65);
	var ReactPropTypesSecret = __webpack_require__(79);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 287 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var utils = function () {
	    var me = {};
	    var _elementStyle = document.createElement('div').style;

	    var _vendor = function () {
	        var vendors = ['t', 'WebkitT', 'MozT', 'msT', 'OT'];
	        var transform = void 0;

	        for (var i = 0, l = vendors.length; i < l; i++) {
	            transform = vendors[i] + 'ransform';
	            if (transform in _elementStyle) {
	                return vendors[i].substr(0, vendors[i].length - 1);
	            }
	        }

	        return false;
	    }();

	    var _prefixStyle = function _prefixStyle(style) {
	        if (_vendor === false) {
	            return false;
	        }
	        if (_vendor === '') {
	            return style;
	        }
	        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	    };

	    me.getTime = Date.now || function getTime() {
	        return new Date().getTime();
	    };

	    me.getRAF = function () {
	        function basicRAF(callback) {
	            return window.setTimeout(callback, 1000 / 60);
	        }

	        var rAF = window.cancelAnimationFrame && window.requestAnimationFrame || window.webkitCancelAnimationFrame && window.webkitRequestAnimationFrame || window.mozCancelAnimationFrame && window.mozRequestAnimationFrame || window.oCancelAnimationFrame && window.oRequestAnimationFrame || window.msCancelAnimationFrame && window.msRequestAnimationFrame || basicRAF;

	        var cancelrAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

	        if (me.isBadAndroid) {
	            rAF = basicRAF;
	            cancelrAF = window.clearTimeout;
	        }

	        return { rAF: rAF, cancelrAF: cancelrAF };
	    };

	    me.extend = function (target, obj) {
	        Object.keys(obj).forEach(function (i) {
	            target[i] = obj[i];
	        });
	    };

	    me.momentum = function (current, start, time, lowerMargin, wrapperSize, deceleration) {
	        var distance = current - start,
	            destination = void 0,
	            duration = void 0;
	        var speed = Math.abs(distance) / time;

	        deceleration = deceleration === undefined ? 0.0015 : deceleration;

	        destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
	        duration = speed / deceleration;

	        if (destination < lowerMargin) {
	            destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
	            distance = Math.abs(destination - current);
	            duration = distance / speed;
	        } else if (destination > 0) {
	            destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
	            distance = Math.abs(current) + destination;
	            duration = distance / speed;
	        }

	        return {
	            destination: Math.round(destination),
	            duration: duration
	        };
	    };

	    var _transform = _prefixStyle('transform');

	    me.extend(me, {
	        hasTransform: _transform !== false,
	        hasPerspective: _prefixStyle('perspective') in _elementStyle,
	        hasTouch: 'ontouchstart' in window,
	        hasPointer: !!(window.PointerEvent || window.MSPointerEvent), // IE10 is prefixed
	        hasTransition: _prefixStyle('transition') in _elementStyle
	    });

	    /*
	     This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	     - galaxy S2 is ok
	     - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	     - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	     - galaxy S3 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	     - galaxy S4 is badAndroid (stock brower, webview)
	     `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	     - galaxy S5 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	     - galaxy S6 is OK
	     `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	     */
	    me.isBadAndroid = function () {
	        var appVersion = window.navigator.appVersion;
	        var _isBadAndroid = false;
	        // Android browser is not a chrome browser.
	        if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
	            var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
	            if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === 'object' && safariVersion.length >= 2) {
	                _isBadAndroid = parseFloat(safariVersion[1]) < 535.19;
	            } else {
	                _isBadAndroid = true;
	            }
	        } else {
	            _isBadAndroid = false;
	        }

	        return _isBadAndroid;
	    }();

	    me.extend(me.style = {}, {
	        transform: _transform,
	        transitionTimingFunction: _prefixStyle('transitionTimingFunction'),
	        transitionDuration: _prefixStyle('transitionDuration'),
	        transitionDelay: _prefixStyle('transitionDelay'),
	        transformOrigin: _prefixStyle('transformOrigin')
	    });

	    me.preventDefaultException = function (el, exceptions) {
	        var keys = Object.keys(exceptions);

	        for (var i = 0, len = keys.length; i < len; i++) {
	            var attr = keys[i];
	            if (exceptions[attr].test(el[attr])) {
	                return true;
	            }
	        }

	        return false;
	    };

	    me.extend(me.eventType = {}, {
	        touchstart: 1,
	        touchmove: 1,
	        touchend: 1

	        // mousedown: 2,
	        // mousemove: 2,
	        // mouseup: 2,
	        //
	        // pointerdown: 3,
	        // pointermove: 3,
	        // pointerup: 3,
	        //
	        // MSPointerDown: 3,
	        // MSPointerMove: 3,
	        // MSPointerUp: 3
	    });

	    me.extend(me.ease = {}, {
	        quadratic: {
	            style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	            fn: function fn(k) {
	                return k * (2 - k);
	            }
	        },
	        circular: {
	            style: 'cubic-bezier(0.1, 0.57, 0.1, 1)', // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
	            fn: function fn(k) {
	                var _k = k - 1;
	                return Math.sqrt(1 - _k * _k);
	            }
	        },
	        back: {
	            style: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	            fn: function fn(k) {
	                var b = 4;
	                var _k = k - 1;
	                return _k * _k * ((b + 1) * _k + b) + 1;
	            }
	        },
	        bounce: {
	            style: '',
	            fn: function fn(k) {
	                var y = void 0,
	                    _k = k;

	                if (_k / 1 < 1 / 2.75) {
	                    _k = _k / 1;
	                    y = 7.5625 * _k * _k;
	                } else if (k < 2 / 2.75) {
	                    _k -= 1.5 / 2.75;
	                    y = 7.5625 * _k * _k + 0.75;
	                } else if (k < 2.5 / 2.75) {
	                    _k -= 2.25 / 2.75;
	                    y = 7.5625 * _k * _k + 0.9375;
	                } else {
	                    _k -= 2.625 / 2.75;
	                    y = 7.5625 * _k * _k + 0.984375;
	                }

	                return y;
	            }
	        },
	        elastic: {
	            style: '',
	            fn: function fn(k) {
	                var f = 0.22,
	                    e = 0.4;

	                if (k === 0) {
	                    return 0;
	                }
	                if (k === 1) {
	                    return 1;
	                }

	                return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * (2 * Math.PI) / f) + 1;
	            }
	        }
	    });

	    return me;
	}();

	exports.default = utils;

/***/ }),
/* 288 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.getArrayByLength = getArrayByLength;
	exports.isFunction = isFunction;
	exports.shallowEqual = shallowEqual;
	exports.getElementOffsetY = getElementOffsetY;
	exports.inheritProps = inheritProps;
	exports.getOnlyChild = getOnlyChild;
	exports.isBadAndroid = isBadAndroid;
	exports.getRAF = getRAF;
	exports.whichTransitionEventPrefix = whichTransitionEventPrefix;
	exports.focus = focus;
	exports.blur = blur;
	function getArrayByLength(length) {
	    var ret = [];
	    for (var i = 0; i < length; i++) {
	        ret[i] = null;
	    }
	    return ret;
	}

	function is(x, y) {
	    var ret = void 0;
	    if (x === y) {
	        ret = x !== 0 || y !== 0 || 1 / x === 1 / y;
	    } else {
	        // return x !== x && y !== y;
	        ret = isNaN(x) && isNaN(y);
	    }

	    return ret;
	}

	// 判断是否为 Function
	function isFunction(it) {
	    return Object.prototype.toString.call(it) === '[object Function]';
	}

	function shallowEqual(objA, objB) {
	    if (is(objA, objB)) {
	        return true;
	    }

	    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	        return false;
	    }

	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);

	    if (keysA.length !== keysB.length) {
	        return false;
	    }

	    var hasOwnProperty = Object.prototype.hasOwnProperty;

	    for (var i = 0; i < keysA.length; i++) {
	        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	            return false;
	        }
	    }

	    return true;
	}

	function getElementOffsetY(ele, parent) {
	    var y = 0;
	    while (ele !== parent && ele !== null) {
	        y += ele.offsetTop;
	        ele = ele.offsetParent;
	    }
	    return y;
	}

	var DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT = exports.DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT = 250;

	function inheritProps(props, attrs) {
	    return attrs.reduce(function (ret, attr) {
	        ret[attr] = props[attr];
	        return ret;
	    }, {});
	}

	/**
	 * @method getOnlyChild
	 * @return vnode|false
	 * @description 判断虚拟节点是否只拥有一个子节点，取代针对原生 React 的 !children.length，以支持 Qreact
	 * In React : vnode.children = {xxx}
	 * In Qreact: vnode.children = [{xxx}]
	 */
	function getOnlyChild(props) {
	    var children = props.children;
	    if (children) {
	        // for React
	        if (!children.length) return children;
	        // for Qreact
	        if (children.length === 1) return children[0];
	    }
	    return false;
	}
	/*
	    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
	    - galaxy S2 is ok
	    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
	    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S3 is badAndroid (stock brower, webview)
	    `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S4 is badAndroid (stock brower, webview)
	    `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
	    - galaxy S5 is OK
	    `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	    - galaxy S6 is OK
	    `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
	    */
	function isBadAndroid() {
	    var appVersion = window.navigator.appVersion;
	    var _isBadAndroid = false;
	    // Android browser is not a chrome browser.
	    if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
	        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
	        if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === 'object' && safariVersion.length >= 2) {
	            _isBadAndroid = parseFloat(safariVersion[1]) < 535.19;
	        } else {
	            _isBadAndroid = true;
	        }
	    } else {
	        _isBadAndroid = false;
	    }

	    return _isBadAndroid;
	}

	function getRAF() {
	    function basicRAF(callback) {
	        return window.setTimeout(callback, 1000 / 60);
	    }

	    var rAF = window.cancelAnimationFrame && window.requestAnimationFrame || window.webkitCancelAnimationFrame && window.webkitRequestAnimationFrame || window.mozCancelAnimationFrame && window.mozRequestAnimationFrame || window.oCancelAnimationFrame && window.oRequestAnimationFrame || window.msCancelAnimationFrame && window.msRequestAnimationFrame || basicRAF;

	    var cancelrAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

	    if (isBadAndroid()) {
	        rAF = basicRAF;
	        cancelrAF = window.clearTimeout;
	    }

	    return { rAF: rAF, cancelrAF: cancelrAF };
	}

	function whichTransitionEventPrefix() {
	    var result = void 0;
	    var el = document.createElement('fakeelement');
	    var transitions = {
	        transition: 'transition',
	        WebkitTransition: 'webkitTransition'
	    };
	    Object.keys(transitions).some(function (t) {
	        if (el.style[t] !== undefined) {
	            result = transitions[t];
	            return true;
	        }
	        return false;
	    });
	    return result;
	}

	function focus(dom) {
	    if (dom.focus) {
	        dom.focus();
	    }
	}

	function blur(dom) {
	    if (document.activeElement === dom) {
	        if (dom.blur) {
	            dom.blur();
	        } else {
	            focus(document.body);
	        }
	    }
	}

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(285);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _util = __webpack_require__(288);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component LazyImage
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author jiao.shen
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 懒加载图片组件，只能在 `Scroller` 和 `List` 中使用。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 使用这个组件代替img标签后，会延迟加载这个图片，直到List组件的滚动使得该图片位于可视区域之内。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./lazyimage.md}{instruUrl: scroller/lazyimage.html?hideIcon}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  3.0.2
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var TO_BE_LOADED = 0;
	var LOADING = 1;
	var LOADED = 2;

	var _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class(props) {
	        _classCallCheck(this, _class);

	        // 0->等待load,1->loading,2->loaded
	        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	        _this.loading = TO_BE_LOADED;
	        _this.state = {
	            src: _this.props.defaultImage
	        };
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.refresh(this.context);
	            var scroller = this.context.list || this.context.scroller;
	            if (scroller) {
	                scroller.childLazyImages.push(this);
	                if (scroller.loadImage) {
	                    scroller.loadImage(this);
	                }
	            }
	        }

	        // 父组件render时,需要重置这个组件的loaded状态和context

	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            // 此处的 refresh 需要等到 didupdate 之后才能获取正确的位置
	            // this.refresh(nextContext);
	            this._isUpdate = true;

	            if (this.state.src !== nextProps.src) {
	                this.loading = TO_BE_LOADED;
	                this.setState({ src: this.props.defaultImage });
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            if (this._isUpdate) {
	                this._isUpdate = false;

	                this.refresh(this.context);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var scroller = this.context.list || this.context.scroller;
	            if (scroller) {
	                scroller.childLazyImages.splice(scroller.childLazyImages.indexOf(this), 1);
	            }
	            this.canLoadImage = false;
	        }
	    }, {
	        key: 'refresh',
	        value: function refresh(context) {
	            this.canLoadImage = true;
	            this.offsetY = context.offsetY;
	            this.itemRef = context.itemRef;
	            this.infinite = context.infinite;
	            // 如果不是infinite的列表，那么应该获取offsetTop(这个开销还挺大的，不过没得优化了)，反之，则使用translateY
	            if (!this.infinite) {
	                this.offsetTop = (0, _util.getElementOffsetY)(this.img);
	                this.height = this.img.offsetHeight;
	            }
	        }
	    }, {
	        key: 'load',
	        value: function load(callback) {
	            var _this2 = this;

	            if (this.loading === TO_BE_LOADED) {
	                var src = this.props.src,
	                    tmpImg = new Image();

	                this.loading = LOADING;

	                tmpImg.onload = function () {
	                    // 在lazyimage正在加载时组件unmount(主要是在SPA模式下有可能发生关闭view的情况)会报错
	                    // 因此这里需要简单判断一下组件的实例是否还存在
	                    // bugfix: 在网速不稳定的情况下，有可能这个lazyimage加载的图片比之前加载的图片更晚下载完
	                    // 这个时候会引起加载图片错乱的问题，因此需要再加一个判断
	                    if (_this2 && _this2.canLoadImage && src === _this2.props.src) {
	                        _this2.loading = LOADED;
	                        _this2.setState({ src: src, loaded: true });
	                        if (callback) {
	                            callback();
	                        }
	                    }
	                };
	                tmpImg.src = src;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props = this.props,
	                height = _props.height,
	                style = _props.style,
	                customAttr = _props.customAttr;

	            if (this.context.list) {
	                if (height == null && style.height == null) {
	                    throw Error('yo-lazyimage: 在List组件中使用LazyImage必须指定图片的高度。');
	                }
	            }

	            return _react2.default.createElement('img', _extends({}, (0, _util.inheritProps)(this.props, ['onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel', 'width', 'height', 'className', 'title', 'style']), {
	                alt: this.props.alt,
	                ref: function ref(img) {
	                    if (img) _this3.img = img;
	                },
	                src: this.state.src
	            }, customAttr));
	        }
	    }]);

	    return _class;
	}(_react.Component);

	_class.contextTypes = {
	    // 从父组件context接收的属性
	    // list/scroller组件实例的引用
	    list: _propTypes2.default.object,
	    scroller: _propTypes2.default.object,
	    // listitem的offsetY(infinite模式下)
	    offsetY: _propTypes2.default.number,
	    // listitem实例的引用
	    itemRef: _propTypes2.default.object,
	    // 是否是Scroller下面的Lazyload,而不是List下面的
	    isScroller: _propTypes2.default.bool,
	    // 是否是infinite列表
	    infinite: _propTypes2.default.bool
	};
	_class.propTypes = {
	    /**
	     * @property defaultImage
	     * @type String
	     * @default null
	     * @description 默认图片，在原图片还没有完成加载时展示。
	     */
	    defaultImage: _propTypes2.default.string,
	    /**
	     * @property src
	     * @type String
	     * @default null
	     * @description 图片src，必需。
	     */
	    src: _propTypes2.default.string.isRequired,
	    /**
	     * @property className
	     * @type String
	     * @default null
	     * @description 给img标签加的类名。
	     */
	    className: _propTypes2.default.string,
	    /**
	     * @property width
	     * @type Number
	     * @default null
	     * @description 图片宽度。
	     */
	    width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    /**
	     * @property height
	     * @type Number
	     * @default null
	     * @description 图片高度。
	     */
	    height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
	    /**
	     * @property customAttr
	     * @type Object
	     * @default null
	     * @description 附加给img dom节点的自定义属性，属性名需要以data-开头。
	     */
	    customAttr: _propTypes2.default.object,
	    /**
	     * @property style
	     * @type Object
	     * @default null
	     * @description 附加给img dom节点的style。
	     */
	    style: _propTypes2.default.object,
	    /**
	     * @property alt
	     * @type String
	     * @default null
	     * @description 和img标签的alt属性相同。
	     */
	    alt: _propTypes2.default.string,
	    /**
	     * @property title
	     * @type String
	     * @default null
	     * @description 和img标签的title属性相同。
	     */
	    title: _propTypes2.default.string,
	    onTouchStart: _propTypes2.default.func,
	    onTouchMove: _propTypes2.default.func,
	    onTouchEnd: _propTypes2.default.func,
	    onTouchCancel: _propTypes2.default.func
	};
	_class.defaultProps = {
	    defaultImage: null,
	    src: null,
	    className: null,
	    width: null,
	    height: null,
	    customAttr: {},
	    style: null
	};
	exports.default = _class;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(285);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _reactDom = __webpack_require__(85);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _util = __webpack_require__(288);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Sticky
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description `Sticky` 组件，只能在 `Scroller` 内部或者列表系列组件的 `staticSection` 中使用，
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 它内部的子元素在 `Scroller` 滚动时将会获得吸顶效果。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * `Sticky` 是一个虚拟组件，它只会给它的唯一子元素添加额外的逻辑，而不会改变原有的 `dom` 结构。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./sticky.md}{instruUrl: scroller/sticky.html?hideIcon}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author jiao.shen
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  3.0.2
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Sticky = function (_Component) {
	    _inherits(Sticky, _Component);

	    function Sticky() {
	        _classCallCheck(this, Sticky);

	        var _this = _possibleConstructorReturn(this, (Sticky.__proto__ || Object.getPrototypeOf(Sticky)).call(this));

	        _this.domNode = null;
	        _this.height = null;
	        _this.offsetTop = null;
	        _this.className = null;
	        return _this;
	    }

	    _createClass(Sticky, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.scroller = this.context.scroller;

	            if (this.scroller) {
	                this.initialize();
	                this.scroller.stickyHeaders.push(this);
	            }
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            this.initialize();
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var _this2 = this;

	            if (this.scroller) {
	                this.scroller.stickyHeaders = this.scroller.stickyHeaders.filter(function (header) {
	                    return header !== _this2;
	                });
	            }
	        }
	    }, {
	        key: 'initialize',
	        value: function initialize() {
	            var height = this.props.height;

	            this.domNode = _reactDom2.default.findDOMNode(this);
	            if (height == null) {
	                this.height = this.domNode.offsetHeight;
	            } else {
	                this.height = this.props.height;
	            }
	            this.offsetTop = (0, _util.getElementOffsetY)(this.domNode, null);
	            this.className = this.domNode.className;
	            this.onlyChild = _react2.default.Children.only(this.props.children);
	            this.stickyExtraClass = this.props.stickyExtraClass;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.Children.only(this.props.children);
	        }
	    }]);

	    return Sticky;
	}(_react.Component);

	Sticky.propTypes = {
	    /**
	     * @property stickyExtraClass
	     * @type String
	     * @default null
	     * @description 在Sticky的子元素处在吸顶状态时，为Scroller的sticky容器添加的额外样式类。
	     */
	    stickyExtraClass: _propTypes2.default.string,
	    /**
	     * @property height
	     * @type number
	     * @default null
	     * @version 3.0.6
	     * @description 吸顶元素的高度，在infinite的列表组件的staticSection中使用时，设置这个属性可以提高列表的滚动性能。
	     */
	    height: _propTypes2.default.number,
	    children: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object, _propTypes2.default.string])
	};
	Sticky.defaultProps = {
	    stickyExtraClass: ''
	};
	Sticky.contextTypes = {
	    scroller: _propTypes2.default.object
	};
	exports.default = Sticky;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(292);
	module.exports = __webpack_require__(294);

/***/ }),
/* 292 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 293 */,
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	__webpack_require__(275);

	var _touchable = __webpack_require__(295);

	var _touchable2 = _interopRequireDefault(_touchable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _touchable2.default;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(285);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _gesture = __webpack_require__(296);

	var _gesture2 = _interopRequireDefault(_gesture);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component Touchable
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description `Touchable` 组件是一个"虚拟"组件，它不会真的在文档中创建一个 `dom` 节点作为根节点，而是返回它唯一的子组件的一个克隆，并给它绑定一些手势事件。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 除了能给 `dom` 绑定 `tap` 事件之外，它还解决了一些移动端的手势"顽疾"，例如触摸反馈和滚动/触摸的冲突问题。在需要绑定 `tap` 事件的情况下，应该优先使用 `Touchable`，
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 而不是直接把 `tap` 事件回调绑定给 `dom`。
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author jiao.shen
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./touchable.md}{instruUrl: touchable.html?hideIcon}
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Touchable = function (_Component) {
	    _inherits(Touchable, _Component);

	    function Touchable() {
	        _classCallCheck(this, Touchable);

	        return _possibleConstructorReturn(this, (Touchable.__proto__ || Object.getPrototypeOf(Touchable)).apply(this, arguments));
	    }

	    _createClass(Touchable, [{
	        key: 'render',
	        value: function render() {
	            if (false) {
	                if (this.props.touchClass == null && !this.props.internalUse) {
	                    console.error('yo-touchable: Touchable组件没有设置touchClass, 出于用户体验考虑, 应该尽量给触摸区域添加触摸反馈。');
	                }
	            }

	            var onlyChild = _react2.default.Children.only(this.props.children);
	            var gestureObj = (0, _gesture2.default)({
	                component: this,
	                scroller: this.context.scroller,
	                swipeMenuList: this.context.swipeMenuList,
	                activeClass: this.props.touchClass,
	                onTap: this.props.onTap,
	                onTouchStart: this.props.onTouchStart,
	                disabled: this.props.disabled
	            });
	            var onTouchStart = gestureObj.onTouchStart,
	                onTouchMove = gestureObj.onTouchMove,
	                onTouchEnd = gestureObj.onTouchEnd,
	                onTouchCancel = gestureObj.onTouchCancel;


	            return _react2.default.cloneElement(onlyChild, { onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, onTouchCancel: onTouchCancel });
	        }
	    }]);

	    return Touchable;
	}(_react.Component);

	Touchable.propTypes = {
	    /**
	     * @property touchClass
	     * @type String
	     * @default null
	     * @description 触摸Touchable时附加的className，可以用来实现Native常见的触摸反馈功能(例如给触摸区域添加深色背景或者改变透明度等等)。
	     */
	    touchClass: _propTypes2.default.string,
	    /**
	     * @property onTap
	     * @type Function
	     * @default null
	     * @param {DOMElement} target tap事件的target
	     * @description 给Touchable绑定的onTap事件。
	     */
	    onTap: _propTypes2.default.func,
	    /**
	     * @property disabled
	     * @type Bool
	     * @default false
	     * @description Touchable是否处于可点击状态，如果设为true，那么onTap事件回调和触摸反馈效果都不可用。
	     * @version 3.0.7
	     */
	    disabled: _propTypes2.default.bool,
	    /**
	     * @skip 给List定制的属性
	     */
	    onTouchStart: _propTypes2.default.func,
	    /**
	     * @skip 内部使用标志
	     */
	    internalUse: _propTypes2.default.bool,
	    children: _propTypes2.default.object
	};
	Touchable.defaultProps = {
	    onTouchStart: function onTouchStart() {},
	    touchClass: null,
	    onTap: function onTap() {},
	    internalUse: false,
	    disabled: false
	};
	Touchable.contextTypes = {
	    scroller: _propTypes2.default.object,
	    swipeMenuList: _propTypes2.default.object
	};
	exports.default = Touchable;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = exports.TAP_DELAY = undefined;

	var _reactDom = __webpack_require__(85);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TAP_SLOP = 5; /**
	                   * touchable手势处理,解决Scroller内部的手势冲突
	                   * 在滚动时不会触发active
	                   * 在active之后发生滚动会取消active状态
	                   */
	var TAP_DELAY = exports.TAP_DELAY = 50;
	/**
	 * @param endPoint
	 * @param startPoint
	 * @returns {number}
	 * 根据个点的坐标计算出位移
	 */
	function getDistance(endPoint, startPoint) {
	    return Math.sqrt(Math.pow(endPoint.pageX - startPoint.pageX, 2) + Math.pow(endPoint.pageY - startPoint.pageY, 2));
	}

	/**
	 * @param endPoint
	 * @param startPoint
	 * @returns {boolean}
	 * 根据两个点的位移判断是否应该取消Tap事件的触发
	 */
	function onTouchMoveShouldCancelTap(endPoint, startPoint) {
	    return getDistance(endPoint, startPoint) > TAP_SLOP;
	}

	/**
	 * @param evt
	 * @returns {touch/null}
	 * 获取触点
	 */
	function getTouchPoint(evt) {
	    return evt.touches.length ? { pageX: evt.touches[0].pageX, pageY: evt.touches[0].pageY } : null;
	}

	/**
	 * @param domNode
	 * @param activeClass
	 * 移除item的activeClass
	 */
	function removeActiveClass(domNode, activeClass) {
	    if (domNode && activeClass) {
	        domNode.className = domNode.className.replace(' ' + activeClass, '');
	    }
	}

	/**
	 * @param scroller
	 * @returns {boolean}
	 * 判断组件是否在滚动
	 */
	function isScrolling(scroller) {
	    return scroller ? scroller.isScrolling : false;
	}

	function isAnySwipeMenuOpen(swipeMenuList) {
	    return swipeMenuList ? swipeMenuList.openIndex !== -1 : false;
	}

	// touchStart的位置,是否需要放弃Tap触发,Tap周期(start,move,end)是否已经结束
	var startPoint = void 0,
	    shouldAbortTap = void 0;
	var captured = null;

	function _default(_ref) {
	    var component = _ref.component,
	        scroller = _ref.scroller,
	        swipeMenuList = _ref.swipeMenuList,
	        activeClass = _ref.activeClass,
	        onTap = _ref.onTap,
	        _onTouchStart = _ref.onTouchStart,
	        disabled = _ref.disabled;

	    var gestureObj = {
	        onTouchStart: function onTouchStart(evt) {
	            var domNode = _reactDom2.default.findDOMNode(component);
	            removeActiveClass(domNode, activeClass);
	            // 如果组件正在滚动,直接放弃Tap触发
	            shouldAbortTap = isScrolling(scroller) || isAnySwipeMenuOpen(swipeMenuList);
	            startPoint = getTouchPoint(evt);
	            _onTouchStart(evt);

	            if (!captured) {
	                captured = domNode;
	            }
	            // TAP_DELAY之后再次判断是否要触发Tap,如果这段时间内出现了大的位移,if后面的逻辑就不会执行
	            setTimeout(function () {
	                var className = activeClass;
	                if (!shouldAbortTap && className && captured === domNode && !disabled) {
	                    domNode.className += ' ' + className;
	                }
	            }, TAP_DELAY);
	        },
	        onTouchMove: function onTouchMove(evt) {
	            var domNode = _reactDom2.default.findDOMNode(component);
	            var currentPoint = getTouchPoint(evt);
	            // 根据touchmove的距离判断是否要放弃tap
	            if (onTouchMoveShouldCancelTap(currentPoint, startPoint)) {
	                shouldAbortTap = true;
	                captured = null;
	                removeActiveClass(domNode, activeClass);
	            }
	        },
	        onTouchEnd: function onTouchEnd(evt) {
	            var target = evt.target;
	            var domNode = _reactDom2.default.findDOMNode(component);
	            // 如果需要触发tap,在TAP_DELAY之后触发onTap回调
	            if (!shouldAbortTap && captured === domNode) {
	                setTimeout(function () {
	                    if (!disabled) {
	                        onTap(target);
	                    }
	                    removeActiveClass(domNode, activeClass);
	                    captured = null;
	                }, TAP_DELAY + 10);
	            } else if (shouldAbortTap) {
	                captured = null;
	            }
	        },
	        onTouchCancel: function onTouchCancel() {
	            var domNode = _reactDom2.default.findDOMNode(component);
	            removeActiveClass(domNode, activeClass);
	        }
	    };

	    return gestureObj;
	}
	exports.default = _default;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _getPrototypeOf = __webpack_require__(225);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(229);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(230);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(234);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(258);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp; /**
	                    * @file SwipeableTabContent.jsx
	                    * @author houyl@jingoal.com
	                    *
	                    * tab滑动内容区
	                    */


	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _silkReactSwipe = __webpack_require__(298);

	var _silkReactSwipe2 = _interopRequireDefault(_silkReactSwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TabPanels = (_temp = _class = function (_PureComponent) {
	    (0, _inherits3.default)(TabPanels, _PureComponent);

	    function TabPanels(props) {
	        (0, _classCallCheck3.default)(this, TabPanels);

	        var _this = (0, _possibleConstructorReturn3.default)(this, (TabPanels.__proto__ || (0, _getPrototypeOf2.default)(TabPanels)).call(this, props));

	        _this.swipeOptions = {
	            continuous: false,
	            callback: _this.onChange.bind(_this),
	            transitionEnd: _this.transitionEnd.bind(_this),
	            startSlide: _this.props.startSlide
	        };
	        return _this;
	    }

	    (0, _createClass3.default)(TabPanels, [{
	        key: 'onChange',
	        value: function onChange(index) {
	            this.props.onChange(index);
	        }
	    }, {
	        key: 'getInstance',
	        value: function getInstance() {
	            return this.reactSwipe;
	        }
	    }, {
	        key: 'transitionEnd',
	        value: function transitionEnd(index) {
	            this.props.transitionEnd(index);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                _silkReactSwipe2.default,
	                {
	                    ref: function ref(_ref) {
	                        _this2.reactSwipe = _ref;
	                    },
	                    style: this.props.style,
	                    swipeOptions: this.swipeOptions,
	                    className: 'silk-tabs-swipe-container'
	                },
	                this.props.children
	            );
	        }
	    }]);
	    return TabPanels;
	}(_react.PureComponent), _class.propTypes = {
	    onChange: _react.PropTypes.func,
	    transitionEnd: _react.PropTypes.func,
	    children: _react.PropTypes.node,
	    style: _react.PropTypes.shape({
	        wrapper: _react.PropTypes.object,
	        child: _react.PropTypes.object
	    }),
	    startSlide: _react.PropTypes.number
	}, _class.defaultProps = {
	    style: {
	        container: {
	            overflow: 'hidden',
	            visibility: 'hidden',
	            position: 'relative'
	        },
	        wrapper: {
	            overflow: 'hidden',
	            position: 'relative'
	        },
	        child: {
	            float: 'left',
	            width: '100%',
	            position: 'relative',
	            transitionProperty: 'transform'
	        }
	    },
	    startSlide: 0
	}, _temp);
	exports.default = TabPanels;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _assign = __webpack_require__(299);

	var _assign2 = _interopRequireDefault(_assign);

	var _getPrototypeOf = __webpack_require__(225);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(229);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(230);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(234);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(258);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _class, _temp;

	var _react = __webpack_require__(55);

	var _react2 = _interopRequireDefault(_react);

	var _silkSwipe = __webpack_require__(303);

	var _silkSwipe2 = _interopRequireDefault(_silkSwipe);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ReactSwipe = (_temp = _class = function (_Component) {
	    (0, _inherits3.default)(ReactSwipe, _Component);

	    function ReactSwipe() {
	        (0, _classCallCheck3.default)(this, ReactSwipe);
	        return (0, _possibleConstructorReturn3.default)(this, (ReactSwipe.__proto__ || (0, _getPrototypeOf2.default)(ReactSwipe)).apply(this, arguments));
	    }

	    (0, _createClass3.default)(ReactSwipe, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var swipeOptions = this.props.swipeOptions;


	            this.swipe = (0, _silkSwipe2.default)(this.container, swipeOptions);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.swipe.kill();
	            delete this.swipe;
	        }
	    }, {
	        key: 'getPos',
	        value: function getPos() {
	            return this.swipe.getPos();
	        }
	    }, {
	        key: 'getNumSlides',
	        value: function getNumSlides() {
	            return this.swipe.getNumSlides();
	        }
	    }, {
	        key: 'slide',
	        value: function slide() {
	            var _swipe;

	            (_swipe = this.swipe).slide.apply(_swipe, arguments);
	        }
	    }, {
	        key: 'prev',
	        value: function prev() {
	            this.swipe.prev();
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            this.swipe.next();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                id = _props.id,
	                className = _props.className,
	                style = _props.style,
	                children = _props.children; // eslint-disable-line react/prop-types

	            return _react2.default.createElement(
	                'div',
	                {
	                    ref: function ref(_ref) {
	                        _this2.container = _ref;
	                    },
	                    id: id, className: 'react-swipe-container ' + className,
	                    style: style.container
	                },
	                _react2.default.createElement(
	                    'div',
	                    { style: style.wrapper },
	                    _react2.default.Children.map(children, function (child) {
	                        if (child instanceof Object) {
	                            return _react2.default.cloneElement(child, {
	                                style: child.props.style ? (0, _assign2.default)(child.props.style, style.child) : style.child
	                            });
	                        }
	                        return child;
	                    })
	                )
	            );
	        }
	    }]);
	    return ReactSwipe;
	}(_react.Component), _class.propTypes = {
	    swipeOptions: _react.PropTypes.shape({
	        startSlide: _react.PropTypes.number,
	        speed: _react.PropTypes.number,
	        auto: _react.PropTypes.number,
	        continuous: _react.PropTypes.bool,
	        disableScroll: _react.PropTypes.bool,
	        stopPropagation: _react.PropTypes.bool,
	        swiping: _react.PropTypes.func,
	        callback: _react.PropTypes.func,
	        transitionEnd: _react.PropTypes.func
	    }),
	    style: _react.PropTypes.shape({
	        container: _react.PropTypes.object,
	        wrapper: _react.PropTypes.object,
	        child: _react.PropTypes.object
	    }),
	    id: _react.PropTypes.string,
	    className: _react.PropTypes.string
	}, _class.defaultProps = {
	    swipeOptions: {},
	    style: {
	        container: {
	            overflow: 'hidden',
	            visibility: 'hidden',
	            position: 'relative'
	        },

	        wrapper: {
	            overflow: 'hidden',
	            position: 'relative'
	        },

	        child: {
	            float: 'left',
	            width: '100%',
	            position: 'relative',
	            transitionProperty: 'transform',
	            minHeight: '1px'
	        }
	    },
	    className: ''
	}, _temp);
	exports.default = ReactSwipe;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(300), __esModule: true };

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(301);
	module.exports = __webpack_require__(12).Object.assign;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(302) });


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(31);
	var gOPS = __webpack_require__(249);
	var pIE = __webpack_require__(250);
	var toObject = __webpack_require__(47);
	var IObject = __webpack_require__(34);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(21)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 303 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Swipe 2.0.0
	 * Brad Birdsall
	 * https://github.com/thebird/Swipe
	 * Copyright 2013-2015, MIT License
	 *
	 */

	function Swipe(container, options) {

	  // utilities
	  var noop = function noop() {}; // simple no operation function
	  var offloadFn = function offloadFn(fn) {
	    setTimeout(fn || noop, 0);
	  }; // offload a functions execution

	  // check browser capabilities
	  var browser = {
	    addEventListener: !!window.addEventListener,
	    touch: 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch,
	    transitions: function (temp) {
	      var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
	      for (var i in props) {
	        if (temp.style[props[i]] !== undefined) return true;
	      }return false;
	    }(document.createElement('swipe'))
	  };

	  // quit if no root element
	  if (!container) return;
	  var element = container.children[0];
	  var slides, slidePos, width, length;
	  options = options || {};
	  var index = parseInt(options.startSlide, 10) || 0;
	  var speed = options.speed || 300;
	  var scrollHold = options.scrollHold || 10; // 当滑动距离大于scrollHold时,才进入scrolling滚动.避免轻微接触时造成的页面震动.
	  options.continuous = options.continuous !== undefined ? options.continuous : true;

	  function _setup() {

	    // cache slides
	    slides = element.children;
	    length = slides.length;

	    // set continuous to false if only one slide
	    if (slides.length < 2) options.continuous = false;

	    //special case if two slides
	    if (browser.transitions && options.continuous && slides.length < 3) {
	      element.appendChild(slides[0].cloneNode(true));
	      element.appendChild(element.children[1].cloneNode(true));
	      slides = element.children;
	    }

	    // create an array to store current positions of each slide
	    slidePos = new Array(slides.length);

	    // determine width of each slide
	    width = container.getBoundingClientRect().width || container.offsetWidth;

	    element.style.width = slides.length * width + 'px';

	    // stack elements
	    var pos = slides.length;
	    while (pos--) {

	      var slide = slides[pos];

	      slide.style.width = width + 'px';
	      slide.setAttribute('data-index', pos);

	      if (browser.transitions) {
	        slide.style.left = pos * -width + 'px';
	        move(pos, index > pos ? -width : index < pos ? width : 0, 0);
	      }
	    }

	    // reposition elements before and after index
	    if (options.continuous && browser.transitions) {
	      move(circle(index - 1), -width, 0);
	      move(circle(index + 1), width, 0);
	    }

	    if (!browser.transitions) element.style.left = index * -width + 'px';

	    container.style.visibility = 'visible';
	  }

	  function _prev() {

	    if (options.continuous) _slide(index - 1);else if (index) _slide(index - 1);
	  }

	  function _next() {

	    if (options.continuous) _slide(index + 1);else if (index < slides.length - 1) _slide(index + 1);
	  }

	  function circle(index) {

	    // a simple positive modulo using slides.length
	    return (slides.length + index % slides.length) % slides.length;
	  }

	  function _slide(to, slideSpeed) {

	    // do nothing if already on requested slide
	    if (index == to) return;

	    if (browser.transitions) {

	      var direction = Math.abs(index - to) / (index - to); // 1: backward, -1: forward

	      // get the actual position of the slide
	      if (options.continuous) {
	        var natural_direction = direction;
	        direction = -slidePos[circle(to)] / width;

	        // if going forward but to < index, use to = slides.length + to
	        // if going backward but to > index, use to = -slides.length + to
	        if (direction !== natural_direction) to = -direction * slides.length + to;
	      }

	      var diff = Math.abs(index - to) - 1;

	      // move all the slides between index and to in the right direction
	      while (diff--) {
	        move(circle((to > index ? to : index) - diff - 1), width * direction, 0);
	      }to = circle(to);

	      move(index, width * direction, slideSpeed || speed);
	      move(to, 0, slideSpeed || speed);

	      if (options.continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place
	    } else {

	      to = circle(to);
	      animate(index * -width, to * -width, slideSpeed || speed);
	      //no fallback for a circular continuous if the browser does not accept transitions
	    }

	    index = to;
	    offloadFn(options.callback && options.callback(index, slides[index]));
	  }

	  function move(index, dist, speed) {

	    translate(index, dist, speed);
	    slidePos[index] = dist;
	  }

	  function translate(index, dist, speed) {

	    var slide = slides[index];
	    var style = slide && slide.style;

	    if (!style) return;

	    style.webkitTransitionDuration = style.MozTransitionDuration = style.msTransitionDuration = style.OTransitionDuration = style.transitionDuration = speed + 'ms';

	    style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
	    style.msTransform = style.MozTransform = style.OTransform = 'translateX(' + dist + 'px)';
	  }

	  function animate(from, to, speed) {

	    // if not an animation, just reposition
	    if (!speed) {

	      element.style.left = to + 'px';
	      return;
	    }

	    var start = +new Date();

	    var timer = setInterval(function () {

	      var timeElap = +new Date() - start;

	      if (timeElap > speed) {

	        element.style.left = to + 'px';

	        if (delay) begin();

	        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

	        clearInterval(timer);
	        return;
	      }

	      element.style.left = (to - from) * (Math.floor(timeElap / speed * 100) / 100) + from + 'px';
	    }, 4);
	  }

	  // setup auto slideshow
	  var delay = options.auto || 0;
	  var interval;

	  function begin() {

	    interval = setTimeout(_next, delay);
	  }

	  function _stop() {

	    delay = 0;
	    clearTimeout(interval);
	  }

	  // setup initial vars
	  var _start = {};
	  var delta = {};
	  var isScrolling;

	  // setup event capturing
	  var events = {

	    handleEvent: function handleEvent(event) {

	      switch (event.type) {
	        case 'touchstart':
	          this.start(event);
	          break;
	        case 'touchmove':
	          this.move(event);
	          break;
	        case 'touchend':
	          offloadFn(this.end(event));
	          break;
	        case 'webkitTransitionEnd':
	        case 'msTransitionEnd':
	        case 'oTransitionEnd':
	        case 'otransitionend':
	        case 'transitionend':
	          offloadFn(this.transitionEnd(event));
	          break;
	        case 'resize':
	          offloadFn(_setup);
	          break;
	      }

	      if (options.stopPropagation) event.stopPropagation();
	    },
	    start: function start(event) {

	      var touches = event.touches[0];

	      // measure start values
	      _start = {

	        // get initial touch coords
	        x: touches.pageX,
	        y: touches.pageY,

	        // store time to determine touch duration
	        time: +new Date()

	      };

	      // used for testing first move event
	      isScrolling = undefined;

	      // reset delta and end measurements
	      delta = {};

	      // attach touchmove and touchend listeners
	      element.addEventListener('touchmove', this, false);
	      element.addEventListener('touchend', this, false);
	    },
	    move: function move(event) {

	      // ensure swiping with one touch and not pinching
	      if (event.touches.length > 1 || event.scale && event.scale !== 1) return;

	      if (options.disableScroll) event.preventDefault();

	      var touches = event.touches[0];

	      // measure change in x and y
	      delta = {
	        x: touches.pageX - _start.x,
	        y: touches.pageY - _start.y
	      };

	      if (Math.abs(delta.x) < scrollHold) {
	        return;
	      }

	      // determine if scrolling test has run - one time test
	      if (typeof isScrolling == 'undefined') {
	        isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
	      }

	      // if user is not trying to scroll vertically
	      if (!isScrolling) {

	        // prevent native scrolling
	        event.preventDefault();

	        // stop slideshow
	        _stop();

	        // increase resistance if first or last slide
	        if (options.continuous) {
	          // we don't add resistance at the end

	          translate(circle(index - 1), delta.x + slidePos[circle(index - 1)], 0);
	          translate(index, delta.x + slidePos[index], 0);
	          translate(circle(index + 1), delta.x + slidePos[circle(index + 1)], 0);
	        } else {

	          delta.x = delta.x / (!index && delta.x > 0 // if first slide and sliding left
	          || index == slides.length - 1 // or if last slide and sliding right
	          && delta.x < 0 // and if sliding at all
	          ? Math.abs(delta.x) / width + 1 : // determine resistance level
	          1); // no resistance if false

	          // translate 1:1
	          translate(index - 1, delta.x + slidePos[index - 1], 0);
	          translate(index, delta.x + slidePos[index], 0);
	          translate(index + 1, delta.x + slidePos[index + 1], 0);
	        }
	      }
	    },
	    end: function end(event) {

	      // measure duration
	      var duration = +new Date() - _start.time;

	      // determine if slide attempt triggers next/prev slide
	      var isValidSlide = Number(duration) < 250 // if slide duration is less than 250ms
	      && Math.abs(delta.x) > 20 // and if slide amt is greater than 20px
	      || Math.abs(delta.x) > width / 2; // or if slide amt is greater than half the width

	      // determine if slide attempt is past start and end
	      var isPastBounds = !index && delta.x > 0 // if first slide and slide amt is greater than 0
	      || index == slides.length - 1 && delta.x < 0; // or if last slide and slide amt is less than 0

	      if (options.continuous) isPastBounds = false;

	      // determine direction of swipe (true:right, false:left)
	      var direction = delta.x < 0;

	      // if not scrolling vertically
	      if (!isScrolling) {

	        if (isValidSlide && !isPastBounds) {

	          if (direction) {

	            if (options.continuous) {
	              // we need to get the next in this direction in place

	              move(circle(index - 1), -width, 0);
	              move(circle(index + 2), width, 0);
	            } else {
	              move(index - 1, -width, 0);
	            }

	            move(index, slidePos[index] - width, speed);
	            move(circle(index + 1), slidePos[circle(index + 1)] - width, speed);
	            index = circle(index + 1);
	          } else {
	            if (options.continuous) {
	              // we need to get the next in this direction in place

	              move(circle(index + 1), width, 0);
	              move(circle(index - 2), -width, 0);
	            } else {
	              move(index + 1, width, 0);
	            }

	            move(index, slidePos[index] + width, speed);
	            move(circle(index - 1), slidePos[circle(index - 1)] + width, speed);
	            index = circle(index - 1);
	          }

	          options.callback && options.callback(index, slides[index]);
	        } else {

	          if (options.continuous) {

	            move(circle(index - 1), -width, speed);
	            move(index, 0, speed);
	            move(circle(index + 1), width, speed);
	          } else {

	            move(index - 1, -width, speed);
	            move(index, 0, speed);
	            move(index + 1, width, speed);
	          }
	        }
	      }

	      // kill touchmove and touchend event listeners until touchstart called again
	      element.removeEventListener('touchmove', events, false);
	      element.removeEventListener('touchend', events, false);
	    },
	    transitionEnd: function transitionEnd(event) {

	      if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

	        if (delay) begin();

	        options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);
	      }
	    }

	  };

	  // trigger setup
	  _setup();

	  // start auto slideshow if applicable
	  if (delay) begin();

	  // add event listeners
	  if (browser.addEventListener) {

	    // set touchstart event on element
	    if (browser.touch) element.addEventListener('touchstart', events, false);

	    if (browser.transitions) {
	      element.addEventListener('webkitTransitionEnd', events, false);
	      element.addEventListener('msTransitionEnd', events, false);
	      element.addEventListener('oTransitionEnd', events, false);
	      element.addEventListener('otransitionend', events, false);
	      element.addEventListener('transitionend', events, false);
	    }

	    // set resize event on window
	    window.addEventListener('resize', events, false);
	  } else {

	    window.onresize = function () {
	      _setup();
	    }; // to play nice with old IE
	  }

	  // expose the Swipe API
	  return {
	    setup: function setup() {

	      _setup();
	    },
	    slide: function slide(to, speed) {

	      // cancel slideshow
	      _stop();

	      _slide(to, speed);
	    },
	    prev: function prev() {

	      // cancel slideshow
	      _stop();

	      _prev();
	    },
	    next: function next() {

	      // cancel slideshow
	      _stop();

	      _next();
	    },
	    stop: function stop() {

	      // cancel slideshow
	      _stop();
	    },
	    getPos: function getPos() {

	      // return current index position
	      return index;
	    },
	    getNumSlides: function getNumSlides() {

	      // return total number of slides
	      return length;
	    },
	    kill: function kill() {

	      // cancel slideshow
	      _stop();

	      // reset element
	      element.style.width = '';
	      element.style.left = '';

	      // reset slides
	      var pos = slides.length;
	      while (pos--) {

	        var slide = slides[pos];
	        slide.style.width = '';
	        slide.style.left = '';

	        if (browser.transitions) translate(pos, 0, 0);
	      }

	      // removed event listeners
	      if (browser.addEventListener) {

	        // remove current event listeners
	        element.removeEventListener('touchstart', events, false);
	        element.removeEventListener('webkitTransitionEnd', events, false);
	        element.removeEventListener('msTransitionEnd', events, false);
	        element.removeEventListener('oTransitionEnd', events, false);
	        element.removeEventListener('otransitionend', events, false);
	        element.removeEventListener('transitionend', events, false);
	        window.removeEventListener('resize', events, false);
	      } else {

	        window.onresize = null;
	      }
	    }
	  };
	}

	exports.default = Swipe;

/***/ }),
/* 304 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 305 */,
/* 306 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ })
]);