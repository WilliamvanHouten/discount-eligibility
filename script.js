// write program that checks if a user qualifies for discount

// get age from user

// let user check box for membership or not

// create if else functions to create rules for eligibility discount


function checkEligibility() {
    let age = document.getElementById("age").value;
    let isMember = document.getElementById("isMember");
    let name = document.getElementById("name");
  
    if (age >= 65) {
      document.getElementById("output").innerHTML = 'Congrats! You qualify for senior Discount';  
      document.getElementById("output").style.color = "green";
    } else if (age >= 18 && isMember.checked) {
      document.getElementById("output").innerHTML = 'Congrats! You qualify for Member Discount';
      document.getElementById("output").style.color = "green";
    } else {
      document.getElementById("output").innerHTML = 'Sorry ! You do not qualify for any Discount';
      document.getElementById("output").style.color = "red";
    }
  }
  
  let button = document.querySelector("button[type=submit]");
  button.innerHTML = "Check Eligibility";
  button.style.fontSize = "20px";
  
  let form = document.getElementById("form");
  
  // Prevents form reloading
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    checkEligibility();
  });
  
  


