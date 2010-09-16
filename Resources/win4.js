win = Ti.UI.currentWindow;
firstLevel = win.firstLevel;
secondLevel = win.secondLevel;

var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'api.json');

jsonText = jsonFile.read();
jsonParse = JSON.parse(jsonText);

var filename = jsonParse[firstLevel][secondLevel][win.number].filename;
filename = filename.replace('-method','');
var name2 = jsonParse[firstLevel][secondLevel][win.number].name;

var parameters = jsonParse[firstLevel][secondLevel][win.number].parameters;

var returntype = jsonParse[firstLevel][secondLevel][win.number].returntype;

var value1 = 'value';
var value = jsonParse[firstLevel][secondLevel][win.number][value1];
value = value.replace(/(<br>)|(<\/p>)|(<\/h.?>)/,'\n').replace(/<[^>]+>/g, '');

var tableData = [];
var x = 0;

var row = Ti.UI.createTableViewRow({title:filename,header:'filename' });
tableData[x] = row;
x++;
var row = Ti.UI.createTableViewRow({title:name2,header:'name' });
tableData[x] = row;
x++;
var y = 0;
while (parameters.length > y){
	if (y == 0){
		var row = Ti.UI.createTableViewRow({title:parameters[y].name,header:'parameters' });
	} else {
		var row = Ti.UI.createTableViewRow({title:parameters[y].name });
	}
	tableData[x] = row;
	x++;
	y++;
}
Ti.API.info(parameters.length);
var row = Ti.UI.createTableViewRow({title:returntype,header:'return type' });
tableData[x] = row;
x++;
var row = Ti.UI.createTableViewRow({header:'value'});
var label = Ti.UI.createLabel({left:10,right:10,text:value,top:10,bottom:10,height:'auto'});
row.height = 'auto';
row.add(label);
tableData[x] = row;
x++;






var table = Ti.UI.createTableView({data:tableData,style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
win.add(table);
