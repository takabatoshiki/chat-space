$(function() {
  var user_search_result = $('#user-search-result');

  function appendUserName(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    user_search_result.append(html);
  }

  $("#group_name").on("keyup", function() {
    var input = $("#group_name").val();
    console.log(input);
  });

  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();
    console.log(input);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users){
      $('#user-search-result').empty();
      if (users.length != 0){
        users.forEach(function(user){
          appendUserName(user);
        });
      }
    })
  });
});
