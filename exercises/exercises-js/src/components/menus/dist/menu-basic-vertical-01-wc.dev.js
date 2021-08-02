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

var MenuBasicVertical01Wc =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MenuBasicVertical01Wc, _HTMLElement);

  function MenuBasicVertical01Wc() {
    _classCallCheck(this, MenuBasicVertical01Wc);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuBasicVertical01Wc).call(this)); //implementation
  }

  _createClass(MenuBasicVertical01Wc, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var shadowRoot = this.attachShadow({
        mode: 'open'
      });
      shadowRoot.innerHTML = "\n        <style>\n            .main {\n                background-image: url('./assets/img/bg-01.jpg');\n                background-repeat: round;\n                height: 97vh;\n            }\n\n            .submain {\n                justify-content: center;\n                margin: auto;\n                height: 97vh;\n                color: #ffff;\n                background-color: #424242;\n                background: linear-gradient(160deg, #212121, #424242, #616161 );\n                filter: opacity(92%);\n                padding: .8rem .8rem;\n            }\n\n\n            .main--header {\n                display: grid;\n                justify-content: center;\n                margin-top: .5rem;\n            }\n\n            .main--header-logo {\n                display: inline-block;\n                vertical-align: text-bottom;\n                margin-right: .5rem;\n            }\n\n            .main--header-title {\n                display: inline-block;\n            }\n\n\n            .main--profile {\n                display: grid;\n                justify-content: center;\n                margin-top: .5rem;\n            }\n\n            .main--profile-photo {\n                display: inline-block;\n                vertical-align: middle;\n                margin-right: .5rem;\n            }\n\n            .main--profile-name {\n                display: inline-block;\n            }\n\n            .main--profile-name {\n                display: inline-block;\n            }\n\n            .main--profile-data {\n                text-align: center;\n                font-size: .9rem;\n            }\n\n\n            .main--menu {\n                margin-top: .8rem;\n            }\n\n            .main--menu-ul {\n                \n            }\n\n            .main--menu-a {\n                display: block;\n                color: #ffff;\n                text-decoration: none;\n                padding-left: 1rem;\n                border-radius: .3rem;\n                padding-top: .8rem; \n                padding-bottom: .8rem; \n                cursor: pointer;\n                transition: .5s\n            }\n\n            .main--menu-a:hover {\n                background-color: #757575;\n                background-color: #2979FF;\n            }\n\n            .main--menu-icon {\n                display: inline-block;\n                vertical-align: text-bottom;\n                margin-right: .3rem\n            }\n\n        </style>\n\n        <div class='main'>\n            <slot></slot>\n\n            <div class='submain'>\n\n            <div class='main--header'>\n            <div>\n                <image class='main--header-logo' src='./src/assets/img/typescript-logo.png' width='30'>\n                <h3 class='main--header-title'> TYPESCRIPT <h3>\n            </div>\n        </div>\n\n        <hr>\n\n        <div class='main--profile'>\n            \n            <div>\n                <image class='main--profile-photo' src='./src/assets/img/user-circle-solid.svg' width='30'>\n                <p class='main--profile-data'> Mi perfil <p>\n                <p class='main--profile-data'> Editar perfil <p>\n                <p class='main--profile-data'> Configuracion <p>\n            </div>\n        </div>\n\n        <hr>\n\n        <div class='main--menu'>\n            <nav class='main--menu-nav'>\n                \n                <ul class='main--menu-ul'>\n                    \n                    <a class=\"main--menu-a\" href=\"index.html\">\n                        <img class='main--menu-icon' src='./src/assets/img/home-solid.svg' width='24'> \n                        DASHBOARD \n                    </a>\n                </ul>\n\n                <ul class='main--menu-ul'>\n                    <a class=\"main--menu-a\">\n                        <img class='main--menu-icon' src='./src/assets/img/puzzle.svg' width='22'>\n                        EXERCISES\n                    </a>\n                    <ul class='main--menu-ul'>\n                        <a class=\"main--menu-a\" href=\"exercises-basic.html\">\n                            <img class='main--menu-icon' src='./src/assets/img/one.svg' width='20'>\n                            Basic\n                        </a>\n                        <a class=\"main--menu-a\" href=\"exercises-medium.html\">\n                            <img class='main--menu-icon' src='./src/assets/img/two.svg' width='20'>\n                            Medium\n                        </a>\n                        <a class=\"main--menu-a\" href=\"exercises-avanced.html\">\n                            <img class='main--menu-icon' src='./src/assets/img/three.svg' width='20'>\n                            Avanced\n                        </a>\n                    </ul>\n                </ul>\n\n                <ul class='main--menu-ul'>\n                    <a class=\"main--menu-a\">\n                        <img class='main--menu-icon' src='./src/assets/img/test-blue.svg' width='22'>\n                        TESTS\n                    </a>\n                    <ul class='main--menu-ul'>\n                        <a class=\"main--menu-a\" href=\"exercises-basic.html\">\n                            <img class='main--menu-icon' src='./src/assets/img/one.svg' width='20'>\n                            Basic\n                        </a>\n                        <a class=\"main--menu-a\" href=\"exercises-medium.html\">\n                            <img class='main--menu-icon' src='./src/assets/img/two.svg' width='20'>\n                            Medium\n                        </a>\n                        <a class=\"main--menu-a\" href=\"exercises-avanced.html\">\n                            <img class='main--menu-icon' src='./src/assets/img/three.svg' width='20'>\n                            Avanced\n                        </a>\n                    </ul>\n                </ul>\n\n                <ul class='main--menu-ul'>\n                    <a class=\"main--menu-a\" href=\"index.html\">\n                    <img class='main--menu-icon' src='./src/assets/img/info-button.svg' width='20'>\n                    ABOUT AS\n                    </a>\n                </ul>\n            </nav>\n        </div>\n            </div>\n\n            \n\n            \n            \n        </div>\n\n        \n        \n        ";
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

  return MenuBasicVertical01Wc;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('menu-basic-vertical-01-wc', MenuBasicVertical01Wc);