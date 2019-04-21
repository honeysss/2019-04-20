
$('.search-content').focus();

$('.search-content').on('keyup', function() {
  var content = $('.search-content').val();
  $.ajax({
    type: 'get',
    async: true,
    url: 'http://api.bing.com/qsonhs.aspx?type=cb&q=' + content,
    dataType: 'jsonp',
    jsonp: 'cb',
    jsonpCallback: 'callback',
    success: function(data) {
      var datas = data.AS.Results[0].Suggests;
      var html = '';
      for(var i = 0; i < datas.length; i ++) {
        html += '<li>' + datas[i].Txt + '</li>'
      }
      $(".list-ul").html(html);
      $('.list-content').show();
    },
    error: function(e) {
      console.log(e);
    }
  })
})

$(document).delegate('li', 'click', function () {
  var keyWord = $(this).text();
  location.href = 'https://cn.bing.com/search?q=' + keyWord;
})

$('*').not('.search-content').on('click', function() {
  $('.list-content').hide();
})