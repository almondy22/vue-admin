(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      this.iframe.src = '../' + page;
    }
  }]);

  return Editor;
}();

},{}],2:[function(require,module,exports){
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

},{"./editor":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc3JjL2VkaXRvci5qcyIsImFwcC9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBLE1BQU0sQ0FBQyxPQUFQO0FBQUE7QUFBQTtBQUNJLG9CQUFjO0FBQUE7O0FBQ1YsU0FBSyxNQUFMLEdBQWMsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNIOztBQUhMO0FBQUE7QUFBQSx5QkFJUyxJQUpULEVBSWU7QUFDUCxXQUFLLE1BQUwsQ0FBWSxHQUFaLEdBQWtCLFFBQVEsSUFBMUI7QUFDSDtBQU5MOztBQUFBO0FBQUE7Ozs7O0FDQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQSxNQUFNLENBQUMsTUFBUCxHQUFnQixJQUFJLE1BQUosRUFBaEI7O0FBRUEsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixFQUFBLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxDQUFtQixZQUFuQjtBQUNILENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEVkaXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmlmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xyXG4gICAgfVxyXG4gICAgb3BlbihwYWdlKSB7XHJcbiAgICAgICAgdGhpcy5pZnJhbWUuc3JjID0gJy4uLycgKyBwYWdlO1xyXG4gICAgfVxyXG59IiwiLy8gY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XHJcblxyXG4vLyBmdW5jdGlvbiBwYWdlc0xpc3QoKSB7XHJcbi8vICAgICAkKCdoMScpLnJlbW92ZSgpO1xyXG4vLyAgICAgJC5nZXQoJy4vYXBpL2FwaS5waHAnLCAoZGF0YSkgPT4ge1xyXG4vLyAgICAgZGF0YS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4vLyAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxoMT4nICsgZWxlbWVudCArICc8L2gxPicpO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgfSwgJ0pTT04nKTtcclxuLy8gfVxyXG5cclxuLy8gcGFnZXNMaXN0KCk7XHJcblxyXG4vLyAkKCcuY3JlYXRlLWJ0bicpLmNsaWNrKCgpID0+IHtcclxuLy8gICAgICQucG9zdCgnLi9hcGkvY3JlYXRlLXBhZ2UucGhwJywge1xyXG4vLyAgICAgICAgICduYW1lJzogJCgnLmNyZWF0ZS1pbnAnKS52YWwoKVxyXG4vLyAgICAgfSwgZGF0YSA9PiB7XHJcbi8vICAgICAgICAgcGFnZXNMaXN0KCk7XHJcbi8vICAgICB9KVxyXG4vLyAgICAgLmZhaWwoKCkgPT4ge1xyXG4vLyAgICAgICAgIGFsZXJ0KFwiRmlsZSB3aXRoIHRoaXMgbmFtZSBhbHJlYWR5IGV4aXN0cyFcIik7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG4vLyAkKCcuZGVsLWJ0bicpLmNsaWNrKCgpID0+IHtcclxuLy8gICAgICQucG9zdCgnLi9hcGkvZGVsZXRlLXBhZ2UucGhwJywge1xyXG4vLyAgICAgICAgIFwibmFtZVwiOiAkKCcuZGVsLWlucCcpLnZhbCgpXHJcbi8vICAgICB9LCBkYXRhID0+IHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgICAgICBwYWdlc0xpc3QoKTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAuZmFpbCgoKSA9PiB7XHJcbi8vICAgICAgICAgYWxlcnQoXCJGaWxlIHdpdGggdGhpcyBuYW1lIGRvIG5vdCBleGlzdCFcIik7XHJcbi8vICAgICB9KTtcclxuLy8gfSlcclxuXHJcblxyXG5jb25zdCBFZGl0b3IgPSByZXF1aXJlKFwiLi9lZGl0b3JcIik7XHJcblxyXG53aW5kb3cuZWRpdG9yID0gbmV3IEVkaXRvcigpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5lZGl0b3Iub3BlbignaW5kZXguaHRtbCcpXHJcbn1cclxuIl19
