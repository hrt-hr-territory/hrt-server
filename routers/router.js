import Router from 'express';
import UserItemController from '../controllers/UserItemController.js';

const router = new Router();

router.post( '/user_item', UserItemController.create );
router.get( '/user_item', UserItemController.getAllUserItems );
router.put( '/user_item/:id', UserItemController.updateUserItems );
router.delete( '/user_item/:id', UserItemController.deleteUserItems );

export default router;