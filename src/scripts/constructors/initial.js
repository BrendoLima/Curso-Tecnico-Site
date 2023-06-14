function adjustIframeHeight(iframe) {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
  //
  window.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("iframe");
    var propertyValue = "0";

    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute("frameborder", propertyValue);
    }
  });
  //
  window.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByTagName("iframe");
    var propertyValue = "no";

    for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute("scrolling", propertyValue);
    }
  });
}
