
$app = {

    init: function() {
        this.menu.init();
        this.ieCheck.init();
    },
    ieCheck: {
      init: function() {
        if(window.navigator.userAgent.indexOf("Edge") > -1) {
          $('body').addClass('edge');
        }
        if(navigator.userAgent.match(/Trident\/7\./)) {
          $('body').addClass('ie11');
        }

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            $('body').addClass('ie ie'+parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        }

      }

    },
    menu: {
      init: function(){
        });
      }
    },
}

document.onreadystatechange = function(e)
{
  if(document.readyState === 'complete') {
  }
}

$(document).ready(function(){
    $app.init();
});


$(window).resize(function(){
});

$(window).scroll(function() {
});
