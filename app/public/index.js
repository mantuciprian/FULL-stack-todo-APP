(function(){
"use strinct"
    // recive data from server

    var receivedData = [];

    var getData = function() {
        var dat = 
        $.ajax({
            url: "http://localhost:3000/todos",
            type: 'GET',
            success: function(res) {
             console.log(res);
             receivedData = res;
             console.log(receivedData + 'from ajax call...')
             showTodos(res)
            }
        });

    }
    getData();
    

    console.log(receivedData + 'from outer scope...')
    // show totdo actions:

    var showTodos = function(dataReceived) {
        var list = $('#todos');
        console.log(list)
        list.text('');
        dataReceived.map(function(v , i) {
            list.append(
                '<div class = "series">' + 
                '<div> action number: ' + i + '</div>'  +
                '<div an> action name: ' + v.action + ' </div> '  +
                ' <div as> action status:  <input type="checkbox" />' 
                
                + ' </div>' 
             
            );
        })
    }

    var checkItem = function() {
        alert(this)
        this.checked === true ? alert('yes') : alert('false') 
    }

   var inputs =  document.getElementsByClassName('input');
   console.log(inputs)
    for(var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', checkItem)
    }
    
})();