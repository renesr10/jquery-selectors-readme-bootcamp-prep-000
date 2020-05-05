// declare your functions here...
function paragraphSelector() { 
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('div img:first-child, second-child')
}

function firstListItem() {
  $('parent-tag child-tag:first-child')
}