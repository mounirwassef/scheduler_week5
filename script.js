var titleDate = dayjs().format('dddd,MMMM D');

console.log(titleDate);

$('#currentDay').text(titleDate);

var titleDateN = dayjs().format('HH');
var datesInHtml = [];


$(".rowid").each(function () {
  datesInHtml.push($(this).text());
});

console.log(titleDateN);

for (var i = 0; i < datesInHtml.length; i++) {
  if (datesInHtml[i] === titleDateN) {
    $(".row").eq(i).attr('class', 'row time-block present');
    console.log(datesInHtml)
  } else if ((datesInHtml[i] > titleDateN)) {
    $(".row").eq(i).attr('class', 'row time-block future');
    console.log(datesInHtml)
  } else {
    $(".row").eq(i).attr('class', 'row time-block past');
    console.log(datesInHtml);
  }
}

$(function () {

  var buttons = $('button');
  console.log(buttons);

  var textareas = $('textarea');
  console.log(textareas);

  var ids = $('div[id]');
  console.log(ids);

  var idsnew = [];
  ids.each(function () {
    var id = $(this).attr('id');
    if (id) {
      idsnew.push(id);
    }
  });

  console.log(idsnew);

  $(function() {
    var buttons = $('button');
    var textareas = $('textarea');
    var ids = $('div[id]');
  
    var idsnew = [];
    ids.each(function() {
      var id = $(this).attr('id');
      if (id) {
        idsnew.push(id);
      }
    });
  
    buttons.on('click', function() {
      var inputTarea = [];
      textareas.each(function() {
        inputTarea.push($(this).val());
      });
  
      var savedtext = {
        input: inputTarea,
        pID: idsnew
      };
  
      localStorage.setItem("TextArea", JSON.stringify(savedtext));
    });
  
    var lastInput = JSON.parse(localStorage.getItem("TextArea"));
    if (lastInput) {
      for (var i = 0; i < textareas.length; i++) {
        var id = idsnew[i];
        var val = lastInput.input[i];
        $('#' + id).find('textarea').val(val);
      }
    }
  });

})
