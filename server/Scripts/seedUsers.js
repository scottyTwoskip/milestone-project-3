const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userModel = require('./path/to/your/userModel'); // Adjust the path to your user model
const saltRounds = 10;

mongoose.connect('mongodb://localhost:27017/GainsTracker', { useNewUrlParser: true, useUnifiedTopology: true });

async function createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return new userModel({ username, password: hashedPassword });
}

async function insertSampleUsers() {
    try {
        const users = [
            await createUser('user1', 'password123'),
            await createUser('user2', 'password456'),
            await createUser('user3', 'password789')
        ];

        await userModel.insertMany(users);
        console.log('Users added successfully');
    } finally {
        mongoose.connection.close();
    }
}

insertSampleUsers().catch(err => {
    console.error('Error adding users:', err);
    mongoose.connection.close();
});