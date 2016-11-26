var gDebugTagsFlag = 0;

$(document).ready(function(){
	// this will be the tags user has chosen
	var selectedTagArray = new Array();
	var projectsToShow = new Array();
	
	//------------------------------------------------------
	// create the tag buttons here
	//------------------------------------------------------
	var tagsCount = Object.keys(jsonTags.tags).length;
	var tagsDiv = document.getElementById('tagsDiv');
	var tagList = "<span style='margin-right:40px;'>Select Tags:</span><br>";
	
	//console.log("document ready");

	for(var i1=0; i1<tagsCount; i1++){
		var obj= jsonTags.tags[i1];
		var tempTagId = "";
		if(gDebugTagsFlag > 0) {
			tempTagId = "[" + obj.tagId + "]";
		}
		
		// create the button here, and include custom data-* attributes to retrieve in js onclick later
		// NOTE: "The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"  "
		// the 'tag' glyphicon is written inside the <span> in the click function for tagsClass
		/*
		tagList += "<button id='btn1' data-did='" + obj.tagId + 
					"' data-tagname='" + obj.tagName + 
					"' class='tagsClass btn btn-default btn-xs'><span class='glyphicon glyphicon-tag' style='padding-right:5px;'></span>" + obj.tagText + "" + tempTagId + "" + 
					"</button>";
		*/
		tagList += "<button id='btn1' data-did='" + obj.tagId + 
					"' data-tagname='" + obj.tagName + 
					"' class='tagsClass btn btn-default btn-xs'><span class='glyphicon' style='padding-right:5px;'></span>" + obj.tagText + "" + tempTagId + "" + 
					"</button>";

	}
	tagsDiv.innerHTML += tagList;

	// --------------------------------------------
	// top right navigation buttons
	// --------------------------------------------	
	$('.nav li a').on('click', function() {
	  //alert('clicked');
	  $(this).parent().parent().find('.active').removeClass('active');
	  $(this).parent().addClass('active'); 
	});

	// --------------------------------------------	
	// Add smooth scrolling to all links 
	// --------------------------------------------	
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		  event.preventDefault();
		  var hash = this.hash;

		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
			window.location.hash = hash;
		  });
		} // End if
	});

	// --------------------------------------------	
	// tag buttons @@@ dwa
	// --------------------------------------------	
	$('.tagsClass').bind("click", function(event) {
		event.preventDefault();

		// find the <span> in this button and toggle glyphicon
		var isel = $(this).find("span");				
		if(isel.hasClass('glyphicon-tag')) {
			isel.removeClass('glyphicon-tag');
		}
		else {
			isel.addClass('glyphicon-tag');
		}
		
		var projectListStr = "";
		
		// button has custom data-* attributes when it is dynamically created in js below
		// retrieve that data attribute here
		var tagId = $(this).data('did');
		
		// we have clicked a tag, does that tag already exist in our array of tags?
		var index = selectedTagArray.indexOf(tagId);
		if(index == -1) {
			selectedTagArray.push(tagId);
		}
		else {  // tag already exists, want to remove it
			selectedTagArray.splice(index, 1);
		}
				
		// now loop through projects and loop through project tags
		// find intersection of selectedTagArray and the array of tags in each project
		// if intersection is not empty, then the project has tags that are also in selectedTagArray (clicked tags)
		//console.log("=================================");		
		var numProjPerRow = 3;	
		var projRowCount = 0;
		
		projectListStr = "<br><div class=\"row\">";
		
		for (var i1=0; i1<jsonProjects.projects.length; i1++) {
			var intersection = [];
			var obj = jsonProjects.projects[i1];
			var retrievedProj;
			for( var j1=0; j1<obj.projectTags.length; j1++) {
				if(selectedTagArray.indexOf(obj.projectTags[j1]) !== -1) {
					intersection.push(obj.projectTags[j1]);
				}
			}

			if(intersection.length > 0) {
				retrievedProj = returnProjectAsHTML(obj);
				projRowCount++;
					
				//console.log(obj.projectName + " rowcount:" + projRowCount);
				projectListStr += retrievedProj;
				
				if(projRowCount < numProjPerRow) {
					//projRowCount++;
				}
				else {
					projRowCount = 0;
					//console.log("ROW HERE");					
					projectListStr += "</div> <div class=\"row\"> ";					
					//projectListStr = "<hr>fffffff" + projectListStr + "<hr>";
				}														
			}
		}			
		projectListStr += "</div> ";
		$('#projectList').hide().html(projectListStr).fadeIn('slow');
		//$('#projectList').empty();
		//$('#projectList').hide();
		//$(projectListStr).insertAfter("#projectList");
		//$('#projectList').fadeIn('slow');			
	});	// tag buttons
}); // document).ready(function()

//------------------------------------------------------
// return a formatted html panel for a project (projects are json objects)
//------------------------------------------------------
function returnProjectAsHTML(pObj) {
	var tagValues = "";
	
	// for debugging tags
	if(gDebugTagsFlag > 0) {
		tagValues = " [" + pObj.projectTags.join(";") + "]";
	}
	
	// get list of tags to show
	var tagsObj = jsonTags.tags;	
	var tagStr = "";
	// for each tag in the project, convert it to text value
	for (var i1=0; i1<pObj.projectTags.length; i1++) {
		tagStr += "<span style='font-size:x-small;border-radius: 25px;background-color:#d0d0d0;padding:5px;margin:5px;'>" + tagsObj[i1].tagText + "</span>";
	}
	
	// make the panel for the project
	var pStr = "" +
		"<div class=\"col-sm-4\" style=\"padding-left:15px;\">" + "\n" +
			"<div class=\"panel panel-default\"> \n" +
			  "<div class=\"panel-heading\"> \n" +
				pObj.projectName + tagValues + " &nbsp; &nbsp;" + tagStr + " \n" +
			  "</div> \n" +
			  "<div class=\"panel-body\"> \n" +
				"<img src='" + pObj.projectThumbnail + "' class=\"thumbnail img-responsive center-block\"> \n" +
			  "</div> \n" +
			  "<div class=\"panel-footer\"> \n" +
				"<a href='#' data-toggle='tooltip' title='" + pObj.projectDescription + "'> About </a> &bull;" +
				"<a href='" + pObj.projectLinks[linksIndex.github] + "'> Live </a> &bull;" +
				"<a href='" + pObj.projectLinks[linksIndex.live] + "'> Github </a> &bull;" +
			  "</div> \n" +
			" </div> \n" +
		"</div> \n";				
	return pStr;
}	







