win = Ti.UI.currentWindow;
var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'title.json');
jsonText = jsonFile.read();

jsonParse = JSON.parse(jsonText);

var view = Ti.UI.createView();
var tableView = Ti.UI.createTableView({});
var data = [];
var x = 0;
while (jsonParse.all.length > x){
	var label = Ti.UI.createLabel({text:jsonParse.all[x].title});
	var row = Ti.UI.createTableViewRow({rowTitle:jsonParse.all[x].title});
	row.add(label);
	data[x++]=row;
}
tableView.data = data;
view.add(tableView);
win.add(view);

tableView.addEventListener('click',function(e){
	win2 = Ti.UI.createWindow({url:'win2.js',title:e.rowData.rowTitle});
	Ti.UI.currentTab.open(win2);
});
Ti.API.info("api.js");
