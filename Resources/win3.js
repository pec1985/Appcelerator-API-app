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
	if (secondLevel == 'objects'){
		var toParse = jsonParse[firstLevel][secondLevel][x];
	} else {
		var toParse = jsonParse[firstLevel][secondLevel][x].name;		
	}
	var row = Ti.UI.createTableViewRow({title:toParse,number:x });
	tableData[x] = row;
	x++;
}

var table = Ti.UI.createTableView({data:tableData});
win.add(table);

table.addEventListener('click',function(e){
	if (secondLevel != 'objects'){
		var win4 = Ti.UI.createWindow({url:'win4.js',firstLevel:firstLevel,secondLevel:secondLevel,number:e.rowData.number});
		Ti.UI.currentTab.open(win4);
	}
	if (secondLevel == 'objects'){
		win2 = Ti.UI.createWindow({url:'win2.js',title:e.rowData.title});
		Ti.UI.currentTab.open(win2);
	}
	
});
Ti.API.info(parseTimes);
Ti.API.info(firstLevel);
Ti.API.info(secondLevel);
