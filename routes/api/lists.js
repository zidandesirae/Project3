const router = require("express").Router()
const fs = require("fs")
let notes = []

router.get("/api/lists", function(req, res) {
    fs.readFile("db/db.json", "utf8", function(err, data) {
        notes = JSON.parse(data)

        console.log(notes)
        return res.json(notes);
    })
});


router.post("/api/lists", function(req, res) {

    let newNote = req.body;
    console.log("newnote", newNote)


    // newNote.routeName = newNote.id.replace(/\s+/g, "").toLowerCase();
    let id = 1
    if (notes.length !== 0){
     id = notes[notes.length - 1].id + 1
    }
    
    newNote = { id, ...newNote }
    notes.push(newNote);

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        console.log('you file was written')

        res.json(newNote);

    })
});
router.delete("/api/lists/:id", function(req, res){
    let id = parseInt(req.params.id)
    console.log("delete id", id)
    let temp = notes.filter(elem =>elem.id !== id)
 
    console.log(temp)
    notes = temp
    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        console.log('you file was written')

        res.json(notes);

    })   

})

router.put("/api/lists/:id", function(req, res){
    console.log(req.params)
    let id = parseInt(req.params.id)
    console.log("update id", id)
    let temp = notes.map(elem =>{
        if (elem.id === id){
            elem.title = req.body.title;
            elem.text = req.body.text
        }
        return elem
    })

 
    console.log(temp)
    notes = temp

    fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        console.log('you file was written')

        res.json(notes);

    })   

})
module.exports = router