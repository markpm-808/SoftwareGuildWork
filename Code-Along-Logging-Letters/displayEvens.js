function validateItems() {
    var start = document.forms["displayEvens"]["start"].value;
    var end = document.forms["displayEvens"]["end"].value;
    var step = document.forms["displayEvens"]["step"].value;

    if (start == "" || isNaN(start) || parseInt(start) > parseInt(end)) {
        alert("Starting Number must be filled in with a number less than the ending number.");
        document.forms["displayEvens"]["start"]
           .parentElement.className = "form-group has-error";
        document.forms["displayEvens"]["start"].focus();
        return false;
    }
   if (end == "" || isNaN(end)) {
       alert("Ending number must be filled in with a number.");
       document.forms["displayEvens"]["end"]
          .parentElement.className = "form-group has-error"
       document.forms["displayEvens"]["end"].focus();
       return false;
   }

   if (step < 1){
    alert("Step must be a positive number.");
    document.forms["displayEvens"]["step"]
    .parentElement.className = "form-group has-error"
    document.forms["displayEvens"]["step"].focus();
    return false; 
   }
   document.getElementById("results").style.display = "block";
   document.getElementById("starting").innerText = start;
   document.getElementById("ending").innerText = end;
   document.getElementById("stepping").innerText = step;

var results = new Array();

   for(var i = parseInt(start); i <= parseInt(end); i+=parseInt(step))
   {
    if(i %2 == 0)
    {
      results.push(i);
    }
   }

   document.getElementById("evens").innerText = results;
   return false;
} 