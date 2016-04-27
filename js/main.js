$(document).ready(function() {
    $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage'],
    css3: true
  });

    $(function(){
        $(".element").typed({
            strings: ["Hello, I'm <strong>Audrey</strong>."],
            typeSpeed: 60,
            contentType: 'html'
        });
    });

});