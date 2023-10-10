const fs = require('fs')
const arrData = [
	{
		owner_id: 1,
		owner_name_parking: 'str.qwerty',
		owner_password: 152005,
		index_city: 95000,
		owner_price_parking: 230,
		owner_free_forinvalid: true,
		owner_number_parking_spaces: 34,
		User_number_of_free_place_parking: 34,
		User_number_of_occupied_parking_spaces: 0,
	},
	{
		owner_id: 2,
		owner_name_parking: 'str.qwerts',
		owner_password: 152005,
		index_city: 4500,
		owner_price_parking: 120,
		owner_free_forinvalid: false,
		owner_number_parking_spaces: 45,
		User_number_of_free_place_parking: 45,
		User_number_of_occupied_parking_spaces: 0,
	},
	{
		owner_id: 3,
		owner_name_parking: 'str.ertyy',
		owner_password: 152005,
		index_city: 95000,
		owner_price_parking: 345,
		owner_free_forinvalid: true,
		owner_number_parking_spaces: 56,
		User_number_of_free_place_parking: 56,
		User_number_of_occupied_parking_spaces: 0,
	},
	{
		owner_id: 4,
		owner_name_parking: 'Auchan',
		owner_password: 152005,
		index_city: 95000,
		owner_price_parking: 2345,
		owner_free_forinvalid: true,
		owner_number_parking_spaces: 45,
		User_number_of_free_place_parking: 45,
		User_number_of_occupied_parking_spaces: 0,
	},
	{
		owner_id: 5,
		owner_name_parking: 'Meganom',
		owner_password: 152005,
		index_city: 95000,
		owner_price_parking: 500,
		owner_free_forinvalid: false,
		owner_number_parking_spaces: 45,
		User_number_of_free_place_parking: 45,
		User_number_of_occupied_parking_spaces: 0,
	},
]
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
