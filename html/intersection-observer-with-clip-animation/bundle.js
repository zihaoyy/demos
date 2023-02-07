
        // -------------------阳九的webpack---------------------------
        //! 模拟UMD模块化规范,将入口模块导出？？   
        ((root, factory) => {
                if (typeof define === 'function' && define.amd) {
                  define(factory);
                } else if (typeof exports === 'object') {
                  module.exports = factory();
                } else {
                  root['LzyWebWatcher'] = factory().default; // 将factory导出的对象挂载到window上
                }
              
              })(this,()=>{
                //todo 传入modules
                var modules = {"D:\\demos\\html\\web-watcher\\src\\out\\index.js":[
 (require,module,exports)=>{
            "use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var watcher_1 = __importDefault(require("./core/watcher.js"));
exports["default"] = watcher_1["default"];
        } ,
 {"./core/watcher.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\watcher.js"} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\watcher.js":[
 (require,module,exports)=>{
            "use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var option_1 = require("./option.js");
var error_1 = __importDefault(require("./error.js"));
var event_1 = __importDefault(require("./event.js"));
var router_1 = __importDefault(require("./router.js"));
var performance_1 = __importDefault(require("./performance.js"));
var messagePool_1 = __importDefault(require("./messagePool.js"));
/**
 * 前端页面监控器
*/
var LzyWebWatcher = /*#__PURE__*/function () {
  function LzyWebWatcher() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, LzyWebWatcher);
    var _options = (0, option_1.parseOption)(option);
    this.init(_options);
  }
  _createClass(LzyWebWatcher, [{
    key: "init",
    value: function init(options) {
      this._options = options;
      var requestUrl = options.requestUrl,
        appName = options.appName,
        logger = options.logger,
        watchEvent = options.watchEvent,
        watchError = options.watchError,
        watchRouter = options.watchRouter,
        watchPerformance = options.watchPerformance;
      this.messagePool = new messagePool_1["default"](options);
      this.errorWatcher = watchError ? new error_1["default"](this) : null;
      this.eventWatcher = watchEvent ? new event_1["default"](this) : null;
      this.routerWatcher = watchRouter ? new router_1["default"](this) : null;
      this.performanceWatcher = watchPerformance ? new performance_1["default"](this) : null;
    }
  }]);
  return LzyWebWatcher;
}();
exports["default"] = LzyWebWatcher;
        } ,
 {"./option.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\option.js","./error.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\error.js","./event.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\event.js","./router.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\router.js","./performance.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\performance.js","./messagePool.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\messagePool.js"} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\option.js":[
 (require,module,exports)=>{
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseOption = void 0;
var _options = {
  requestUrl: '',
  appName: '',
  appCode: '',
  appVersion: '',
  ext: '',
  debug: false,
  pvCore: false,
  pvHashtag: false,
  performanceCore: false,
  performanceFirstResource: false,
  performanceServer: false,
  errorCore: false,
  errorServer: false,
  eventCore: false,
  eventUnload: false // 页面卸载-是否在页面卸载时采集页面状态信息
};
/**
 * 对用户传入的options进行类型检查  格式化
*/
function parseOption(options) {
  var requestUrl = options.requestUrl,
    appName = options.appName,
    logger = options.logger,
    watchRouter = options.watchRouter,
    watchError = options.watchError,
    watchPerformance = options.watchPerformance,
    watchEvent = options.watchEvent;
  var initOptions = {
    requestUrl: '',
    appName: '',
    logger: false,
    watchRouter: false,
    watchError: false,
    watchPerformance: false,
    watchEvent: false
  };
  initOptions.requestUrl = requestUrl || '';
  initOptions.appName = appName || '';
  initOptions.logger = logger || false;
  initOptions.watchRouter = watchRouter || false;
  initOptions.watchError = watchError || false;
  initOptions.watchPerformance = watchPerformance || false;
  initOptions.watchEvent = watchEvent || false;
  return initOptions;
}
exports.parseOption = parseOption;
        } ,
 {} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\error.js":[
 (require,module,exports)=>{
            "use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var ErrorWatcher = /*#__PURE__*/_createClass(function ErrorWatcher(watcher) {
  _classCallCheck(this, ErrorWatcher);
});
exports["default"] = ErrorWatcher;
        } ,
 {} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\event.js":[
 (require,module,exports)=>{
            "use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var uuid_1 = require("../utils/uuid.js");
var constant_1 = require("../utils/constant.js");
var messagePool_1 = require("./messagePool.js");
// 点击事件信息
/**
 * 从点击的节点层层向上获取埋点dom
*/
function getTargetDom(clickedDom) {
  if (!clickedDom) return;
  // 获取节点到最外层元素的路径
  var path = [];
  var currentDom = clickedDom;
  while (currentDom) {
    path.push(currentDom);
    currentDom = currentDom.parentElement;
  }
  // 遍历路径 找到第一个埋点元素
  return path.find(function (ele) {
    return ele.hasAttribute && (ele.hasAttribute(constant_1.EVENT_TRACK_TAG) || ele.hasAttribute(constant_1.EVENT_TRACK_TAG) || ele.hasAttribute(constant_1.EVENT_TRACK_TAG));
  });
}
var EventWatcher = /*#__PURE__*/function () {
  function EventWatcher(watcher) {
    _classCallCheck(this, EventWatcher);
    this.watcher = watcher;
    this.messagePool = watcher.messagePool;
    this.watch();
  }
  // 收集点击事件
  _createClass(EventWatcher, [{
    key: "watchClickEvent",
    value: function watchClickEvent() {
      var _this = this;
      document.addEventListener('click', function (e) {
        var message = new messagePool_1.ClickEventMessage({
          eventType: 'click'
        });
        var targetDom = getTargetDom(e.target);
        if (!targetDom) return;
        var _targetDom$getBoundin = targetDom.getBoundingClientRect(),
          top = _targetDom$getBoundin.top,
          left = _targetDom$getBoundin.left; // 元素距离html的距离
        var _document$documentEle = document.documentElement,
          scrollTop = _document$documentEle.scrollTop,
          scrollLeft = _document$documentEle.scrollLeft; // html距离上和左侧的距离(一般都是0)
        message.eventId = (0, uuid_1.uuid)();
        message.title = '';
        message.params = undefined;
        message.tiggerTime = Date.now();
        message.url = window.location.href; // 当前页面的url
        message.x = left + scrollLeft;
        message.y = top + scrollTop;
        _this.emit(message);
      });
    }
    // 发送数据
  }, {
    key: "emit",
    value: function emit(message) {
      this.messagePool.emit(message);
    }
    // 启动监控
  }, {
    key: "watch",
    value: function watch() {
      this.watchClickEvent();
    }
  }]);
  return EventWatcher;
}();
exports["default"] = EventWatcher;
        } ,
 {"../utils/uuid.js":"D:\\demos\\html\\web-watcher\\src\\out\\utils\\uuid.js","../utils/constant.js":"D:\\demos\\html\\web-watcher\\src\\out\\utils\\constant.js","./messagePool.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\messagePool.js"} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\router.js":[
 (require,module,exports)=>{
            "use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var RouterWatcher = /*#__PURE__*/_createClass(function RouterWatcher(watcher) {
  _classCallCheck(this, RouterWatcher);
});
exports["default"] = RouterWatcher;
        } ,
 {} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\performance.js":[
 (require,module,exports)=>{
            "use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var messagePool_1 = require("./messagePool.js");
var uuid_1 = require("../utils/uuid.js");
//todo API兼容性判断
var supported = {
  performance: !!window.performance,
  getEntriesByType: !!(window.performance && performance.getEntriesByType),
  PerformanceObserver: 'PerformanceObserver' in window,
  MutationObserver: 'MutationObserver' in window,
  PerformanceNavigationTiming: 'PerformanceNavigationTiming' in window
};
/**
 * 格式化性能记录,小数位数保留最多两位, 等于0的字段不传输,标记为undefined
 */
function normalizePerformanceRecord(t) {
  Object.keys(t).forEach(function (p) {
    var v = t[p];
    if (typeof v === 'number') t[p] = v === 0 ? undefined : parseFloat(v.toFixed(2));
  });
  return t;
}
var PerformanceWatcher = /*#__PURE__*/function () {
  function PerformanceWatcher(watcher) {
    _classCallCheck(this, PerformanceWatcher);
    this.watcher = watcher;
    this.messagePool = watcher.messagePool;
    this.watch();
  }
  //todo/**计算首屏渲染时间FMP */
  _createClass(PerformanceWatcher, [{
    key: "getFirstMeaningfulPaint",
    value: function getFirstMeaningfulPaint() {
      var fmpTime = 0;
      // 记录paint时间,获取最后一次的paint时间作为fmpTime(navigation v1版本)
      if (supported.getEntriesByType) {
        var _window = window,
          _performance = _window.performance;
        var paintEntries = _performance.getEntriesByType('paint');
        console.log('计算FMP', paintEntries);
        if (paintEntries.length) {
          // fmpTime = paintEntries.pop().startTime
        }
      }
      // 如果是v2版本, 则首屏渲染时间减去原先重定向时间
      if (fmpTime && supported.PerformanceNavigationTiming) {
        fmpTime -= window.performance.timing.fetchStart;
      }
      console.log('计算FMP', fmpTime);
      return fmpTime;
    }
    /** 兼容v2和v1的perfermanceAPI(优先使用v2)  https://www.w3.org/TR/navigation-timing-2/*/
  }, {
    key: "supportTimingAPI",
    value: function supportTimingAPI() {
      // todo 进行类型兼容
      // let t: PerformanceTiming | PerformanceEntry
      //     = supported.PerformanceNavigationTiming
      //         ? window.performance.getEntriesByType('navigation')[0]
      //         : window.performance.timing
      var t = window.performance.timing;
      return t;
    }
    /**发送首屏渲染数据*/
  }, {
    key: "postFirstRenderPerformance",
    value: function postFirstRenderPerformance() {
      var t = this.supportTimingAPI();
      var times = {
        fmp: this.getFirstMeaningfulPaint(),
        fpt: t.responseEnd - t.fetchStart,
        tti: t.domInteractive - t.fetchStart,
        ready: t.domContentLoadedEventEnd - t.fetchStart,
        onload: t.loadEventStart - t.fetchStart,
        firstbyte: t.responseStart - t.domainLookupStart,
        dns: t.domainLookupEnd - t.domainLookupStart,
        appcache: t.domainLookupStart - t.fetchStart,
        tcp: t.connectEnd - t.connectStart,
        ttfb: t.responseStart - t.requestStart,
        trans: t.responseEnd - t.responseStart,
        dom: t.domInteractive - t.responseEnd,
        res: t.loadEventStart - t.domContentLoadedEventEnd,
        ssllink: t.connectEnd - t.secureConnectionStart,
        redirect: t.redirectEnd - t.redirectStart,
        unloadTime: t.unloadEventEnd - t.unloadEventStart // 上一个页面的卸载耗时
      };

      var message = new messagePool_1.TimePerformanceMessage({
        eventType: 'FirstRenderPerformance'
      });
      message.eventId = (0, uuid_1.uuid)();
      message.url = window.location.href;
      message.time = normalizePerformanceRecord(times);
      message.tiggerTime = Date.now();
      this.emit(message);
    }
    /**发送资源加载性能数据*/
  }, {
    key: "postResourcePerformance",
    value: function postResourcePerformance() {}
    /**监控页面资源加载性能*/
  }, {
    key: "observeResource",
    value: function observeResource() {}
    /**开始监视性能*/
  }, {
    key: "watch",
    value: function watch() {
      var _this = this;
      //! 初始化方法可能在onload事件之后才执行,此时不会触发load事件了,检查document.readyState属性来判断onload事件是否会被触发
      if (document.readyState === 'complete') {
        if (supported.performance) this.postFirstRenderPerformance();
        if (supported.getEntriesByType) this.observeResource();
      } else {
        window.addEventListener('load', function () {
          if (supported.performance) _this.postFirstRenderPerformance();
          if (supported.getEntriesByType) _this.observeResource();
        });
      }
    }
    /**上报数据*/
  }, {
    key: "emit",
    value: function emit(message) {
      this.messagePool.emit(message);
    }
  }]);
  return PerformanceWatcher;
}();
exports["default"] = PerformanceWatcher;
        } ,
 {"./messagePool.js":"D:\\demos\\html\\web-watcher\\src\\out\\core\\messagePool.js","../utils/uuid.js":"D:\\demos\\html\\web-watcher\\src\\out\\utils\\uuid.js"} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\core\\messagePool.js":[
 (require,module,exports)=>{
            "use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePerformanceMessage = exports.ClickEventMessage = void 0;
var ClickEventMessage = /*#__PURE__*/_createClass(function ClickEventMessage() {
  var _this = this;
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, ClickEventMessage);
  var list = ['eventType', 'eventId', 'url', 'params', 'title', 'x', 'y'];
  list.forEach(function (key) {
    _this[key] = config[key] || null;
  });
});
exports.ClickEventMessage = ClickEventMessage;
var TimePerformanceMessage = /*#__PURE__*/_createClass(function TimePerformanceMessage() {
  var _this2 = this;
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, TimePerformanceMessage);
  var list = ['eventType', 'eventId', 'tiggerTime', 'time', 'url'];
  list.forEach(function (key) {
    _this2[key] = config[key] || null;
  });
});
exports.TimePerformanceMessage = TimePerformanceMessage;
var MessagePool = /*#__PURE__*/function () {
  function MessagePool(options) {
    _classCallCheck(this, MessagePool);
  }
  _createClass(MessagePool, [{
    key: "emit",
    value: function emit(msg) {
      console.warn('记录数据', msg);
    }
  }]);
  return MessagePool;
}();
exports["default"] = MessagePool;
        } ,
 {} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\utils\\uuid.js":[
 (require,module,exports)=>{
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuid = void 0;
/**
 * 补全字符
 * @param {*} num 初始值
 * @param {*} len 需要补全的位数
 * @param {*} placeholder 补全的值
 * @returns 补全后的值
 */
function pad(num, len) {
  var placeholder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var str = String(num);
  if (str.length < len) {
    var result = str;
    for (var i = 0; i < len - str.length; i += 1) {
      result = placeholder + result;
    }
    return result;
  }
  return str;
}
/**
 * 获取一个全局唯一随机字符串
*/
function uuid() {
  var date = new Date();
  // 获取日期并补全
  var year = date.getFullYear();
  var month = pad(date.getMonth() + 1, 2);
  var day = pad(date.getDate(), 2);
  var hour = pad(date.getHours(), 2);
  var minute = pad(date.getMinutes(), 2);
  var second = pad(date.getSeconds(), 2);
  var millisecond = pad(date.getMilliseconds(), 3);
  // yyyy-MM-dd的16进制表示,7位数字
  var hexDate = parseInt("".concat(year).concat(month).concat(day), 10).toString(16);
  // hh-mm-ss-ms的16进制表示，最大也是7位
  var hexTime = parseInt("".concat(hour).concat(minute).concat(second).concat(millisecond), 10).toString(16);
  // 第8位数字表示后面的time字符串的长度
  var guid = hexDate + hexTime.length + hexTime;
  // 补充随机数，补足32位的16进制数
  while (guid.length < 32) {
    guid += Math.floor(Math.random() * 16).toString(16);
  }
  // 分为三段，前两段包含时间戳信息
  return "".concat(guid.slice(0, 8), "-").concat(guid.slice(8, 16), "-").concat(guid.slice(16));
}
exports.uuid = uuid;
        } ,
 {} 
 ],
