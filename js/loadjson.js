function loadJSON(fileName, callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '/com_json/' + fileName + '.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}


var com_name = "54";
loadJSON(com_name, function (response) {
  // Parse JSON string into object
  var actual_JSON = JSON.parse(response);
  console.log(actual_JSON);
  $('#com_name').text(actual_JSON['company']);
  $('#description').text(actual_JSON['description']);
  $('#what').text(actual_JSON['solution_description']);
  $('#who').text(actual_JSON['solution_provider']);
  $('#where').text(actual_JSON['reference_site']);
  $('#contact').text(actual_JSON['contact']);
  $('#pain_points_and_needs').text(actual_JSON['pain_points_and_needs']);
  $('#smart_solution').text(actual_JSON['smart_solution']);
  $('#adopted_technology').text(actual_JSON['adopted_technology']);
  $('#benefits').text(actual_JSON['benefits']);
});