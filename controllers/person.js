const Person = require('../models/Person');



exports.getPersons = async (req, res, next) => {
    try {
        // console.log(req.query)
        const person = await Person.find({});
        res.status(201).json({
            success: true,
            data: person,
            count: person.length
        })

    } catch (error) {
        res.status(400)
        console.log(error);
    }

}

exports.getPerson = async(req, res, next) => {
    try {
        const person = await Person.findById(req.params.id);
        res.status(201).json({
            success: true,
            data: person
        })
        res.status(200).send(person)

    } catch (error) {
        res.status(400)
    }
}

exports.createPerson = async (req, res, next) => {


        const person = await new Person({...req.body})
        person.save()
          .then(doc => {
          console.log(doc)
          return res.status(200).send({msg : "person created" , response : person})
        })
        .catch(err => {
     console.error(err)
     return res.status(500).send({msg : " person error"})
   })
       
}

exports.updatePerson = async (req, res, next) => {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body);
    if(!person) {
        return res.status(400).json({success:false});
    }
    res.status(201).json({
        success: true,
        data: person
    })
}

exports.deletePerson = async (req, res, next) => {
    const person = await Person.findByIdAndDelete(req.params.id);
    if(!person) {
        return res.status(400).json({success:false});
    }
    res.status(201).json({
        success: true,
        data: {}
    })
}