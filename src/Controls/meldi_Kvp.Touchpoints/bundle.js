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

/***/ "./Touchpoints/index.ts":
/*!******************************!*\
  !*** ./Touchpoints/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.Touchpoints = void 0;\n\nvar Touchpoints =\n/** @class */\nfunction () {\n  /**\r\n   * Empty constructor.\r\n   */\n  function Touchpoints() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  Touchpoints.prototype.init = function (context, notifyOutputChanged, state, container) {\n    var _this = this;\n\n    var _a;\n\n    this.context = context;\n    this.notifyOutputChanged = notifyOutputChanged;\n    this.container = container;\n    this.labels = this.context.parameters.Labels.raw;\n    this.forms = this.context.parameters.Forms.raw;\n    this.guid = this.context.parameters.Guid.raw;\n    this.entities = this.context.parameters.Entities.raw;\n    this.buttonClickHandler = this.buttonClick.bind(this);\n    var lablesArray = (_a = this.labels) === null || _a === void 0 ? void 0 : _a.split(\";\");\n    var span = document.createElement(\"span\");\n    lablesArray === null || lablesArray === void 0 ? void 0 : lablesArray.forEach(function (v, i) {\n      var button = document.createElement(\"button\");\n      button.innerHTML = v;\n      button.value = i.toString();\n      button.addEventListener(\"click\", _this.buttonClickHandler);\n      span.appendChild(button);\n    });\n    container.appendChild(span);\n  };\n\n  Touchpoints.prototype.buttonClick = function (event) {\n    var _a, _b, _c;\n\n    var formsArray = (_a = this.forms) === null || _a === void 0 ? void 0 : _a.split(\";\");\n    var entitiesArray = (_b = this.entities) === null || _b === void 0 ? void 0 : _b.split(\";\");\n    var index = event.srcElement.value;\n\n    if (formsArray && entitiesArray) {\n      var formName = formsArray[index];\n      var entityName1 = entitiesArray[index];\n      var entityFormOptions = {\n        \"entityName\": \"\",\n        \"formId\": \"\",\n        entityId: \"\"\n      };\n      entityFormOptions.entityName = entityName1;\n      entityFormOptions.formId = formName;\n      entityFormOptions.entityId = (_c = this.guid) !== null && _c !== void 0 ? _c : \"\";\n      console.log(entityFormOptions);\n      this.context.navigation.openForm(entityFormOptions).then(function (success) {\n        console.log(\"Success\");\n      }, function (error) {\n        console.log(\"Error\");\n      });\n    }\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  Touchpoints.prototype.updateView = function (context) {// Add code to update control view\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  Touchpoints.prototype.getOutputs = function () {\n    return {};\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  Touchpoints.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  return Touchpoints;\n}();\n\nexports.Touchpoints = Touchpoints;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./Touchpoints/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./Touchpoints/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('Kvp.Touchpoints', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Touchpoints);
} else {
	var Kvp = Kvp || {};
	Kvp.Touchpoints = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.Touchpoints;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}