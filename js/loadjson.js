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

function createList(my_array, my_id) {
  var n = my_array.length;
  for (count = 0; count < n; count++) {
    // console.log(count);
    var innerHTML = document.getElementById(my_id).innerHTML;
    innerHTML = innerHTML + `<div class="my_list"><p>${my_array[count]}</p></div>`;
    // console.log(innerHTML);
    document.getElementById(my_id).innerHTML = innerHTML;
  }
}

// function createLi(count) {
//   // console.log(count);
//   var innerHTML = document.getElementById("pain_points_and_needs").innerHTML;
//   innerHTML = innerHTML + `<li>${count}</li>`;
//   // console.log(innerHTML);
//   document.getElementById("pain_points_and_needs").innerHTML = innerHTML;
// }


const urlParams = new URLSearchParams(window.location.search);
const com_name = urlParams.get('id');
console.log(com_name);
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
  // $('#pain_points_and_needs').text(actual_JSON['pain_points_and_needs']);
  createList(actual_JSON['pain_points_and_needs'], 'pain_points_and_needs')
  $('#smart_solution').text(actual_JSON['smart_solution']);
  $('#adopted_technology').text(actual_JSON['adopted_technology']);
  // $('#benefits').text(actual_JSON['benefits']);

  // $("#s1-img").attr("src", "public/" + com_name + "/1.png");
  // $("#s2-img").attr("src", "public/" + com_name + "/2.png");
  // $("#s3-1-img").attr("src", "public/" + com_name + "/3-1.png");
  // $("#s3-2-img").attr("src", "public/" + com_name + "/3-2.png");
  // $("#s3-3-img").attr("src", "public/" + com_name + "/3-3.png");
  // $("#s3-4-img").attr("src", "public/" + com_name + "/3-4.png");
  // $("#s3-5-img").attr("src", "public/" + com_name + "/3-5.png");
  // $("#s5-img").attr("src", "public/" + com_name + "/4.png");

  createList(actual_JSON['benefits'], 'benefits')
});