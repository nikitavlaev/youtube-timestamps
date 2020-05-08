let changeColor = document.getElementById('changeColor');
let record = '{"field1": 123, "field2": 321}'

  chrome.storage.sync.get('color', function(data) {
    changeColor.setAttribute('value', data.color);
  });
  changeColor.onclick = function(element) {
    table = document.getElementById('ts-table')
    table.style.display = '';

    tableBody = document.getElementById('ts-table-body')
    rows = ''
    counter = 0
    JSON.parse(record, function(k, v) {
      if (k == "") {
        return v;
      }
      counter++
      console.log(k); // пишем имя текущего свойства, последним именем будет ""
      rows += '<tr><th scope="row">' + counter + '</th><td>' + k + '</td><td>' + v + '</td></tr>'
      return v;       // возвращаем неизменённое значение свойства
    });
    tableBody.innerHTML = rows
    /*chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });*/
  };
/*
  "page_action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "images/get_started16.png",
      "32": "images/get_started32.png",
      "48": "images/get_started48.png",
      "128": "images/get_started128.png"
    }
  },
*/  