"D:\\demos\\html\\web-watcher\\src\\out\\utils\\constant.js":[
 (require,module,exports)=>{
            "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENT_TRACK_TAG = void 0;
// 埋点用标记
exports.EVENT_TRACK_TAG = "lzyWebWatcher-event-id";
        } ,
 {} 
 ],
}
                
                //todo 这里需要一个module缓存
                var modulesCache = {};
    
                //todo 创建require函数 获取modules的函数代码和mapping对象
                function require(absolutePath){
                    const [fn,mapping]  = modules[absolutePath]
    
                    //! 构造fn所需的require函数(loaclRequire 通过相对路径获取绝对路径(id)并执行require)
                    const loaclRequire =(relativePath)=>{  
                        return  require(mapping[relativePath])
                    }
    
                    //!查看缓存中是否有模块 构造模拟Node的module对象  (多个模块同时引用一个module   都需要从缓存中拿取  否则会创建一个新的module 导致引用不一致)
                    var cachedModule = modulesCache[absolutePath];
                    if (cachedModule !== undefined) return cachedModule.exports;
    
                    //! 如果模块不存在  创建一个新的module到缓存
                    var module = modulesCache[absolutePath] = {
                        exports: {}
                    };
    
                    //! 将三个参数传入fn并执行
                    fn.apply(null, [loaclRequire, module, module.exports])
    
                    //! 将本模块导出的代码返回
                    //todo 上面fn中传入了module.export,转换后的ES5代码会识别export关键字  
                    return module.exports
                }



                //! 执行require(entry)入口模块
                 return require("D:\\demos\\html\\web-watcher\\src\\out\\index.js")               
            });