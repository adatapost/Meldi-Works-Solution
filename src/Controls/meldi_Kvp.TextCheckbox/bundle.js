/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./TextCheckbox/index.ts":
/*!*******************************!*\
  !*** ./TextCheckbox/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.TextCheckbox = void 0;\n\nvar TextCheckbox =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function TextCheckbox() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  TextCheckbox.prototype.init = function (context, notifyOutputChanged, state, container) {\n    var _a, _b;\n\n    this.context = context;\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.container = container;\n    this.checkboxCheckHandler = this.checkboxCheck.bind(this);\n    this.checkedValue = this.context.parameters.CheckedValue.raw;\n    this.uncheckedValue = this.context.parameters.UncheckedValue.raw;\n    this.checkStatus = false;\n    var checkbox = document.createElement(\"input\");\n    var span = document.createElement(\"span\");\n    var label = document.createElement(\"label\");\n    label.innerHTML = (_a = this.context.parameters.Label.raw) !== null && _a !== void 0 ? _a : \"\";\n\n    if (checkbox) {\n      checkbox.type = \"checkbox\";\n      checkbox.addEventListener(\"change\", this.checkboxCheckHandler);\n\n      if (this.context.parameters.Value.raw) {\n        checkbox.checked = \"Yes true yes 1 True\".includes((_b = this.context.parameters.Value.raw) !== null && _b !== void 0 ? _b : \"\");\n        this.checkStatus = checkbox.checked;\n      }\n    }\n\n    if (this.context.parameters.Left.raw == \"Left\") {\n      span.appendChild(checkbox);\n      span.appendChild(label);\n    } else {\n      span.appendChild(label);\n      span.appendChild(checkbox);\n    }\n\n    this.container.appendChild(span);\n    this.notifyOutputChanged();\n  };\n\n  TextCheckbox.prototype.checkboxCheck = function () {\n    var checkbox = this.container.querySelector('input');\n\n    if (checkbox) {\n      this.checkStatus = checkbox.checked;\n      this.notifyOutputChanged();\n    }\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  TextCheckbox.prototype.updateView = function (context) {\n    var _a, _b;\n\n    var checkbox = this.container.querySelector('input');\n    var label = this.container.querySelector('label');\n\n    if (label) {\n      label.innerHTML = (_a = this.context.parameters.Label.raw) !== null && _a !== void 0 ? _a : \"\";\n    }\n\n    if (checkbox) {\n      if (this.context.parameters.Value.raw) {\n        checkbox.checked = \"Yes true yes 1 True\".includes((_b = this.context.parameters.Value.raw) !== null && _b !== void 0 ? _b : \"\");\n        this.checkStatus = checkbox.checked;\n      }\n    }\n\n    console.log('updateView method');\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as ???bound??? or ???output???\r\n   */\n\n\n  TextCheckbox.prototype.getOutputs = function () {\n    var _a;\n\n    console.log('getOutput method');\n    return {\n      Value: (_a = this.checkStatus ? this.context.parameters.CheckedValue.raw : this.context.parameters.UncheckedValue.raw) !== null && _a !== void 0 ? _a : \"\"\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  TextCheckbox.prototype.destroy = function () {\n    console.log('destroy method');\n    this.container.querySelector(\"input\").removeEventListener(\"change\", this.checkboxCheckHandler);\n  };\n\n  return TextCheckbox;\n}();\n\nexports.TextCheckbox = TextCheckbox;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./TextCheckbox/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./TextCheckbox/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Kvp.TextCheckbox', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.TextCheckbox);
} else {
	var Kvp = Kvp || {};
	Kvp.TextCheckbox = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.TextCheckbox;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}