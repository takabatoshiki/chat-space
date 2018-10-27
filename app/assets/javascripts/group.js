$(function() {
  var user_search_result = $('#user-search-result');

  function appendUserName(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${user.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`
    user_search_result.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    var input = $.trim($("#user-search-field").val());
    if (input != ""){
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
      .fail(function() {
        alert('ユーザー検索に失敗しました');
      })
    } else {
      console.log(input + "!");
    }
  });

  $('#user-search-result').on('click', '.user-search-add',function(){
    var user_id = $('.chat-group-user__btn--add').attr('data-user-id');
    var user_add = $('.chat-group-user__btn--add').attr('data-user-name');
    console.log(user_id);
    console.log(user_add);
  });
});
