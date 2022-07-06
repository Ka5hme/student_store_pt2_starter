const express = require("express")
const router = express.Router()
const Order = require("../models/order")

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.listOrdersForUser()
    return res.status(200).json({ orders })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const createOrder = await Order.createOrder()
      return res.status(200).json({ createOrder })
    } catch (err) {
      next(err)
    }
  })

module.exports = router