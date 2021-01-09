console.log( $(".menuIconMobile") );
$(".menuIconMobile").on("click", function(){
    // console.log("i'm clicking!")
    $(".toggleMenu").toggleClass("active");
});



// const parallax = document.getElementById("parallax");

// window.addEventListener("scroll", function () {
//     let offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = offset * 0.7 + "px";
//     // console.log('Offset: ' + offset);
//     // console.log('offset * 0.7' + offset * 0.7);
// });

