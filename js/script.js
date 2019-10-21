
// sticky de la nav mobile :

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navmobile");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// pour le champs de recherche du header .

$(document).ready(function () {
    $( "#search" ).click(function() {     
        $('#form-search').toggle("slide", { direction: "right" }, 1000);
     });
    $('#search2').click(function () {
        console.log('ok');
        $('#form-search2').slideToggle();
    });

    // slidetoggle chambres avis
    $('#buttonA').click(function () {
        $('#avis').slideToggle(); // slideToggle : Methode qui permet de faire glisser vers le haut et vers le bas
    });


    $('#barre3').click(function () {
        $('#rideau3').slideToggle(); // slideToggle : Methode qui permet de faire glisser vers le haut et vers le bas
    });

});


//modale de résérvation:

var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
$('#startDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: today,
    maxDate: function () {
        return $('#endDate').val();
    }
});
$('#endDate').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'fontawesome',
    minDate: function () {
        return $('#startDate').val();
    }
});

//fin

//script  pour controler le nombre de produits commandés :

$(document).ready(function () {
    
    $('.plus').on('click', function(){
        var i = $(this).next().val();
        var plus = parseInt(i);
        $(this).next().val(plus + 1) // next() nous trouve l'élément qui se trouve juste apres celui qu on a séléctionner .

    });

    $('.minus').on('click', function(){

        var i= $(this).prev().val();

        var moins = parseInt(i);

        if (moins >= 1) {
            $(this).prev().val(moins - 1);  // prev() nous trouve :'element juste avant celui qu on a séléctionner 
        }

    });


    
});
//bouton corbeille de la page panier 
$(document).ready(function(){

    $('.corbeille-page').on('click',function(){

     var premierParent= $(this).parent();
      var deuxiemeParent=premierParent.parent();
      var troisiemeParent=deuxiemeParent.parent();
      troisiemeParent.hide();
      var i=$('.number_panier').html() ;
      var y= parseInt(i);
      y=y-1;
      $('.number_panier').html(y) ; 

    });



  });

  //bouton corbeille de la modale panier

  $(document).ready(function(){

    $('.corbeille').on('click',function(){

     var premierParent= $(this).parent();
      var deuxiemeParent=premierParent.parent();
      var troisiemeParent=deuxiemeParent.parent();
      var quatriemeParent=troisiemeParent.parent();
         quatriemeParent.hide();
      var i=$('.number_panier').html() ;
      var y= parseInt(i);
      y=y-1;
      $('.number_panier').html(y) ; 

    });



  });

//script page évènements:

$(document).ready(function () {


    $('#button1').on('click', function () {

        $("#effect1").toggle("blind");


    });


    $('#voir_plus').on('click', function () {

        $("#plus").toggle("blind");
    });


});

//fin.


// le focus et le blur pour nos champs de formulaire :


$(document).ready(function () {

    $('input').focus(function () {

        $(this).css({
            backgroundColor: '#d99e9e',
            color: 'white'

        });


    });

    $('textarea').focus(function () {

        $(this).css({
            backgroundColor: '#d99e9e',
            color: 'white'

        });


    });

    $('input').blur(function () {

        $(this).css({
            backgroundColor: 'white',
            color: 'black'

        });


    });

    $('textarea').blur(function () {

        $(this).css({
            backgroundColor: 'white',
            color: 'black'

        });


    });


});

//fin de focus et blur .


// le script image de  la page presse :


var monImage = document.getElementById('img_principale');

        function image1() {
            var src = monImage.getAttribute('src');
            var alt = monImage.getAttribute('alt');
            monImage.src = "img/presse/article1.jpg";
            monImage.alt = "article1";

        }
        function image2() {
            var src = monImage.getAttribute('src');
            monImage.src = "img/presse/article2.jpg";
            monImage.alt = "article2";
        }
        function image3() {
            var src = monImage.getAttribute('src');
            monImage.src = "img/presse/article3.jpg";
            monImage.alt = "article3";
        }
        function image4() {
            var src = monImage.getAttribute('src');
            monImage.src = "img/presse/article4.jpg";
            monImage.alt = "article4";
        }
        

    // pour les click hover  de la page presse :

        $(document).ready(function () {


            $('a').focus(function() {
                $(this).css('background-color', 'skyblue');
            });
            
            $('a').blur(function() {
                $(this).css('background-color', 'white');
            });




        });


        // fin du script page presse .

