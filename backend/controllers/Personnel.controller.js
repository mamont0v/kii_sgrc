const mongoose = require('mongoose')
const Personnel = require('../models/Personnel.model');

// @FETCH all Customers
exports.getPersonnel = async (req, res) => {
  try {
    const fetchPersson = Personnel.find()
    res.status(200).json(fetchPersson)
  } catch(error) {
    res.status(404).json({message:error.message})
  }
  
    // .then(data => res.json(data))
    // .catch(error => res.status(400).json('Error: ' + error))
};


// @POST a Customer
exports.createPersonnel = async (req, res) => {
  const personnel = req.body

  const newPersonnel = new Personnel(personnel)
  // const personnel = new Personnel({
  //   id: req.body.id,
  //   realname: req.body.realname,
  //   username: req.body.username,
  //   position: req.body.position,
  //   email: req.body.email,
  //   domain: req.body.domain,
  //   related_hardware: req.body.related_hardware,
  //   privilege_level: req.body.privilege_level,
  //   is_security_administrator: req.body.is_security_administrator,
  //   number_of_incidents: req.body.number_of_incidents,
  //   addition_info: req.body.addition_info
  // });
  try {
    await newPersonnel.save()
    res.status(201).json(newPersonnel)
  } catch (error) {
    res.status(409).json(error);
  }
  // personnel.save()
  // .then(() => {
  //   res.status(200).json('Added');
  // })
  // .catch(err => {
  //   res.status(400).json(err);
  // });
};


// get a Customer by Id
// exports.getTest = (req, res) => {
//   Personnel.findById(req.params.id)
//     .then(data => res.json(data))
//     .catch(err => res.status(400).json('Error', err))
// };


// UPDATE a Customer
exports.updatePersonnel = async (req, res) => {
  const {id: _id} = req.params
  const person = req.body
  
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id')

  const updatePerson = await Personnel.findByIdAndUpdate(_id, {...person, _id}, {new: true})
  
  res.json(updatePerson)
  // Personnel.findByIdAndUpdate(
  //   req.params.id,
  //   {
  //     user: req.body.user,
  //     email: req.body.email
  //   },
  //   { new: true }
  // )
  //   .select('-__v')
  //   .then(data => {
  //     if (!data) {
  //       return res.status(404).send({
  //         message: "Error -> Can NOT update a customer with id = " + req.params.id,
  //         error: "Not Found!"
  //       });
  //     }
  //     res.status(200).json(data);
  //   })
  //   .catch(err => {
  //     return res.status(400).send({
  //       message: "Error -> Can not update a customer with id = " + req.params.id,
  //       error: err.message
  //     });
  //   });
};

// DELETE a Customer
exports.deletePersonnel = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Пользователя с таким Id найдено')

  await Personnel.findByIdAndRemove(id)

  res.json({message: 'Пользователь удален успешно!'})
  // Personnel.findOneAndDelete(req.params.id)
  //   .then(() => res.json('Exercise delete'))
  //   .catch(err => res.status(400).json('Error', err))
};