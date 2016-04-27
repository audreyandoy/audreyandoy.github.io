$(document).ready(function() {
    $('#fullpage').fullpage({
    anchors:['About', 'Skills', 'Projects'],
    menu: '#menu',
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['About', 'Skills', 'Projects'],
    showActiveTooltip: true,
    sectionsColor : ['#fff', '#000', '#fff', '#000'],
    scrollOverflow: false
  });

    $(function(){
        $(".element").typed({
            strings: ["Hello, I'm <strong>Audrey</strong>."],
            typeSpeed: 60,
            contentType: 'html'
        });
    });

    $(function(){
        
        $('.modal-trigger').leanModal();
    });
});