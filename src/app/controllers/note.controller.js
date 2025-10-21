var noteList = []

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const note = {
        id: noteList.length+1,
        title: req.body.title || "Untitled Note", 
        content: req.body.content
    };
    // Save Note in the database
    noteList.push(note);
    res.status(201).send({
        message: "Note created."
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    res.send(noteList);
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    note = noteList.find(elem => {
        return elem.id == req.params.noteId
    });

    if(!note) {
        return res.status(404).send({
            message: "Note not found with id " + req.params.noteId
        });            
    }
    res.send(note);
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    if(!noteList[req.params.noteId]) {
        return res.status(404).send({
            message: "Note not found with id " + req.params.noteId
        });
    }
    
    // Find note and update it with the request body
    const updateNote = {
        id: req.params.noteId, 
        title: req.body.title || "Untitled Note",
        content: req.body.content
    };
    noteList[req.params.noteId] = updateNote;
    res.send(note);
    
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    note = noteList.find(elem => {
        return elem.id == req.params.noteId
    });
    if(!note) {
        return res.status(404).send({
            message: "Note not found with id " + req.params.noteId
        });
    }
    
    noteList = noteList.filter(elem => {
        return elem.id != req.params.noteId
    });

    res.send({message: "Note deleted successfully!"});
};
