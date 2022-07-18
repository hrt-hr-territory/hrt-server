import {Request, Response} from 'express'
import UserItem from '../db_schem/UserItem.js'


class UserItemController {

    async create( req: Request, res: Response ) {
        try {
            const {
                name,
                userName,
                telNumber,
                email
            } = req.body
            const userItem = await UserItem.create( {
                name,
                userName,
                telNumber,
                email
            } );
            res.json( userItem )
        } catch ( e ) {
            res.status( 500 ).json( e )
        }
    }

    async getAllUserItems( req: Request, res: Response ) {
        try {
            const userItem = await UserItem.find();
            return res.json( userItem );
        } catch ( e ) {
            res.status( 500 ).json( e );
        }
    }

    async updateUserItems( req: Request, res: Response ) {
        try {
            const { id: _id } = req.params
            const { name,
                userName,
                telNumber,
                email } = req.body
            const userItem = {
                _id,
                name,
                userName,
                telNumber,
                email
              }
            UserItem.findByIdAndUpdate(
                _id,
                userItem,
                ( err: any, updatedUserItems: any ) => { //TODO: надо посмотреть в типах монгуса
                  if ( err ) {
                    res.json( {
                      userItem,
                      success: false,
                      msg: 'Failed to update user data'
                    } )
                  } else {
                    res.json( { userItem, success: true, 
                            name,
                            userName,
                            telNumber,
                            email 
                        } )
                    }
                } )
        } catch ( e ) {
            res.status( 500 ).json( e );
        }
    }
    
    async deleteUserItems( req: Request, res: Response ) {
        try {
            const { id } = req.params
            console.log( id );
            const userItem = await UserItem.findByIdAndDelete( id )
            return res.json( userItem )
        } catch ( e ) {
            res.status( 500 ).json( e );
        }
    }

}

export default new UserItemController()