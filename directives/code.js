(function() {

  var els = document.body.querySelectorAll('#container div h4 ~ *:not(pre)');
      els = Array.prototype.slice.call(els);

  els.forEach(function (item) {
    var code = document.createElement('code');
        code.textContent = item.outerHTML;
    item.parentNode.insertBefore(code, item);
  });

})();
