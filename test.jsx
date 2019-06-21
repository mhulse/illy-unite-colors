#target illustrator

function contains(a, obj) {
  var i = a.length;
  while (i--) {
     if (a[i] === obj) {
         return true;
     }
  }
  return false;
}
//
//
//
// Pseudo-code right now; this is a work in progress.
//
//
//

function start() {

  var found = [];

  var doc = app.activeDocument;

  // Get selection info:
  // app.activeDocument.selection
  // app.activeDocument.selection.length
  // app.activeDocument.selection[0].typename == 'PathItem'

  // Get items on page:
  // app.activeDocument.pageItems
  // app.activeDocument.pageItems.length
  // app.activeDocument.pageItems[1].typename == 'PathItem'

  // $.writeln(object.toSource());
  // $.writeln(object.toString());

  var items = app.activeDocument.pageItems;

  // Collect colors:
  for (var i = 0; i < items.length; i++) {

    if (items[i].typename === 'PathItem') {

      // $.writeln(items[i].fillColor.spot);

      var color = items[i].fillColor.spot;

      if (contains(found, color)) {

        $.writeln('yes')

        found.push(color);

      }

    }

  }

  $.writeln(found.toString());


  for (var foundColor in found) {

    // clear selection
    // doc.selection = null;

    for (var i = 0; i < items.length; i++) {

      if (items[i].typename === 'PathItem') {

        var color = items[i].fillColor.spot;

        $.writeln(color.toString());
        $.writeln(foundColor.toString());

        if (color.toString() == foundColor.toString()) {

          items[i].selected = true;

        }

      }

    }

    // app.executeMenuCommand("group");
    // app.executeMenuCommand("Live Pathfinder Add");
    // app.executeMenuCommand("expandStyle");

    // // Deselect:
    // doc.selection = null;

  }

  // var selFillColor = function() {

  //   var groupColor = app.activeDocument.groupItems.add();

  //   if (app.activeDocument.selection[0].typename == 'PathItem') {
  //   var colorSel = new CMYKColor;
  //   colorSel.cyan = app.activeDocument.selection[0].fillColor.cyan;
  //   colorSel.magenta = app.activeDocument.selection[0].fillColor.magenta;
  //   colorSel.yellow = app.activeDocument.selection[0].fillColor.yellow;
  //   colorSel.black = app.activeDocument.selection[0].fillColor.black;
  //   }else{alert('This is not a pathitem.'); return};

  //   var itemsLength = app.activeDocument.pageItems.length;
  //   var items = app.activeDocument.pageItems;


  //   for (i = 0; i < itemsLength; i++){

  //     if(items[i].typename == 'PathItem'){

  //       if(items[i].fillColor.cyan == colorSel.cyan && items[i].fillColor.magenta == colorSel.magenta && items[i].fillColor.yellow == colorSel.yellow && items[i].fillColor.black == colorSel.black){
  //         items[i].moveToBeginning(groupColor);
  //       }else if(items[i].strokeColor.cyan == colorSel.cyan && items[i].strokeColor.magenta == colorSel.magenta && items[i].strokeColor.yellow == colorSel.yellow && items[i].strokeColor.black == colorSel.black){
  //         items[i].moveToBeginning(groupColor);
  //       };
  //     };

  //   };
  // if(groupColor.pageItems.length > 0){groupColor.selected = true};
  // };


  // selFillColor();

};


start();
