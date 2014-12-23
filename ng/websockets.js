angular.module('app')
.run(function ($rootScope) {
  var url = 'ws://localhost:3000'
  var connection = new WebSocket(url)

  connection.onopen = function () {
    console.log('WebSocket connected')
  }
})
