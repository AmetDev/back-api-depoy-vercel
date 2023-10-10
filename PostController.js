const fs = require('fs')
const arrData = require('./base.js')
const ParkingService = require('./ParkingService.js')
console.log(arrData)
class ParkingController {
	async create(req, res) {
		try {
			const parking = req.body
			const parkingData = arrData
			parkingData.push(parking)
			res.json(parkingData)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}

	async getAll(req, res) {
		try {
			const parkingData = arrData
			console.log(arrData)
			res.json(parkingData)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}

	async getOne(req, res) {
		try {
			const id = req.params.id
			const parkingData = arrData
			const parking = parkingData.find(p => p.owner_id === id)
			res.json(parking)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}

	async update(req, res) {
		try {
			const updatedParking = req.body
			const parkingData = arrData
			const parkingIndex = parkingData.findIndex(
				p => p.owner_id === updatedParking.owner_id
			)
			parkingData[parkingIndex] = updatedParking

			res.json(parkingData)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}

	async delete(req, res) {
		try {
			const id = req.params.id
			const parkingData = arrData
			const parkingIndex = parkingData.findIndex(p => p.owner_id === id)
			const deletedParking = parkingData.splice(parkingIndex, 1)

			res.json(deletedParking)
		} catch (e) {
			res.status(500).json({ error: e.message })
		}
	}
}

module.exports = ParkingController
