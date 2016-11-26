
var jsonTags = 
{ "tags" : 
	[
		{
			tagText: 'ACC',
			tagName: 'tag0',
			tagId: 0
		},
		{
			tagText: 'FCC',		
			tagName: 'tag1',
			tagId: 1	
		},
		{
			tagText: 'Udacity',		
			tagName: 'tag2',
			tagId: 2	
		},
		{
			tagText: 'Free Code Camp TEST',		
			tagName: 'tag3',
			tagId: 3	
		},
		{
			tagText: 'Udacity TEST',		
			tagName: 'tag4',
			tagId: 4	
		}		
	]
}

var linksIndex = {
	github : 0,
	live: 1
};

// jsonProjects.projectTags = list of project jsonTags.tagIds
var jsonProjects = 
{ "projects" : 
	[
		{
			projectName: 'Frogger game',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "http://github.com", "http://www.yahoo.com", "l2" ],
			projectDescription: " blah blah blah", 
			projectTags: [ 0, 1 ],
			pid: 0
		},
		{
			projectName: 'project 1',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l22", "l33" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 0 ],
			pid: 1	
		},
		{
			projectName: 'project 2',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 0, 3 ],
			pid: 2	
		},
		{
			projectName: 'project 3 FK',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 3, 4 ],
			pid: 3	
		},
		{
			projectName: 'project 4',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 1, 3, 4 ],
			pid: 4	
		},
		{
			projectName: 'project 5',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 4 ],
			pid: 5	
		},
		{
			projectName: 'project 6',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 2, 3, 4 ],
			pid: 6	
		},
		{
			projectName: 'project 7',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 4 ],
			pid: 7	
		},
		{
			projectName: 'project 8',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 0 ],
			pid: 8	
		},
		{
			projectName: 'project 9',
			projectThumbnail: 'http://placehold.it/140x100',
			projectLinks: [ "l11", "l222", "l333" ],
			projectDescription: " blah blah blah", 			
			projectTags: [ 4 ],
			pid: 9	
		}		
	]
}