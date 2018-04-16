//business logic
function City (name, state, artScore, tranScore, wildScore, restScore, dogScore) {
  this.name = name;
  this.state = state;
  this.artScore = artScore;
  this.tranScore = tranScore;
  this.wildScore = wildScore;
  this.restScore= restScore;
  this.dogScore = dogScore;
}

City.prototype.total = function() {
  return (this.artScore + this.tranScore + this.wildScore + this.restScore + this.dogScore);
}

//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var cityName = $("input#cityName").val();
    var stateName = $("input#state").val();

    var art = parseInt($("input:radio[name=artsy]:checked").val());
    var tran = parseInt($("input:radio[name=transportation]:checked").val());
    var wild = parseInt($("input:radio[name=wild]:checked").val());
    var rest = parseInt($("input:radio[name=restaurant]:checked").val());
    var dog = parseInt($("input:radio[name=dog]:checked").val());

    var newCity = new City(cityName, stateName, art, tran, wild, rest, dog);
    var points = newCity.total();

      $(".results").show();
      $("ul#showRank").append("<li><span class='order'>Your city had "+points+" points!</span></li>");
      if (points<12.5){
        $("ul#showRank").append("<li><span class='order'>That's below average! Maybe time to move?</span></li>");
      } else {
        $("ul#showRank").append("<li><span class='order'>That's above average! Way to live in a cool city!</span></li>");
      }


  });
});
