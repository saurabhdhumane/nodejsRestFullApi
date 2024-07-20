const PersonModule = require('../models/PersonModel');
const bcrypt = require('bcryptjs');
const { createJwt, logout } = require('../util/jwt');

// Display all persons
const personDisplay = async (req, res, next) => {
    try {
        const persons = await PersonModule.find({});
        res.status(200).json({
            success: true,
            message: "Display all persons",
            data: persons
        });
    } catch (error) {
        next(error);
    }
};

// Register a new person
const personRegister = async (req, res, next) => {
    try {
        const { name, email, address, password } = req.body;

        if (!name || !email || !address || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        const existingPerson = await PersonModule.findOne({ email });

        if (existingPerson) {
            return res.status(400).json({
                success: false,
                message: 'Email address is already registered'
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newPerson = await PersonModule.create({
            name,
            email,
            address,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: 'Person registered successfully',
            data: newPerson
        });
    } catch (error) {
        next(error);
    }
};

// Update a person
const personUpdate = async (req, res, next) => {
    try {
        const { name, email, address } = req.body;

        const findPerson = await PersonModule.findOne({ email });

        if (!findPerson) {
            return res.status(404).json({
                success: false,
                message: 'Person with the given email not found'
            });
        }

        findPerson.name = name;
        findPerson.address = address;

        await findPerson.save();

        res.status(202).json({
            success: true,
            message: 'Person updated successfully',
            data: findPerson
        });
    } catch (error) {
        next(error);
    }
};

// Delete a person
const personDelete = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        const findPerson = await PersonModule.findOneAndDelete({ email });

        if (!findPerson) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

// Login a person
const personLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }

        const findPerson = await PersonModule.findOne({ email });

        if (!findPerson) {
            return res.status(404).json({
                success: false,
                message: 'Email is not valid'
            });
        }

        const isMatch = await bcrypt.compare(password, findPerson.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Email or password is incorrect'
            });
        }

        const token = await createJwt(findPerson.id);


        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                person: findPerson,
                token
            }
        });
    } catch (error) {
        next(error);
    }
};

const personLogout = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1];

        await logout(token)

        res.status(200).json({
            success: true,
            message: "Person LogOut Successfull"
        })
    } catch (error) {
        next(error)
    }
}

module.exports = { personDisplay, personRegister, personUpdate, personDelete, personLogin, personLogout };
