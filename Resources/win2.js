win = Ti.UI.currentWindow;
var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'api.json');

jsonText = jsonFile.read();
jsonParse = JSON.parse(jsonText);


Ti.API.info(win.title);
var firstLevel = win.title;
var depricated=jsonParse[firstLevel].depricated;
var description=jsonParse[firstLevel].description;
var events=jsonParse[firstLevel].events;
var examples=jsonParse[firstLevel].examples;
var methods=jsonParse[firstLevel].methods;
var objects=jsonParse[firstLevel].objects;
var parameters=jsonParse[firstLevel].parameters;
var platforms=jsonParse[firstLevel].platforms;
var properties=jsonParse[firstLevel].properties;
var returns=jsonParse[firstLevel].returns;
var since=jsonParse[firstLevel].since;
var subtype=jsonParse[firstLevel].subtype;
var type=jsonParse[firstLevel].type;
description = description.replace(/(<br>)|(<\/p>)|(<\/h.?>)/,'\n').replace(/<[^>]+>/g, '');
/*
Ti.API.info("depricated: "+depricated);
Ti.API.info("description: "+description);
Ti.API.info("events: "+events);
Ti.API.info("examples: "+examples);
Ti.API.info("methods: "+methods);
Ti.API.info("objects: "+objects);
Ti.API.info("parameters: "+parameters);
Ti.API.info("platforms: "+platforms);
Ti.API.info("properties: "+properties);
Ti.API.info("returns: "+returns);
Ti.API.info("since: "+since);
Ti.API.info("subtype: "+subtype);
Ti.API.info("type: "+type);
*/
var text;
var tableData = [];
var x = 0;

if (depricated == null){} else {
	var row = Ti.UI.createTableViewRow({header:'depricated'});
	var label = Ti.UI.createLabel({left:10,right:10,text:depricated});
	row.add(label);
	tableData[x] = row;
	x++;
}

if (description == null){} else {
	var row = Ti.UI.createTableViewRow({header:'description'});
	var label = Ti.UI.createLabel({left:10,right:10,text:description,top:10,bottom:10,height:'auto'});
	row.height = 'auto';
	row.add(label);
	tableData[x] = row;
	x++;
}

var row = Ti.UI.createTableViewRow({goTo:'objects',header:'objects/methods/events'});
if (objects.length == 0){text = 'no objects';row.goTo=null;} else { text = 'objects';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({goTo:'methods'});
if (methods.length == 0){text = 'no methods';row.goTo=null;} else { text = 'methods';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({goTo:'events'});
if (events.length == 0){text = 'no events';row.goTo=null;}else { text = 'events';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({header:'parameters/properties'});
if (parameters.length == 0){text = 'no parameters';}else { text = 'parameters';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
if (properties.length == 0){text = 'no properties';}else { text = 'properties';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;


var row = Ti.UI.createTableViewRow({header:'examples'});
if (examples.length == 0){text = 'no examples';}else { text = examples[0].description;}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

if (examples.length != 0){
	var y = 1;
	while (examples.length > y){
		var row = Ti.UI.createTableViewRow({});
		var label = Ti.UI.createLabel({left:10,right:10,text:examples[y].description});
		row.add(label);
		tableData[x] = row;
		x++;
		y++;
	}
}
y = 1;
var row = Ti.UI.createTableViewRow({header:'platforms'});
var label = Ti.UI.createLabel({left:10,right:10,text:platforms[0]});
row.add(label);
tableData[x] = row;
x++;
	while (platforms.length > y){
		var row = Ti.UI.createTableViewRow({});
		var label = Ti.UI.createLabel({left:10,right:10,text:platforms[y]});
		row.add(label);
		tableData[x] = row;
		x++;
		y++;
	}


var row = Ti.UI.createTableViewRow({header: 'details'});
var label = Ti.UI.createLabel({left:10,right:10,text:'type: '+type});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
var label = Ti.UI.createLabel({left:10,right:10,text:'subtype: '+subtype});
row.add(label);
tableData[x] = row;
x++;


var row = Ti.UI.createTableViewRow({});
var label = Ti.UI.createLabel({left:10,right:10,text:'returns: '+returns});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
var label = Ti.UI.createLabel({left:10,right:10,text:'since: '+since});
row.add(label);
tableData[x] = row;
x++;

var table = Ti.UI.createTableView({data : tableData,style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
win.add(table);

table.addEventListener('click', function(e){
	var secondLevel = e.rowData.goTo;
	if (secondLevel == 'methods'){
		var win3 = Ti.UI.createWindow({url:'methods_list.js',firstLevel:firstLevel,secondLevel:secondLevel});
		Ti.UI.currentTab.open(win3);
	}
	if (secondLevel == 'objects'){
		var win3 = Ti.UI.createWindow({url:'objects_list.js',firstLevel:firstLevel,secondLevel:secondLevel});
		Ti.UI.currentTab.open(win3);
	}
	if (secondLevel == 'events'){
		var win3 = Ti.UI.createWindow({url:'events_list.js',firstLevel:firstLevel,secondLevel:secondLevel});
		Ti.UI.currentTab.open(win3);
	}
});

Ti.API.info("win2.js");
