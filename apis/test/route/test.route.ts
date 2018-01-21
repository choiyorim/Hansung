import * as express from 'express';
import { test } from '../model/test.model';

export class TestRoutes {
	public testRouter: express.Router = express.Router();

	constructor() {
		this.router();
	}

	public router() {
		/**
		 * 라우트: 테스트 생성
		 */
		this.testRouter.post("/test", function (req, res){
			let email: any = req.body.email;
			let pass: any =req.body.pass;
			try {
				test.createName(email,pass);
			} catch (err) {
				res.send(err.message);
			}
		});




		/**
		 * 라우트: 테스트 업데이트
		 */
		this.testRouter.put("/test/:name", function (req, res){
			let email: any = req.body.email;
			let changeEmail: any = req.body.changeEmail;
			try {
				 test.updateName(email,changeEmail)
			} catch (err) {
				res.send(err.message);
			}
		});

		/**
		 * 라우트: 테스트 삭제
		 */
		this.testRouter.delete("/test/:name", function (req, res){
			let email: any = req.params.name;
			try {
				 test.deleteName(email);
			} catch (err) {
				res.send(err.message);
			}
		});
	}
}

export const testRoutes: TestRoutes = new TestRoutes();