const mongoose = require("mongoose");
bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
    email:{
        unique: true,
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }

})

userSchema.pre("save",async function(next){
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
});

const userSchemaModel = mongoose.model('users',userSchema);

module.exports = userSchemaModel;