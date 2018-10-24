$(function() {
  $("#group_name").on("keyup", function() {
    var input = $("#group_name").val();
    console.log(input);
  });

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input);
  });
});
