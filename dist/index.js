(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueRule"] = factory();
	else
		root["vueRule"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
exports.default={name:'rule',props:{speed:{type:Number,default:function _default(){return 1;}},pointWidth:{type:String,default:function _default(){return 28*window.innerWidth/750+'px';}},pointHeight:{type:String,default:function _default(){return 20*window.innerWidth/750+'px';}},pointBottom:{type:String,default:function _default(){return 15*window.innerWidth/750+'px';}},ruleHeight:{type:String,default:function _default(){return 72*window.innerWidth/750+'px';}}},data:function data(){return{point_icon:__webpack_require__(4),img_width:0,//图片宽
client_width:0,//屏幕宽
current_x:0,//初始X轴坐标
start_x:0,//开始的X轴坐标
last_x:0,//最终用于显示的X轴坐标
diff_x:0//每次的X轴坐标差值
};},mounted:function mounted(){this.client_width=window.innerWidth;this.img_width=2404*window.innerWidth/750;this.computeWeight(this.$refs.rule.style.backgroundPositionX);this.$refs.rule.addEventListener('touchmove',this.touchMoveEvent);this.$refs.rule.addEventListener('touchstart',this.touchStartEvent);this.$refs.rule.addEventListener('touchend',this.touchEndEvent);},beforeDestroy:function beforeDestroy(){this.$refs.rule.removeEventListener('touchmove',this.touchMoveEvent);this.$refs.rule.removeEventListener('touchstart',this.touchStartEvent);this.$refs.rule.removeEventListener('touchend',this.touchEndEvent);},methods:{/**
		 * 长按开始的回调
		 * @param  {Object} e {事件对象}
		 * @return {undefined}
		 */touchStartEvent:function touchStartEvent(e){this.start_x=e.touches[0].pageX;},/**
		 * 长按结束的回调
		 * @return {undefined}
		 */touchEndEvent:function touchEndEvent(e){this.last_x=parseFloat(this.$refs.rule.style.backgroundPositionX.split('px').shift());if(this.last_x>=this.client_width/2){this.last_x=this.client_width/2;}else if(this.last_x<=-(this.img_width-this.client_width/2)){this.last_x=-(this.img_width-this.client_width/2);};this.computeWeight(this.last_x);this.$refs.rule.style.backgroundPositionX=this.last_x+'px';},/**
		 * 长按拖动的回调
		 * @param  {Object} e {当前事件对象}
		 * @return {undefined}
		 */touchMoveEvent:function touchMoveEvent(e){if(this.start_x!==e.touches[0].pageX){var position_x=void 0;if(!this.last_x){position_x=this.diff_x=this.speed*(parseFloat(e.touches[0].pageX)-parseFloat(this.start_x));}else{position_x=this.last_x;this.diff_x=parseFloat(e.touches[0].pageX)-parseFloat(this.start_x);position_x=this.last_x+this.speed*(parseFloat(e.touches[0].pageX)-parseFloat(this.start_x));}this.computeWeight(position_x);this.$refs.rule.style.backgroundPositionX=position_x+'px';};},/**
		 * 计算重量
		 * @param  {number} x {x轴坐标长}
		 * @return {undefined}
		 */computeWeight:function computeWeight(x){var per_scale=this.img_width/100;//每个刻度占的宽
var start_weight=this.client_width/2/per_scale;//初始的x轴
var weight=-(x/per_scale-start_weight);this.$emit('update',weight);}}};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _rule=__webpack_require__(2);var _rule2=_interopRequireDefault(_rule);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=_rule2.default;// export { rule }

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_rule_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_rule_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_rule_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_rule_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_rule_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_7a2a3d82_hasScoped_true_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_rule_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_1_1_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(6);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(3)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7a2a3d82"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_1_1_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_script_index_0_rule_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_7a2a3d82_hasScoped_true_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_rule_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_1_1_vue_loader_lib_template_compiler_index_id_data_v_7a2a3d82_hasScoped_true_buble_transforms_node_modules_vue_loader_14_1_1_vue_loader_lib_selector_type_template_index_0_rule_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\rule.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7a2a3d82", Component.options)
  } else {
    hotAPI.reload("data-v-7a2a3d82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAELhXYWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1ZTYzZDhjMS0zYWIwLTBlNGEtOGI2NC1hMjYyZDQ2OGY3NDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYzNTAxQTdERkI1MTFFNzkyMjA5RDEzQzgyQjRFNTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYzNTAxQTZERkI1MTFFNzkyMjA5RDEzQzgyQjRFNTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxNzkwMzFjLTEwMDAtNGQ0Ny04NDc5LTFjMTFhNjJkZGExMiIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjdmNzk2NjY1LWRmYjAtMTFlNy05ZjRjLWU0ZWNlNmMzY2YzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgVxe6QAAAG0SURBVHjaYvyf4MUABO+AWBCI45kYIEAQSi+ECcAAI0AAMQK1bAMyPIH4MROUAQKyIA4jlCMGEEAgZfeADEUGLACkUgmIX2GRYwQIIJDOYCCjF4hlgJgZiN8D8WkgdmcBEmvQdIDc6gbE15kYcANNZNchgwcwB4H9gCYJdj1AAIEcdB1IazCQBm6BTE1gIB0EgzSeBGIDEjSpAvEVFijnItSz/wloYkSOEXQJfjQxkGHc6KEIEECgwOEE0l1A7ADE0mgJCAQ+QDU/B+LDQFwO0vSf1FBhIiMkydL0nwmaoEgBViBNu4H4H5EafgLxCZjzRInUJIzsJ1CmnUdAQx8Qf0UPiGQgfohDw00gLsYVegpAvBxNbC56zgAIMFDk2gLpJUAsx0A7ACoTQkEJ/gC5iYMEAErOO0CWzGagD5gCsiwDiA/R2KItQFwICz57IN5LI4vWAbEveqpyoUGQdoOKUFxJOA2Iw6lgCaj48gDiMkKlzSpoqXmGTIsOAjEHEO8ktmj7BsSmQCwPxDeItOQCEEtAS/Bf5JSjj0BVLLRusINm/mdQucdAPB+IzaHyhkD8Ep9hAOEeTl9z5mP+AAAAAElFTkSuQmCC"

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "v-compoent-rule" } }, [
    _c(
      "div",
      {
        staticClass: "rule-point",
        style: {
          width: _vm.pointWidth,
          height: _vm.pointHeight,
          marginBottom: _vm.pointBottom
        }
      },
      [_c("img", { attrs: { src: _vm.point_icon, alt: "" } })]
    ),
    _vm._v(" "),
    _c("div", {
      ref: "rule",
      staticClass: "rule-content",
      style: { height: _vm.ruleHeight },
      attrs: { "data-name": "rule" }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-7a2a3d82", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map