$(function() {
  // Load favorite gems on page load if any
  let gems = JSON.parse(localStorage.getItem("gems")) || []

  // Save or remove gem on click
  $('#search_area').on('click', '.favorite', function() {
    // Retrieve the name of gem clicked
    const thisGem = $(this).attr('id');

    const removeGem = gem => {
      let index = gems.indexOf(gem);

      if (index > -1) {
        gems.splice(index, 1)
      }
    }

    const addGem = gem => {
      gems.push(gem);
    }

    const starred = gem => {
      if (gems.includes(gem)) {
        return '/assets/star-gray';
      } else {
        return '/assets/star-blue';
      }
    }

    // Check if gem is saved or not, render correct star-image
    $(this).attr('src', starred(thisGem));
    // Decide if gem should be deleted or added
    gems.includes(thisGem) ? removeGem(thisGem) : addGem(thisGem)
    // Save gem to browser
    localStorage.setItem("gems", JSON.stringify(gems));
  });

  const displayFavorites = () => {
    // Display saved gems to favorites page
    // If no gems, display message
    if(gems.length === 0) {
      $('.favorite-gems').append('<p class="text-capitalize text-muted">none</p>');
    } else {
      // Create and populate table data to page
      let html = '<tr>';
      for(let i = 0; i < gems.length; i++) {
        if(i > 0 && i % 3 == 0) {
            html += '</tr>';
        }
         html += `<td><img src=/assets/star-blue class=favorite id=${gems[i]}> <a href=https://rubygems.org/gems/${gems[i]}>${gems[i]}</a></td>`;
       }
       html += '</tr>';
       $('.table').append(html);
    }
  }
  displayFavorites();
})
