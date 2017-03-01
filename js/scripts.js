$(document).ready(function() {
  $("#registerForm").submit(function(event){
    event.preventDefault();

    var name = $("input#name").val();
    var deposit = $("input#initialDeposit").val();
    var newAccount = new accountSetup(name, deposit);
    console.log(deposit);
    $(".output").text(deposit);

  $("#accountForm").click(function(){
      var newDeposit = $("input#deposit").val();
      var withdrawal = $("input#withdrawal").val();
      var changeBalance = new balanceChange(newDeposit, withdrawal);
      console.log(changeBalance);
      newAccount.money.push(changeBalance);
      console.log(newAccount);
      var newTotal = newAccount.newTotal();
      console.log(newTotal);
      $(".output").text(newTotal);
    });
  });
});

//business logic
function accountSetup(name, deposit) {
  this.name = name;
  this.deposit = deposit;
  this.money = [];
}

function balanceChange(newDeposit, withdrawal) {
  this.newDeposit = newDeposit;
  this.withdrawal = withdrawal;
}

accountSetup.prototype.newTotal = function () {
  return this.name + this.money
}
