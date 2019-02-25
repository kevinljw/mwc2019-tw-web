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

  $("#s1-img").attr("src", "public/" + com_name + "/1.png");
  $("#s1-img").attr("src", "public/" + com_name + "/1.png");
  $("#s2-img").attr("src", "public/" + com_name + "/2.png");


 
  $("#s3-1-img").attr("src", "public/" + com_name + "/3-1.jpg");
  $("#s3-1-img").attr("data-remote", "public/" + com_name + "/3-1.jpg");

  $("#s3-2-img").attr("src", "public/" + com_name + "/3-2.jpg");
  $("#s3-2-img").attr("data-remote", "public/" + com_name + "/3-2.jpg");
  
    
  $("#s3-3-img").attr("src", "public/" + com_name + "/3-3.jpg");
  $("#s3-3-img").attr("data-remote", "public/" + com_name + "/3-3.jpg");
  
  $("#s3-4-img").attr("src", "public/" + com_name + "/3-4.jpg");
  $("#s3-4-img").attr("data-remote", "public/" + com_name + "/3-4.jpg");

  $("#s3-5-img").attr("src", "public/" + com_name + "/3-5.jpg");
  $("#s3-5-img").attr("data-remote", "public/" + com_name + "/3-5.jpg");
    
  $("#carouselExampleIndicators .carousel-item img").on( "error", function(){
      $(this).parent().remove();
      $("#carouselExampleIndicators .carousel-indicators li:last-child").remove();
      if($("#carouselExampleIndicators .carousel-indicators li").length <= 1){
          $("#carouselExampleIndicators .carousel-control-next,#carouselExampleIndicators .carousel-control-prev").remove();
          $("#carouselExampleIndicators .carousel-indicators li:last-child").remove();
      }
  });
    
  
  // var picture_number = 0;
  // for (count = 1; count < 6; count++) {
  //   var url = "./public/" + com_name + "/3-" + count + ".jpg";
  //   var img = new Image();
  //   img.src = url;
  //   alert(url);
  //   if (img.complete) {
  //     alert('圖片存在');
  //   } else {
  //     // alert('圖片不存在');
  //   }
  // }

  // for (count = 1; count < 6; count++) {
  //   var url = "./public/" + com_name + "/3-" + count + ".jpg";
  //   alert(count);
  //   if (!url) {
  //     var url = {};
  //     alert('圖片存在');
  //   }
  // }


  $("#s5-img").attr("src", "public/" + com_name + "/4.png");

  createList(actual_JSON['benefits'], 'benefits')
});