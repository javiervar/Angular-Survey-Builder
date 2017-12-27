var app=angular.module('app', ['dndLists']);

app.controller('builder',['$scope',function($s){

$s.survey={name:"",description:"",questions:[]};
$s.add=function(){
  console.log("ADD")

  var question={description:"",type:"",option:[]};
  $s.survey.questions.push(question);
}

$s.remove=function(index) {
  console.log(index);
  if (index==0&&$s.survey.questions.length==1)
    $s.survey.questions=[];
  else
    $s.survey.questions=$s.survey.questions.splice(index,1);
}
$s.clone=function(element) {
  $s.survey.questions.push(Object.assign({}, element));
}

}]);
