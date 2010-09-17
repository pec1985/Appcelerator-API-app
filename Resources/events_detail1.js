win = Ti.UI.currentWindow;
firstLevel = win.firstLevel;
secondLevel = win.secondLevel;
win.title = "Events";
var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'api.json');

jsonText = jsonFile.read();
jsonParse = JSON.parse(jsonText);

var filename = jsonParse[firstLevel][secondLevel][win.number].filename;
filename = filename.replace('-event','');
var name = jsonParse[firstLevel][secondLevel][win.number].name;
var properties = jsonParse[firstLevel][secondLevel][win.number].properties;
var value = jsonParse[firstLevel][secondLevel][win.number].value;
value = value.replace(/(<br>)|(<\/p>)|(<\/h.?>)/,'\n').replace(/<[^>]+>/g, '');

var tableData = [];
var x = 0;

var row = Ti.UI.createTableViewRow({header:'filename' });
var label = Ti.UI.createLabel({left:10,right:10,text:filename});
row.add(label);
tableData[x] = row;
x++;
var row = Ti.UI.createTableViewRow({header:'name' });
var label = Ti.UI.createLabel({left:10,right:10,text:name});
row.add(label);
tableData[x] = row;
x++;

var y = 0;
var detailsFunction = function(parseDetail){
	if (y == 0){ var row = Ti.UI.createTableViewRow({header:'properties',click:y});}
	else {var row = Ti.UI.createTableViewRow({click:y});}
	var text = properties[parseDetail].replace(/(<br>)|(<\/p>)|(<\/h.?>)/,'\n').replace(/<[^>]+>/g, '');

	var label1 = Ti.UI.createLabel({left:5,text:parseDetail+":"});
	var label2 = Ti.UI.createLabel({left:100,top:10, bottom:10,right:5,text:text,height:'auto'});
	row.height='auto';
	row.add(label1);
	row.add(label2);
	tableData[x] = row;
	x++;
	y++;	
}
if (properties.source){ detailsFunction('source'); }
if (properties.state){ detailsFunction('state');}
if (properties.type){ detailsFunction('type');}
if (properties.cancel){ detailsFunction('cancel');}
if (properties.error){ detailsFunction('error');}
if (properties.result){ detailsFunction('result');}
if (properties.success){ detailsFunction('success');}
if (properties.globalPoint){ detailsFunction('globalPoint');}
if (properties.x){ detailsFunction('x');}
if (properties.y){ detailsFunction('y');}
if (properties.z){ detailsFunction('z');}
if (properties.timestamp){ detailsFunction('timestamp');}
if (properties.orientation){ detailsFunction('orientation');}
if (properties.annotation){ detailsFunction('annotation');}
if (properties.clicksource){ detailsFunction('clicksource');}
if (properties.map){ detailsFunction('map');}
if (properties.title){ detailsFunction('title');}
if (properties.networkType){ detailsFunction('networkType');}
if (properties.networkTypeName){ detailsFunction('networkTypeName');}
if (properties.online){ detailsFunction('online');}
var dataObject = 'data[object]'
if (properties[dataObject]){ detailsFunction('data[object]');}
var fromInt = 'from[int]'
if (properties[fromInt]){ detailsFunction('from[int]');}
var indexInt = 'index[int]'
if (properties[indexInt]){ detailsFunction('index[int]');}
var valueString = 'value[string]'
if (properties[valueString]){ detailsFunction('value[string]');}
var valueBoolean = 'value[boolean]'
if (properties[valueBoolean]){ detailsFunction('value[boolean]');}
if (properties.level){ detailsFunction('level');}
if (properties.previous){ detailsFunction('previous');}
if (properties.item){ detailsFunction('item');}
if (properties.location){ detailsFunction('location');}
if (properties.destructive){ detailsFunction('destructive');}
if (properties.column){ detailsFunction('column');}
if (properties.columnIndex){ detailsFunction('columnIndex');}
if (properties.row){ detailsFunction('row');}
if (properties.rowIndex){ detailsFunction('rowIndex');}
if (properties.rowData){ detailsFunction('rowData');}
if (properties.selectedValue){ detailsFunction('selectedValue');}
if (properties.currentPage){ detailsFunction('currentPage');}
if (properties.view){ detailsFunction('view');}
if (properties.previousIndex){ detailsFunction('previousIndex');}
if (properties.previousTab){ detailsFunction('previousTab');}
if (properties.tab){ detailsFunction('tab');}
if (properties.searchMode){ detailsFunction('searchMode');}
if (properties.section){ detailsFunction('section');}
if (properties.tab){ detailsFunction('tab');}
if (properties.detail){ detailsFunction('detail');}
if (properties.url){ detailsFunction('url');}
// I think I have them all :)




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
