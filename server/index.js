import { Collection } from "../../../../../lib/collections/collection";

// FIND
Collection.before.find((userId, selector, options) => {
    console.log(`${userId} is trying to find ${selector} with ${JSON.stringify(options)}`);
});
Collection.after.find((userId, selector, options) => {
    console.log(`${userId} tried to find ${selector} with ${JSON.stringify(options)}`);
});

// FIND ONE
Collection.before.findOne((userId, selector, options, cursor) => {
    console.log(`${userId} is trying to find one of ${selector} with ${JSON.stringify(options)} at ${JSON.stringify(cursor)}`);
});
Collection.after.findOne((userId, selector, options, cursor) => {
    console.log(`${userId} tried to find one of ${selector} with ${JSON.stringify(options)} at ${JSON.stringify(cursor)}`);
});

// INSERT
Collection.before.insert((id, doc) => {
    console.log(`Trying to insert ${JSON.stringify(doc)}\n\nwith ID: ${id}`);
});
Collection.after.insert((id, doc) => {
    console.log(`Inserted ${JSON.stringify(doc)}\n\nwith ID: ${id}`);
});

// UPDATE
Collection.before.update((id, doc, fieldNames, modifier, options) => {
    console.log(`Trying to update ${id}...\n\nChanges: ${modifier}\n\nOriginal: ${doc}\n\nOptions: ${options}`);
});
Collection.after.update((id, doc, fieldNames, modifier, options) => {
    console.log(`Updated ${id}...\n\nChanges: ${modifier}\n\nOriginal: ${doc}\n\nOptions: ${options}`);
});

// UPSERT (note, there is no "after" yet)
Collection.before.upsert((userId, selector, modifier, options) => {
    console.log(`${userId} is trying to upsert ${id}...\n\nChanges: ${modifier}\n\nOriginal: ${doc}\n\nOptions: ${options}`);
});

// REMOVE
Collection.before.remove((userId, doc) => {
    console.log(`${userId} is trying to remove ${doc}`);
});
Collection.after.remove((userId, doc) => {
    console.log(`${userId} removed ${doc}`);
});