console.log("this is working!")

$("a").click( function(event) {
  if(confirm("You sure you can handle it?") == null){
    event.preventDefault();
  }
}
);

// $("a").click( function(event) {
//   event.preventDefault();
//   console.log("this is working");
//   // $("a").hide().setTimeout($("a").show(), 3000);
//   // $("body p").html("haha gotcha");
// })
