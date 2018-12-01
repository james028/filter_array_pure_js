const arr = [
  {task: 'buy a milk', bool: false},
  {task: 'get with dog', bool: true},
  {task: 'play a game', bool: false},
  {task: 'read book', bool: true},
  {task: 'buy ice', bool: false},
  {task: 'buy ice', bool: true}
];

const filter = {
  searchText: ''
};


const filterTask = function(a, b) {
  const filterNewTask = a.filter(function(e) {
      return e.task.includes(b.searchText);
  });

  const incomplete = filterNewTask.filter(function(e) {
      return !e.bool;
  });


  document.getElementById('ul').innerHTML = '';

  const h3 = document.createElement('h3');
  h3.innerHTML = `The length of array is ${incomplete.length}`;
  document.getElementById('ul').appendChild(h3);


    incomplete.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = item.task;
      document.getElementById('ul').appendChild(li);
  });
}

filterTask(arr, filter);


document.querySelector('#inp').addEventListener('input', function(e) {
  filter.searchText = e.target.value;
  filterTask(arr, filter);
});



