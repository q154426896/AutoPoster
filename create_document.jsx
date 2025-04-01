#target photoshop

// 创建新文档
var doc = app.documents.add(720, 960, 72, "New Document", NewDocumentMode.RGB);

// 打开背景图片
var bgFile = new File("C:\\Users\\Admin\\Desktop\\barkground.jpg");
app.open(bgFile);
var bgDoc = app.activeDocument;

// 复制背景图层到新文档
bgDoc.activeLayer.duplicate(doc);
bgDoc.close(SaveOptions.DONOTSAVECHANGES);

// 设置当前文档为之前创建的新文档
app.activeDocument = doc;

// 获取背景图层并调整位置
var bgLayer = doc.layers[0];
bgLayer.name = "Background";

// 将背景图层垂直居中
var bounds = bgLayer.bounds;
var height = bounds[3].value - bounds[1].value;
var docHeight = doc.height.value;
var yOffset = (docHeight - height) / 2;
bgLayer.translate(0, yOffset);

// 创建第一个文本图层
var textLayer1 = doc.artLayers.add();
textLayer1.kind = LayerKind.TEXT;

// 设置文本内容
textLayer1.textItem.contents = "你真的会";

// 设置字体为微软雅黑
textLayer1.textItem.font = "MicrosoftYaHei-Bold";  // 使用PostScript名称

// 设置字体大小为90
textLayer1.textItem.size = 90;

// 设置文本颜色为#3e4eb4
var color = new SolidColor();
color.rgb.red = 62;    // 3e in hex = 62 in decimal
color.rgb.green = 78;  // 4e in hex = 78 in decimal
color.rgb.blue = 180;  // b4 in hex = 180 in decimal
textLayer1.textItem.color = color;

// 创建文本框并设置位置和尺寸
textLayer1.textItem.kind = TextType.PARAGRAPHTEXT;
textLayer1.textItem.width = new UnitValue(360, "px");  // W: 360像素
textLayer1.textItem.height = new UnitValue(106.48, "px");  // H: 106.48像素
textLayer1.textItem.position = [69, 121.37];  // X: 69像素, Y: 121.37像素

// 创建第二个文本图层
var textLayer2 = doc.artLayers.add();
textLayer2.kind = LayerKind.TEXT;

// 设置第二个文本的内容和属性
textLayer2.textItem.contents = "给狗狗洗澡吗？";
textLayer2.textItem.font = "MicrosoftYaHei-Bold";  // 使用PostScript名称
textLayer2.textItem.size = 90;
textLayer2.textItem.color = color;  // 使用相同的颜色

// 创建第二个文本框并设置位置和尺寸
textLayer2.textItem.kind = TextType.PARAGRAPHTEXT;
textLayer2.textItem.width = new UnitValue(630, "px");  // W: 630像素
textLayer2.textItem.height = new UnitValue(106.48, "px");  // H: 106.48像素
textLayer2.textItem.position = [73, 224.37];  // X: 73像素, Y: 224.37像素 