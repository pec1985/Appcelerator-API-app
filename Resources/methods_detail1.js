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

var row = Ti.UI.createTableViewRow({header:'filename' });
var label = Ti.UI.createLabel({left:10,right:10,text:filename});
row.add(label);
tableData[x] = row;
x++;
var row = Ti.UI.createTableViewRow({header:'name' });
var label = Ti.UI.createLabel({left:10,right:10,text:name2});
row.add(label);
tableData[x] = row;
x++;
var y = 0;
while (parameters.length > y){
	if (y == 0){
		var row = Ti.UI.createTableViewRow({header:'parameters',hasChild:true,click:y });
	} else {
		var row = Ti.UI.createTableViewRow({hasChild:true,click:y});
	}
	var label = Ti.UI.createLabel({left:10,right:10,text:parameters[y].name});
	row.add(label);
	tableData[x] = row;
	x++;
	y++;
}
var row = Ti.UI.createTableViewRow({header:'return type' });
var label = Ti.UI.createLabel({left:10,right:10,text:returntype});
row.add(label);
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
table.addEventListener('click',function(e){
	if (e.rowData.hasChild){
		var win5 = Ti.UI.createWindow({url:'methods_detail2.js',thirdLevel:win.number,firstLevel:firstLevel,secondLevel:secondLevel,number:e.rowData.click});
		Ti.UI.currentTab.open(win5);
	}

});
Ti.API.info("methods_detail1.js");
