(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

require('./iframe-load');

module.exports =
/*#__PURE__*/
function () {
  function Editor() {
    _classCallCheck(this, Editor);

    this.iframe = document.querySelector('iframe');
  }

  _createClass(Editor, [{
    key: "open",
    value: function open(page) {
      var _this = this;

      this.iframe.load('../' + page, function () {
        var body = _this.iframe.contentDocument.body;
        var textNodes = [];

        function recursion(element) {
          element.childNodes.forEach(function (node) {
            if (node.nodeName === "#text" && node.nodeValue.replace(/\s+/g, "").length > 0) {
              textNodes.push(node);
            } else {
              recursion(node);
            }
          });
        }

        recursion(body);
        textNodes.forEach(function (node) {
          var wrapper = _this.iframe.contentDocument.createElement("text-editor");

          node.parentNode.replaceChild(wrapper, node);
          wrapper.appendChild(node);
          wrapper.contentEditable = "true";
        });
      });
    }
  }]);

  return Editor;
}();

},{"./iframe-load":2}],2:[function(require,module,exports){
"use strict";

/*eslint-disable */
HTMLIFrameElement.prototype.load = function (url, callback) {
  var iframe = this;

  try {
    iframe.src = url + "?rnd=" + Math.random().toString().substring(2);
  } catch (error) {
    if (!callback) {
      return new Promise(function (resolve, reject) {
        reject(error);
      });
    } else {
      callback(error);
    }
  }

  var maxTime = 60000;
  var interval = 200;
  var timerCount = 0;

  if (!callback) {
    return new Promise(function (resolve, reject) {
      var timer = setInterval(function () {
        if (!iframe) return clearInterval(timer);
        timerCount++;

        if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
          clearInterval(timer);
          resolve();
        } else if (timerCount * interval > maxTime) {
          reject(new Error("Iframe load fail!"));
        }
      }, interval);
    });
  } else {
    var timer = setInterval(function () {
      if (!iframe) return clearInterval(timer);

      if (iframe.contentDocument && iframe.contentDocument.readyState === "complete") {
        clearInterval(timer);
        callback();
      } else if (timerCount * interval > maxTime) {
        callback(new Error("Iframe load fail!"));
      }
    }, interval);
  }
};

},{}],3:[function(require,module,exports){
"use strict";

// const $ = require("jquery");
// function pagesList() {
//     $('h1').remove();
//     $.get('./api/api.php', (data) => {
//     data.forEach(element => {
//         $('body').append('<h1>' + element + '</h1>');
//         });
//     }, 'JSON');
// }
// pagesList();
// $('.create-btn').click(() => {
//     $.post('./api/create-page.php', {
//         'name': $('.create-inp').val()
//     }, data => {
//         pagesList();
//     })
//     .fail(() => {
//         alert("File with this name already exists!");
//     });
// });
// $('.del-btn').click(() => {
//     $.post('./api/delete-page.php', {
//         "name": $('.del-inp').val()
//     }, data => {
//         console.log(data);
//         pagesList();
//     })
//     .fail(() => {
//         alert("File with this name do not exist!");
//     });
// })
var Editor = require("./editor");

window.editor = new Editor();

window.onload = function () {
  window.editor.open('index.html');
};

},{"./editor":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc3JjL2VkaXRvci5qcyIsImFwcC9zcmMvaWZyYW1lLWxvYWQuanMiLCJhcHAvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQSxPQUFPLENBQUMsZUFBRCxDQUFQOztBQUVBLE1BQU0sQ0FBQyxPQUFQO0FBQUE7QUFBQTtBQUNJLG9CQUFjO0FBQUE7O0FBQ1YsU0FBSyxNQUFMLEdBQWMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNIOztBQUhMO0FBQUE7QUFBQSx5QkFJUyxJQUpULEVBSWU7QUFBQTs7QUFDUCxXQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLFFBQVEsSUFBekIsRUFBK0IsWUFBTTtBQUNqQyxZQUFNLElBQUksR0FBRyxLQUFJLENBQUMsTUFBTCxDQUFZLGVBQVosQ0FBNEIsSUFBekM7QUFDQSxZQUFJLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxpQkFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ3hCLFVBQUEsT0FBTyxDQUFDLFVBQVIsQ0FBbUIsT0FBbkIsQ0FBMkIsVUFBQSxJQUFJLEVBQUk7QUFDL0IsZ0JBQUksSUFBSSxDQUFDLFFBQUwsS0FBa0IsT0FBbEIsSUFBNkIsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmLENBQXVCLE1BQXZCLEVBQStCLEVBQS9CLEVBQW1DLE1BQW5DLEdBQTRDLENBQTdFLEVBQWdGO0FBQzVFLGNBQUEsU0FBUyxDQUFDLElBQVYsQ0FBZSxJQUFmO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsY0FBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0g7QUFDSixXQU5EO0FBT0g7O0FBQ0QsUUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBRUEsUUFBQSxTQUFTLENBQUMsT0FBVixDQUFrQixVQUFBLElBQUksRUFBSTtBQUN0QixjQUFNLE9BQU8sR0FBRyxLQUFJLENBQUMsTUFB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LEVBQWhCOztBQUVBLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQU07QUFDbEIsRUFBQSxNQUFNLENBQUMsTUFBUCxDQUFjLElBQWQsQ0FBbUIsWUFBbkI7QUFDSCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwicmVxdWlyZSgnLi9pZnJhbWUtbG9hZCcpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBFZGl0b3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcclxuICAgIH1cclxuICAgIG9wZW4ocGFnZSkge1xyXG4gICAgICAgIHRoaXMuaWZyYW1lLmxvYWQoJy4uLycgKyBwYWdlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keTtcclxuICAgICAgICAgICAgbGV0IHRleHROb2RlcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzaW9uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVOYW1lID09PSBcIiN0ZXh0XCIgJiYgbm9kZS5ub2RlVmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2lvbihub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICByZWN1cnNpb24oYm9keSk7ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGV4dE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5pZnJhbWUuY29udGVudERvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0LWVkaXRvclwiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQod3JhcHBlciwgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCIvKmVzbGludC1kaXNhYmxlICovXHJcbkhUTUxJRnJhbWVFbGVtZW50LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcclxuICAgIGNvbnN0IGlmcmFtZSA9IHRoaXM7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmcmFtZS5zcmMgPSB1cmwgKyBcIj9ybmQ9XCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IG1heFRpbWUgPSA2MDAwMDtcclxuICAgIGNvbnN0IGludGVydmFsID0gMjAwO1xyXG5cclxuICAgIGxldCB0aW1lckNvdW50ID0gMDtcclxuXHJcbiAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlmcmFtZSkgcmV0dXJuIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGltZXJDb3VudCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlmcmFtZS5jb250ZW50RG9jdW1lbnQgJiYgaWZyYW1lLmNvbnRlbnREb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRpbWVyQ291bnQgKiBpbnRlcnZhbCA+IG1heFRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiSWZyYW1lIGxvYWQgZmFpbCFcIikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghaWZyYW1lKSByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcbiAgICAgICAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50ICYmIGlmcmFtZS5jb250ZW50RG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGltZXJDb3VudCAqIGludGVydmFsID4gbWF4VGltZSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwiSWZyYW1lIGxvYWQgZmFpbCFcIikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG59IiwiLy8gY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG4vLyBmdW5jdGlvbiBwYWdlc0xpc3QoKSB7XHJcbi8vICAgICAkKCdoMScpLnJlbW92ZSgpO1xyXG4vLyAgICAgJC5nZXQoJy4vYXBpL2FwaS5waHAnLCAoZGF0YSkgPT4ge1xyXG4vLyAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4vLyAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxoMT4nICsgZWxlbWVudCArICc8L2gxPicpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSwgJ0pTT04nKTtcclxuLy8gfVxyXG5cclxuLy8gcGFnZXNMaXN0KCk7XHJcblxyXG4vLyAkKCcuY3JlYXRlLWJ0bicpLmNsaWNrKCgpID0+IHtcclxuLy8gICAgICQucG9zdCgnLi9hcGkvY3JlYXRlLXBhZ2UucGhwJywge1xyXG4vLyAgICAgICAgICduYW1lJzogJCgnLmNyZWF0ZS1pbnAnKS52YWwoKVxyXG4vLyAgICAgfSwgZGF0YSA9PiB7XHJcbi8vICAgICAgICAgcGFnZXNMaXN0KCk7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmZhaWwoKCkgPT4ge1xyXG4vLyAgICAgICAgIGFsZXJ0KFwiRmlsZSB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cyFcIik7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyAkKCcuZGVsLWJ0bicpLmNsaWNrKCgpID0+IHtcclxuLy8gICAgICQucG9zdCgnLi9hcGkvZGVsZXRlLXBhZ2UucGhwJywge1xyXG4vLyAgICAgICAgIFwibmFtZVwiOiAkKCcuZGVsLWlucCcpLnZhbCgpXHJcbi8vICAgICB9LCBkYXRhID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgICAgICBwYWdlc0xpc3QoKTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAuZmFpbCgoKSA9PiB7XHJcbi8vICAgICAgICAgYWxlcnQoXCJGaWxlIHdpdGggdGhpcyBuYW1lIGRvIG5vdCBleGlzdCFcIik7XHJcbi8vICAgICB9KTtcclxuLy8gfSlcclxuXHJcblxyXG5jb25zdCBFZGl0b3IgPSByZXF1aXJlKFwiLi9lZGl0b3JcIik7XHJcblxyXG53aW5kb3cuZWRpdG9yID0gbmV3IEVkaXRvcigpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5lZGl0b3Iub3BlbignaW5kZXguaHRtbCcpO1xyXG59XHJcbiJdfQ==
