var app = angular.module("myList",[]);

app.controller("myListController",function($scope) {
  console.log("Controller works!");

  $scope.toDoList =[
    {name:"Band practice", day: "Thursday"},
    {name:"Grocery shopping", day:"Saturday"},
    {name:"Rule the world", day:"Everyday"}
  ];

  $scope.addTask = function(task){
    $scope.toDoList.push(task);
      console.log(task);

  }




});
