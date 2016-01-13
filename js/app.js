function appendTaskToList(val) {
  $('#list').append("<li><input type='checkbox' class='cbox' value='" + val + "'>  " + val + " <a href='#' class='cancel-btn'>Cancel Task</a></li>");
}


if (localStorage['tasks']) {
    var tasks = JSON.parse(localStorage['tasks']);
}else {
    var tasks = [];
}

for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);
}

var addTask = function(){
  // get value from #name input
  var val = $('#name').val();
  
  // add the task to the array
  tasks.push(val);
  
  // save to local storage
  localStorage["tasks"] = JSON.stringify(tasks);
  
  // append the name to the list
  appendTaskToList(val);
  
  // reset the input field and focus it.
  $('#name').val("").focus();
}

$('#add-btn').click(addTask);
$('#name').keyup(function(e){
    if (e.keyCode === 13) {
        addTask();
    }
});


// $('.done-btn').on( 'click', function() {
//   $(this).parent('li').addClass('done');
// });    

$('.cbox').on( 'click', function() {
  $(this).parent('li').addClass('done');
  // $(this).parent('li').toggle(this.checked);
});

$('.cancel-btn').on( 'click', function() {
  $(this).parent('li').fadeOut();
});