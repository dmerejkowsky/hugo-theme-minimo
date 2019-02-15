/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var shuffle = exports.shuffle = function shuffle(array) {
  var shuffled = [].concat(_toConsumableArray(array)),
      currIndex = array.length,
      tempValue = void 0,
      randIndex = void 0;

  while (currIndex) {
    randIndex = Math.floor(Math.random() * currIndex);
    currIndex--;

    tempValue = shuffled[currIndex];
    shuffled[currIndex] = shuffled[randIndex];
    shuffled[randIndex] = tempValue;
  }

  return shuffled;
};

var detailsTagSupported = exports.detailsTagSupported = function detailsTagSupported() {
  var el = document.createElement('details');
  if (!('open' in el)) return false;

  el.innerHTML = '<summary>a</summary>b';
  document.body.appendChild(el);

  var diff = el.offsetHeight;
  el.open = true;
  var result = diff != el.offsetHeight;

  document.body.removeChild(el);
  return result;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = docReady;

function docReady(callback) {

    function completed() {
        document.removeEventListener("DOMContentLoaded", completed, false);
        window.removeEventListener("load", completed, false);
        callback();
    }

    //Events.on(document, 'DOMContentLoaded', completed)

    if (document.readyState === "complete") {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout(callback);
    } else {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed, false);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed, false);
    }
}

module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (64)\nFor more information on which environments are supported please see:\nhttps://github.com/sass/node-sass/releases/tag/v4.5.2\n    at module.exports (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/node-sass/lib/binding.js:13:13)\n    at Object.<anonymous> (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at Object.<anonymous> (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)\n    at Function.Module._load (internal/modules/cjs/loader.js:530:3)\n    at Module.require (internal/modules/cjs/loader.js:637:17)\n    at require (internal/modules/cjs/helpers.js:22:18)\n    at loadLoader (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModule.js:268:15)\n    at runLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModule.js:192:19)\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:170:18\n    at loadLoader (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/loadLoader.js:27:11)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:173:18\n    at loadLoader (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/loadLoader.js:36:3)\n    at iteratePitchingLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModule.js:179:3)\n    at NormalModule.build (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModule.js:268:15)\n    at Compilation.buildModule (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/Compilation.js:146:10)\n    at moduleFactory.create (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/Compilation.js:433:9)\n    at factory (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModuleFactory.js:253:5)\n    at applyPluginsAsyncWaterfall (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModuleFactory.js:99:14)\n    at /mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/tapable/lib/Tapable.js:204:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/tapable/lib/Tapable.js:208:13)\n    at resolver (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModuleFactory.js:74:11)\n    at process.nextTick (/mnt/ssd/dmerej/src/dmerej/blog/themes/minimo/node_modules/webpack/lib/NormalModuleFactory.js:205:8)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _es6Docready = __webpack_require__(1);

var _es6Docready2 = _interopRequireDefault(_es6Docready);

var _helpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _es6Docready2.default)(function () {
  var termCloud = document.querySelector('.term-cloud');
  if (termCloud) {
    var terms = termCloud.querySelectorAll('.term-cloud li');
    (0, _helpers.shuffle)(terms).forEach(function (term) {
      return term.parentElement.appendChild(term);
    });
  }

  var toc = document.querySelector('.entry-toc');
  if (toc) {
    if (!(0, _helpers.detailsTagSupported)()) {
      document.body.classList.add('no-details');
      var tocToggler = document.querySelector('.toc-title');
      tocToggler.addEventListener('click', function () {
        if (toc.getAttribute('open')) {
          toc.open = false;
          toc.removeAttribute('open');
        } else {
          toc.open = true;
          toc.setAttribute('open', 'open');
        }
      });
    }
  }
});

/***/ })
/******/ ]);