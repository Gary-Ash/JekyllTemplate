var newHeight;
var browserWindowHeight = window.innerHeight;
var footerHeight = document.getElementById('theFooter').getBoundingClientRect().height;

var postContent = document.getElementById('post-content');
if (postContent != null) {
	var postContentTop = postContent.getBoundingClientRect().top;

	newHeight =  browserWindowHeight - postContentTop - footerHeight - 50;
	postContent.style.height = newHeight + "px";
}

var article = document.getElementById('theArticle');
if (article != null) {
	var articleTop = article.getBoundingClientRect().top;
	newHeight =  browserWindowHeight - articleTop - footerHeight - 40;
	article.style.height = newHeight + "px";
}