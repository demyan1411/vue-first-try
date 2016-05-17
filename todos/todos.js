// ViewModel
var Todos = Vue.extend({
  name: 'todos'
});

var vm = new Todos({
  el: '#todos',
  data: {
    isA: true,
    tasks: [
      {title: 'подготовка материала', done: true},
      {title: 'запись урока', done: false}
    ],
    newTask: '',
    editTask: null
  },
  filters: {
    openTasks: function () {
      return this.tasks.filter(function (task) {
        return task.done;
      });
    }
  },

  methods: {
    addTask: function (e) {
      e.preventDefault();
      if (this.newTask == '') return

      this.tasks.push({ title: this.newTask, done: false });
      this.newTask = '';
    },
    removeTask: function (task) {
      this.tasks.$remove(task);
    }
  },

  ready: function () {
    console.log('ViewModel ready!');
  }
});
