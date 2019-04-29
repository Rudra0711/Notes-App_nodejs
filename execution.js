const req = require('./require.js');
const fs=require('fs');

  var notes=[];
  var data=fs.readFileSync('Notes.json');
  if(data!==[]){
  notes=JSON.parse(data);
}
var addNote=(title,content) => {
  console.log("Note created");

  var note={
    Title : title,
    Content : content
  };

 notes.push(note);

 fs.writeFileSync('Notes.json',JSON.stringify(notes));

}

var removeNote=(title) => {

  var new_notes=notes.filter((item) => item.Title!==title );
  if(JSON.stringify(new_notes)===JSON.stringify(notes)){
      console.log("No note found");
  } else {
  fs.writeFileSync('Notes.json',JSON.stringify(new_notes));
  console.log("Note removed");
}
}

var updateNote=(title,content) => {
 console.log("Note updated");

  for (var x in notes) {
      if (notes[x].Title===title) {
        notes[x].Content=content;
        fs.writeFileSync('Notes.json',JSON.stringify(notes));
      }
  }
}

var readNote=(title) => {

  var found=false;
  for (var x in notes) {
      if (notes[x].Title===title) {
        console.log(notes[x]);
        found=true;
      }
  }
  if (!found) {
    console.log(`No note found with title '${title}'`);
  }
}

var allNotes=() => {
  if (notes) {
      console.log(notes);
  }else{
    console.log("No notes found");
  }

}


module.exports = {
  addNote,
  removeNote,
  updateNote,
  readNote,
  allNotes
};
