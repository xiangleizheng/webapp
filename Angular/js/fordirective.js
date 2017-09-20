var app = angular.module("myapp",[]);
app.directive("header",function(){
	return{
		restrict:"E",
		templateUrl:"header.html",
		replace:true
	}
})