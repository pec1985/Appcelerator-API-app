win = Ti.UI.currentWindow;
var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'api.json');

jsonText = jsonFile.read();
jsonParse = JSON.parse(jsonText);



var ddd = win.title;
var depricated=jsonParse[ddd].depricated;
var description=jsonParse[ddd].description;
var events=jsonParse[ddd].events;
var examples=jsonParse[ddd].examples;
var methods=jsonParse[ddd].methods;
var objects=jsonParse[ddd].objects;
var parameters=jsonParse[ddd].parameters;
var platforms=jsonParse[ddd].platforms;
var properties=jsonParse[ddd].properties;
var returns=jsonParse[ddd].returns;
var since=jsonParse[ddd].since;
var subtype=jsonParse[ddd].subtype;
var type=jsonParse[ddd].type;
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

var row = Ti.UI.createTableViewRow({header:'objects/methods/events'});
if (objects.length == 0){text = 'no objects';} else { text = 'objects';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
if (methods.length == 0){text = 'no methods';} else { text = 'methods';}
var label = Ti.UI.createLabel({left:10,right:10,text:text});
row.add(label);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
if (events.length == 0){text = 'no events';}else { text = 'events';}
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