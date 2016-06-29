$(document).ready(function(){
	$(function(){
		$("form").on("submit",function(e){
			e.preventDefault();
			//prepare the request
			var request = gapi.client.youtube.search.list({
				part: "snippet";
				type: "video";
				q: encodeURIComponent($("#search").Val()).replace(/%20/g,"+");
				maxResults: 3;
				order:"viewCount",
				publishedAfter:"2016-01-01T00:00:00Z"
				
			});
			//execute the request
			request.execute(function(response)){
				var results = response.result;
				$.each(results.items, function(index, item){
					console.log(results);
				})
			})
	});
});

function init(){
	gapi.client.setApiKey("AIzaSyCub3yUEFAXJ2oopi3_DhEC1Uuhb8USJPw");
	gapi.client.load("youtube","v3",function(){
		
	})
}
