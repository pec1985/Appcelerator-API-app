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

	var toParse = jsonParse[firstLevel][secondLevel][x].name;		
	var row = Ti.UI.createTableViewRow({rowTitle:toParse,number:x });
	var label = Ti.UI.createLabel({left:10,right:10,text:toParse});
	row.add(label);
	tableData[x] = row;
	x++;
}

var table = Ti.UI.createTableView({data:tableData});
win.add(table);

table.addEventListener('click',function(e){
	
		var win4 = Ti.UI.createWindow({url:'events_detail1.js',firstLevel:firstLevel,secondLevel:secondLevel,number:e.rowData.number});
		Ti.UI.currentTab.open(win4);
});
Ti.API.info("events_list.js");
