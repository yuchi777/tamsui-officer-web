$(document).ready(function () {
  $('#example').DataTable({
      "ajax": "./js/A300.json",
      "columns": [
          { "data": "name" },
          { "data": "position" },
          { "data": "office" },
          { "data": "extn" },
          { "data": "start_date" },
          { "data": "salary" },
          { "data": "date" },
          { "data": "time" },
      ]
  });
});