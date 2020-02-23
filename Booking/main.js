const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(p => {
  p.addEventListener("click", () => {
    selected.innerHTML = p.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


const selected1 = document.querySelector(".selected1");
const optionsContainer1 = document.querySelector(".options-container1");

const optionsList1 = document.querySelectorAll(".option1");

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active");
});

optionsList1.forEach(o => {
  o.addEventListener("click", () => {
    selected1.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer1.classList.remove("active");
  });
});


const selected2 = document.querySelector(".selected2");
const optionsContainer2 = document.querySelector(".options-container2");

const optionsList2 = document.querySelectorAll(".option2");

selected2.addEventListener("click", () => {
  optionsContainer2.classList.toggle("active");
});

optionsList2.forEach(q => {
  q.addEventListener("click", () => {
    selected2.innerHTML = q.querySelector("label").innerHTML;
    optionsContainer2.classList.remove("active");
  });
});

// $(document).mouseup(function (e)
// {
//         $('.options-container').hide();
// });


// function showDiv() {
//   document.getElementById('sign-in').style.display = "block";
// }

$(document).mouseup(function(e) { 
  var container = $(".selected"); // target ID or class 
  var container1 = $(".selected1"); // target ID or class 
  var container2 = $(".selected2"); // target ID or class 
  // if the target of the click isn't the container nor a descendant of the container 
  if (!container.is(e.target) && container.has(e.target).length === 0 && !container1.is(e.target) && container1.has(e.target).length === 0 && !container2.is(e.target) && container2.has(e.target).length === 0) { 
      // get Event here 
      $('.active').removeClass('active'); 
  } 
  
}); 


// $(document).mouseup(function(e) { 
//   var container = $(".selected"); // target ID or class 
  
//   // if the target of the click isn't the container nor a descendant of the container 
//   if (!container.is(e.target) && container.has(e.target).length === 0  ) { 
//       // get Event here 
//       $('.active').removeClass('active'); 
//   } 
// }); 






// function showDiv() {
//   var x = document.getElementById('sign-in');
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }



var $mediaElements = $('.foto');

$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');

    if(filterVal === 'all'){
      $mediaElements.show();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).show();
    }
});


$(document).ready(function(){
  $("#hide").click(function(){
    $(".viewall").hide();
  });
  $("#show").click(function(){
    $(".viewall").show();
  });

});