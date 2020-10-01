
function newItem(){

  // adding a new item to the list:
    let listItem = $('<li></li>');
    let inputValue = $('#input').val();
    listItem.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(listItem);
    }
  
   // crossing out an item from the list:
    listItem.on("dblclick", function crossOut() {
      listItem.toggleClass("strike");
    });

   // adding delete button X: 
    let deleteButton = $('<crossOutButton></crossOutButton>');
    deleteButton.append(document.createTextNode('X'));
    listItem.append(deleteButton);
  
    deleteButton.on("click", function deleteListItem() {
      listItem.addClass("delete")
    });

   // reordering items: 
     $('#list').sortable();
  }
