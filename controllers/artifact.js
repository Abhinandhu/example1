// var Artifact = require('../models/artifact');
// // List of all artifacts
// exports.artifact_list =  async function(req, res) {
//     try {
//         // Fetch all artifacts from the database
//         const allArtifacts = await Artifact.find();  
 
//         res.render('artifacts', { title: 'Artifact Search Results', results: allArtifacts });
//     } catch (err) {
//         // If an error occurs, return status 500 with the error message
//         res.status(500).send(`{"error": ${err}}`);  
//     }
// };
// // for a specific artifacts.
// exports.artifact_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: Artifact detail: ' + req.params.id);
// };
// // Handle artifacts create on POST.
// exports.artifact_create_post = async function(req, res) {
//     console.log(req.body); 

//     let newArtifact = new Artifact({
//         artifactName: req.body.artifactName,  
//         originYear: req.body.originYear,          
//         culture: req.body.culture
//     });

//     try {
//         const result = await newArtifact.save();
//         res.status(201).json(result); 
//     } catch (err) {
//         res.status(500).send({ error: err.message });
//     }
// };
// // Handle artifacts delete from on DELETE.
// exports.artifact_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: Artifact delete DELETE ' + req.params.id);
// };
// // Handle artifacts update form on PUT.
// exports.artifact_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: Artifact update PUT' + req.params.id);
// };










var Artifact = require('../models/artifact');



// List all artifacts
exports.artifact_list = async function(req, res) {
    try {
        const allArtifacts = await Artifact.find();
        res.json(allArtifacts);  // Send the documents as JSON
    } catch (err) {
        res.status(500);  // Internal server error status code
        res.send(`{"error": ${err}}`);  // Send error message if failed
    }
};

// Render page to view all artifacts
exports.artifact_view_all_Page = async function(req, res) {
    try {
        const allArtifacts = await Artifact.find();
        res.render('artifacts', { title: 'Artifact Search Results', results: allArtifacts });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle creating a new artifact on POST
exports.artifact_create_post = async function(req, res) {
    console.log(req.body);
    let newArtifact = new Artifact({
        artifactName: req.body.artifactName,
        originYear: req.body.originYear,
        culture: req.body.culture
    });

    try {
        let result = await newArtifact.save();
        res.send(result);  // Send the created artifact as the response
    } catch (err) {
        res.status(500);  // Internal server error status code
        res.send(`{"error": ${err}}`);
    }
};

// Handle deleting an artifact (not implemented yet)
exports.artifact_delete = async function(req, res) {
    try {
        const result = await Artifact.deleteOne({ _id: req.params.id });
        res.send(`Artifact with ID ${req.params.id} deleted successfully.`);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle updating an artifact (not implemented yet)
exports.artifact_update_put = async function(req, res) {
    try {
        const result = await Artifact.updateOne(
            { _id: req.params.id },
            { 
                artifactName: req.body.artifactName,
                originYear: req.body.originYear,
                culture: req.body.culture
            }
        );
        res.send(`Artifact with ID ${req.params.id} updated successfully.`);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// View details of a specific artifact (not implemented yet)
exports.artifact_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Artifact detail: ' + req.params.id);
};
