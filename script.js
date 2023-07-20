var items = [];

    function submitItems() {
      var input = document.getElementById('input-el');
      var item = input.value;
      console.log(input);

      if (item !== '') {
        items.push(item);
        input.value = '';

        var groceryList = document.getElementById('grocery-list');
        groceryList.innerHTML = '';

        for (var i = 0; i < items.length; i++) {
          var listItem = document.createElement('li');
          listItem.appendChild(document.createTextNode(items[i]));
          groceryList.appendChild(listItem);
        }
      }
    }