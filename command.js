const req = require('./require.js');
const yargs=require('yargs');

var title={
  describe : 'Title of the note',
  demand: true,
  alias: 't'
};

var content={
  describe:'Content of the note',
  demand: false,
  alias:'c'
};

var args=yargs
          .command('add','Add a new note',{
            title,
            content
          })
          .command('remove','Remove a specific note',{
            title
          })
          .command('update','Update an existing note',{
            title,
            content
          })
          .command('read','Read a specific note',{
            title
          })
          .command('readAll','List all notes')
          .help()
          .argv;


var comm=req.lodash.camelCase(args._[0]);


if (args.content===undefined) {
  args.content='';
}

switch (comm) {
  case 'add':
    req.exec.addNote(args.title,args.content);
    break;
  case 'remove':
    req.exec.removeNote(args.title);
    break;
  case 'update':
    req.exec.updateNote(args.title,args.content);
    break;
  case 'read':
    req.exec.readNote(args.title);
    break;
  case 'readAll':
    req.exec.allNotes();
    break;
  default :
    console.log("Wrong argument(s) entered\n '--help' for more info");
    break;
}
