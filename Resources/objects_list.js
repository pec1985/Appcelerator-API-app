win = Ti.UI.currentWindow;
firstLevel = win.firstLevel;
secondLevel = win.secondLevel;

var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'api.json');

jsonText = jsonFile.read();
jsonParse = JSON.parse(jsonText);


var parseTimes=jsonParse[firstLevel][secondLevel].length;
var tableData = [];
var x = 0;

while (parseTimes>x){
	
	var toParse = jsonParse[firstLevel][secondLevel][x];
	var row = Ti.UI.createTableViewRow({rowTitle:toParse,number:x });
	var label = Ti.UI.createLabel({left:10,right:10,text:toParse});
	row.add(label);
	tableData[x] = row;
	x++;
}

var table = Ti.UI.createTableView({data:tableData});
win.add(table);

table.addEventListener('click',function(e){
	
		win2 = Ti.UI.createWindow({url:'win2.js',title:e.rowData.rowTitle});
		Ti.UI.currentTab.open(win2);
});
Ti.API.info("methods_list.js");
