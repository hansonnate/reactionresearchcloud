document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault();
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //let results = "";
  //results += "<h2>" + "Prices will go here" + " </h2>"
  //document.getElementById("bitcoin").innerHTML = results;
  //const url = "http://api.coinlayer.com/api/live?access_key=49e09f00a5640f16e9e35aab7af78598";
  //const url = "http://api.coinlayer.com/live?access_key=49e09f00a5640f16e9e35aab7af78598&expand=1"
  let country = "";
  if (document.getElementById("countryinput").value === "united states" || document.getElementById("countryinput").value === "United States") {
    country = "US";
  }
  else {
    country = capitalizeFirstLetter(document.getElementById("countryinput").value);
  }
  let state = capitalizeFirstLetter(document.getElementById("stateinput").value);
  let url = "https://covid-api.mmediagroup.fr/v1/cases?country=" + country;
      fetch(url)
        .then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json);
          let results = "";
          //results += "<h2>" + "Prices will go here" + " </h2>";
          if (state != "") {
            results += "<h2><strong>Info For " + state + "," + country + "</strong></h2>"
            let date = "json." + state + ".updated"
            let confirmed = "json." + state + ".confirmed"
            let deaths = "json." + state + ".deaths"
            results += "<p>As of: " + eval(date) + "<p>"
            results += "<p>Confirmed Cases: " + eval(confirmed) + "<p>"
            results += "<p>Deaths: " + eval(deaths) + "<p>"
          }
          else {
            results += "<h2><strong>Info For " + country + "</strong></h2>"
            results += "<p>Confirmed Cases: " + json.All.confirmed + "<p>"
            results += "<p>Covid Deaths: " + json.All.deaths + "<p>"
            results += "<p>Avg Life Expectancy: " + json.All.life_expectancy + "<p>"
          }
          document.getElementById("coviddata").style.backgroundColor = "#15bcc7";
          document.getElementById("coviddata").style.margin = "20px 20px";
          document.getElementById("coviddata").style.borderRadius = "10px";
          document.getElementById("coviddata").innerHTML = results;

        });
});
