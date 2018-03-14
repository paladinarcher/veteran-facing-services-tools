'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconHelp = function (_React$Component) {
  _inherits(IconHelp, _React$Component);

  function IconHelp() {
    _classCallCheck(this, IconHelp);

    return _possibleConstructorReturn(this, (IconHelp.__proto__ || Object.getPrototypeOf(IconHelp)).apply(this, arguments));
  }

  _createClass(IconHelp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'svg',
        { width: '62', height: '63',
          viewBox: '0 0 62 63',
          className: this.props.cssClass,
          id: this.props.id },
        _react2.default.createElement('path', { fill: this.props.color,
          fillRule: 'evenodd',
          d: 'M36 50.57v-7.713c0-.375-.12-.683-.362-.924-.24-.24-.55-.362-.924-.362H27c-.375 0-.683.122-.924.363-.24.24-.362.55-.362.924v7.714c0 .376.12.684.362.926.24.24.55.36.924.36h7.714c.375 0 .683-.12.924-.36.24-.242.362-.55.362-.925zm10.286-27c0-2.356-.744-4.54-2.23-6.548a15.216 15.216 0 0 0-5.565-4.66c-2.222-1.1-4.5-1.648-6.83-1.648-6.508 0-11.477 2.853-14.906 8.558-.4.643-.294 1.206.322 1.688l5.303 4.018c.187.16.44.24.763.24.428 0 .763-.16 1.004-.48 1.42-1.823 2.572-3.055 3.456-3.698.91-.643 2.062-.964 3.455-.964 1.286 0 2.43.348 3.435 1.045S36 22.608 36 23.49c0 1.02-.268 1.836-.804 2.452-.535.616-1.446 1.22-2.732 1.808-1.687.75-3.234 1.908-4.64 3.475-1.407 1.567-2.11 3.248-2.11 5.043v1.446c0 .375.12.683.362.924.24.24.55.362.924.362h7.714c.375 0 .683-.12.924-.362.24-.24.362-.55.362-.924 0-.51.288-1.172.864-1.99a6.785 6.785 0 0 1 2.19-1.987 59.662 59.662 0 0 0 1.968-1.145c.456-.282 1.072-.75 1.85-1.407.775-.656 1.37-1.3 1.786-1.928.416-.63.79-1.44 1.125-2.43.335-.992.503-2.077.503-3.256zm15.428 7.716c0 5.598-1.38 10.76-4.138 15.49-2.76 4.726-6.502 8.47-11.23 11.228-4.728 2.76-9.89 4.14-15.49 4.14-5.597 0-10.76-1.38-15.488-4.14-4.727-2.758-8.47-6.502-11.23-11.23C1.378 42.048 0 36.885 0 31.287c0-5.6 1.38-10.76 4.138-15.49 2.76-4.727 6.503-8.47 11.23-11.23C20.096 1.81 25.258.43 30.858.43c5.597 0 10.76 1.378 15.488 4.137 4.728 2.76 8.47 6.502 11.23 11.23 2.76 4.728 4.138 9.89 4.138 15.49z' })
      );
    }
  }]);

  return IconHelp;
}(_react2.default.Component);

IconHelp.propTypes = {
  color: _propTypes2.default.string, /* Should be a CSS color */
  cssClass: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = IconHelp;