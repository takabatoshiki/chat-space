$(function(){
  function buildHTML(message){
    var showImage = "";
    if (message.image) {
      showImage = `<img src="${message.image}" class="message__content__image">`
    }
    var html = `<div class="message">
                  <div class="message__info">
                    <p class="name">${message.name}</p>
                    <p class="date">${message.date}</p>
                  </div>
                  <div class="message__content">
                    <p class="description">${message.content}</p>
                    ${showImage}
                  </div>
                </div>`;
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main_contents').append(html);
      $('.form__message').val('');
    });
  });
});
