'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp; /**
                    * @file TabList.jsx
                    * @author yibin.huang@qunar.com
                    *
                    * tabs组件
                    * 基于yo3组件的scroller进行修改
                    */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Tab = require('./Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _scroller = require('yo3/component/scroller');

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