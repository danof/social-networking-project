angular.module("app",[]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,s){t.addPost=function(){t.postBody&&s.create({username:"dickeyxxx",body:t.postBody}).success(function(s){t.posts.unshift(s),t.postBody=null})},s.fetch().success(function(s){t.posts=s})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(s){return t.post("/api/posts",s)}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInBvc3RzLmN0cmwuanMiLCJwb3N0cy5zdmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBQSxPQUFBLFVDQUEsUUFBQSxPQUFBLE9BQ0EsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBLEVBQUEsR0FDQSxFQUFBLFFBQUEsV0FDQSxFQUFBLFVBQ0EsRUFBQSxRQUNBLFNBQUEsWUFDQSxLQUFBLEVBQUEsV0FDQSxRQUFBLFNBQUEsR0FDQSxFQUFBLE1BQUEsUUFBQSxHQUNBLEVBQUEsU0FBQSxRQUtBLEVBQUEsUUFBQSxRQUFBLFNBQUEsR0FDQSxFQUFBLE1BQUEsT0NmQSxRQUFBLE9BQUEsT0FDQSxRQUFBLFlBQUEsUUFBQSxTQUFBLEdBQ0EsS0FBQSxNQUFBLFdBQ0EsTUFBQSxHQUFBLElBQUEsZUFFQSxLQUFBLE9BQUEsU0FBQSxHQUNBLE1BQUEsR0FBQSxLQUFBLGFBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFtdKVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgUG9zdHNTdmMpIHtcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcbiAgICAgICAgdXNlcm5hbWU6ICdkaWNrZXl4eHgnLFxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3QpIHtcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocG9zdClcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBQb3N0c1N2Yy5mZXRjaCgpLnN1Y2Nlc3MoZnVuY3Rpb24gKHBvc3RzKSB7XG4gICAgJHNjb3BlLnBvc3RzID0gcG9zdHNcbiAgfSlcbn0pXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICB0aGlzLmZldGNoID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuICB9XG4gIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpXG4gIH1cbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=