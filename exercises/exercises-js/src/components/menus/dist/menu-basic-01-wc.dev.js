"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MenuBasic01Wc =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MenuBasic01Wc, _HTMLElement);

  function MenuBasic01Wc() {
    _classCallCheck(this, MenuBasic01Wc);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuBasic01Wc).call(this)); //implementation
  }

  _createClass(MenuBasic01Wc, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadowRoot = this.attachShadow({
        mode: 'open'
      });
      shadowRoot.innerHTML = "\n        <style>\n            .menu {\n                display: flex;\n                justify-content: space-between;\n                color: #ffff;\n                background-color: #1565C0;\n                padding: .1rem .5rem;\n                flex-flow: row wrap;\n            }\n\n            .menu--logo {\n                \n            }\n\n            .menu--ul {\n                display: flex;  \n            }\n\n            .menu--icon {\n                display: inline-block;\n                vertical-align: text-bottom;\n                margin-right: .3rem\n            }\n\n            .menu--a {\n                color: #fff;\n                text-decoration: none !important;\n\n                list-style: none;\n                margin-left: .1rem;\n                margin-right: .1rem;\n                border-radius: .3rem;\n                padding: .6rem 1rem;\n                cursor: pointer;\n                transition: .5s\n            }\n\n            .menu--a:hover {\n                background-color: #757575;\n            }\n\n        </style>\n\n        <nav class='menu'>\n            <slot></slot>\n            <ul class='menu--logo'>\n                <image src='./src/assets/img/ts-logo-black.png' width='35'>\n            </ul>\n\n            <ul class='menu--ul'>\n                <a class=\"menu--a\" href=\"index.html\">\n                    <img class='menu--icon' src='./src/assets/img/home-solid-white.svg' width='24'> \n                    Inicio\n                </a>\n                <a class=\"menu--a\" href=\"exercises-basic.html\">\n                    <img class='menu--icon' src='./src/assets/img/puzzle-white.svg' width='24'>\n                    Exercises\n                </a>\n                <a class=\"menu--a\" href=\"exercises-medium.html\">\n                    <img class='menu--icon' src='./src/assets/img/test-white.svg' width='24'>\n                    Tests\n                </a>\n                <a class=\"menu--a\" href=\"exercises-avanced.html\">\n                    <img class='menu--icon' src='./src/assets/img/info-button-white.svg' width='24'>\n                    About as \n                </a>\n            </ul>\n\n            <ul>\n                <input placeholder='Buscar'></input>\n            </ul>\n        </nav>\n        \n        ";
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {//implementation
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldVal, newVal) {//implementation
    }
  }, {
    key: "adoptedCallback",
    value: function adoptedCallback() {//implementation
    }
  }]);

  return MenuBasic01Wc;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('menu-basic-01-wc', MenuBasic01Wc);