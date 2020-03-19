//contains the following middlewares

//getUserDetails() - used for finding username (to display a profie)
//updateUserPassword() - used to update password.

//note: can be used for both freelancer and employer

const express = require('express');
const router = express.Router();

export const getUserDetails = (db, userName) => {
	return new Promise((resolve, reject) => {
		db.collection('user')
			.find({ 'username': userName })
			.toArray((err, docs) => {
				if(docs && docs.length>0){
					resolve(docs[0]);
				}
				else
				{
					reject();
				}
			});
	});
 };

export const updateUserPassword = (db, userName,pwd) => {
	return db.collection('user').updateOne({'username': userName }, {
		$set: {password:pwd} 
	})
	.then((r) => {
		return Promise.resolve(r.matchedCount);
	})
	.catch((err) => {
		return Promise.reject(err);
	})
}

export default router;