const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: Number, required: true },
    email: { type: String, required: true },
    phoneNr: { type: Number, required: true },
    address: { type: String, required: true },
    zip: { type: Number, required: true },
    city: { type: String, required: true },
    cardKeeper: { type: String, required: true },
    cardNr: { type: Number, required: true },
    expiaryMonth: { type: Number, required: true },
    expiaryYear: { type: Number, required: true },
    cvc: { type: Number, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;