var channelName='VideoOXStudio';

$(document).ready(function(){
	$.get(
		"https://www.googleapis.com/youtube/v3/channels",{
			part: 'contentDetails',
			forUsername: channelName,
			key:'AIzaSyCub3yUEFAXJ2oopi3_DhEC1Uuhb8USJPw'},
			function(data){
				$.each(data.items, function(i,item){
					console.log(item);
					pid = item.contentDetails.relatedPlaylists.uploads;
					getVids(pid);
				})
			}
	);
	
	function getVids(pid){
		$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems",{
				part: 'snippet',
				maxResults :6,
				playlistId: pid,
				key :'AIzaSyCub3yUEFAXJ2oopi3_DhEC1Uuhb8USJPw'},
				function(data){
					var titleOutput;
					var videoOutput;
					
					var output;
					var finalOutput;
					var firstOutput;
					
					console.log(data.items[0]);
					titleOutput = data.items[0].snippet.title;
					videoOutput = data.items[0].snippet.resourceId.videoId;
					
					firstOutput = "<div class='embed-responsive embed-responsive-16by9'><iframe src=\'//www.youtube.com/embed/"+videoOutput+"\?rel=0'frameborder='0' allowfullscreen></iframe></div>";
					$('.container.firstVideo hr').after(firstOutput);
					
					$.each(data.items, function(i, item){
						console.log(item);
						videTitle = item.snippet.title;
						videoId = item.snippet.resourceId.videoId;
						
						finalOutput = "<div class='col-sm-4 portfolio-item'><div class='titleContainer'>"+videTitle+"</div><div class='embed-responsive embed-responsive-16by9'><iframe src=\'//www.youtube.com/embed/"+videoId+"\?rel=0'frameborder='0' allowfullscreen></iframe></div><div class='videoBlock'></div></div>";
						
						//Apend
						$('#results').append(finalOutput);
					})
				}
		);
	}
});