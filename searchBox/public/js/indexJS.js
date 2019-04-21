

// id dom
var getDom = function getDom(id) {
  return document.getElementById(id);
}

// 为dom绑定事件
var addEvent = function (id, event, fn) {
  var el = getDom(id) || document;
  // 处理浏览器的兼容性
  // 非IE浏览器
  if (el.addEventListener) {
    el.addEventListener(event, fn, false);
    // IE浏览器
  }
  if (el.attachEvent) {
    el.attachEvent('on' + event, fn);
  }
}

// 聚焦
getDom('search-content').focus();

// 原生AJAX请求
var ajaxGet = function (url, callback) {
  var xmlHttp = '';
  if(window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest(); 
  }else {
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
  }

  xmlHttp.onreadyStateChange = function() {
    if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(xmlHttp.reponseText);
    }
  }

  xmlHttp.open('get', url, true);
  xmlHttp.send();
}

// 为搜索框绑定键盘事件
addEvent('search-content', 'keyup', function () {
  getDom('list-content').style.display = 'block';
  var content = getDom('search-content').value;
  // 这里产生一个跨域问题 不知道怎么解决
  ajaxGet('https://api.bing.com/qsonhs.aspx?q=' + content, function(data) {
    console.log(data);
    var html = '';
    var datas = data.AS.Results[0].Suggests;
    for(var i = 0; i < datas.length; i ++) {
      html += '<li>' + datas[i].Txt + '</li>'
    }
    getDom('list-ul').innerHTML = html;
  })
  
})

// 事件代理
var delegateEvent = function(target, event, fn) {
  addEvent(document, event, function(e) {
    if(e.target.nodeName == target.toUpperCase()) {
      fn.call(e.target);
    }
  })
}

delegateEvent('li', 'click', function () { 
  var keyWord = this.innerHTML;
  location.href = 'https://api.bing.com/search?q=' + keyWord;
})

// 点击其他地方隐藏ul
addEvent(document, 'click', function() {
  getDom('list-content').style.display = 'none';
})

// 