const router = require('express').Router()
const { Event } = require('../db/models')

router.get('/', (req, res, next) => {
  Event.findAll()
  .then(events => {
    res.json(events)
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  Event.create({
    title: req.body.title,
    description: req.body.description,
    start_time: req.body.start_time,
    end_time: req.body.end_time, 
    date: req.body.date
  })
  .then(newEvent => {
    res.json(`Added event" ${newEvent}`)
  })
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  Event.findById(req.params.id)
  .then(event => event.update(req.body))
  .then(updatedEvent => res.json(updatedEvent))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Event.findById(req.params.id)
  .then(event => res.json(event))
})

router.delete('/:id', (req, res, next) => {
  Event.destroy({ where: { id: req.params.id } })
  .then(() => res.json('Event deleted'))
})


module.exports = router