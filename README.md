# meteor-collection-hook
Illustrates how to use a [Meteor](https://www.meteor.com/developers) Collection Hook ([more info](https://github.com/matb33/meteor-collection-hooks)).  To test this out, you will need to do two simple things: 

1) You will need to either place (or symlink) these files into the plugins directory, which lives here relative to your project root: ```imports/plugins/custom/```

2) You'll also need to modify ```server/index.js``` to import an existing Mongo collection from your parent Meteor project.  Then you can modify to your heart's delight!