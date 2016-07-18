$(document).ready(function(){
  // Code from W3Schools
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional numbergit add (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // $("div[data-speaker").each(function(item, elem){
  //   console.log(item);
  //   console.log(elem);
  //   console.log(elem.getAttribute("data-speaker"));
  //   path = elem.getAttribute("data-speaker") + elem.getAttribute("data-ext");
  //   console.log(path);
  //   elem.style.background = "linear-gradient(0, rgba(255, 255, 0, .5), rgba(255, 255, 0, .5)) url('https://www.src.org/image/benjamin-jun.png') no-repeat center";
  //   elem.style.minHeight = "200px";
  //   // elem.css("background-image", "url('assets/img/speakers/'" + path + ")");
  //   console.log(elem.style.backgroundImage);
  // });
});
