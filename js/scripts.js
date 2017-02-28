$(document).ready(function() {
  $("#registerForm").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var deposit = $("input#initialDeposit").val();
    var newAccount = new accountSetup(name, deposit);
    console.log(newAccount);
  });
});

//business logic
function accountSetup(name, deposit) {
  this.name = name;
  this.deposit = deposit;
}
