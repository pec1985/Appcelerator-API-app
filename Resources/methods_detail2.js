win = Ti.UI.currentWindow;
win.title = 'Method';
firstLevel = win.firstLevel;
secondLevel = win.secondLevel;
thirdLevel = win.thirdLevel;
number = win.number;
var jsonFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'api.json');

jsonText = jsonFile.read();
jsonParse = JSON.parse(jsonText);

var description = jsonParse[firstLevel][secondLevel][thirdLevel].parameters[number].description;
var name = jsonParse[firstLevel][secondLevel][thirdLevel].parameters[number].name;
var type = jsonParse[firstLevel][secondLevel][thirdLevel].parameters[number].type;

Ti.API.info(description);
Ti.API.info(name);
Ti.API.info(type);
var tableData = [];
var x = 0;
var row = Ti.UI.createTableViewRow({header:name});
var label1 = Ti.UI.createLabel({left:10,text:'Name: '});
var label2 = Ti.UI.createLabel({left:110,right:10,text:name});
row.add(label1);
row.add(label2);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
var label1 = Ti.UI.createLabel({left:10,text:'Type: '});
var label2 = Ti.UI.createLabel({left:110,right:10,text:type});
row.add(label1);
row.add(label2);
tableData[x] = row;
x++;

var row = Ti.UI.createTableViewRow({});
var label1 = Ti.UI.createLabel({left:10,text:'Description: '});
var label2 = Ti.UI.createLabel({left:110,right:10,top:10,bottom:10,height:'auto',text:description});
row.add(label1);
row.add(label2);
row.height = 'auto';
tableData[x] = row;
x++;
var table = Ti.UI.createTableView({data:tableData,style:Titanium.UI.iPhone.TableViewStyle.GROUPED});
win.add(table);
