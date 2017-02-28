(function () {


var blogPost = $.ajax("/data/blog.json");
var post = $("#posts");
var title = $("#title");
var content = $("#content");
var titleString = "";
var contentString = "";
var catString = "";
var dateString = "";



blogPost.done(function(data) {
	data.forEach(function (data, index ,array) {
		titleString += data.title;
		contentString += data.content;
		catString += ("Catagory Tags: " + data.categories);
		dateString += data.date;
		post.append("<div class='blogPost'> <h1>" + titleString + "</h1>" + "<div class='content'>" + contentString + "</div> <div class='cat'>" + catString + "</div> <div class='date'>" + dateString + "</div> </div>");
		titleString = "";
		contentString = "";
		catString = "";
		dateString = "";
		console.log(post);

	});
});
})();



