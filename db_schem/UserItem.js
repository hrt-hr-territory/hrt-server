import mongoose from 'mongoose';

const UserItem = new mongoose.Schema( {
    name: { type: String, default: 'name' },
    userName: { type: String, default: 'user name' },
    telNumber: { type: String, default: 'user name' },
    email: { type: String, default: 'user email'}
} );

export default mongoose.model( 'UserItem', UserItem );