"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const test_model_1 = require("../model/test.model");
class TestRoutes {
    constructor() {
        this.testRouter = express.Router();
        this.router();
    }
    router() {
        /**
         * 라우트: 테스트 생성
         */
        this.testRouter.post("/test", function (req, res) {
            let email = req.body.email;
            let pass = req.body.pass;
            try {
                test_model_1.test.createName(email, pass);
            }
            catch (err) {
                res.send(err.message);
            }
        });
        /**
         * 라우트: 테스트 업데이트
         */
        this.testRouter.put("/test/:name", function (req, res) {
            let email = req.body.email;
            let changeEmail = req.body.changeEmail;
            try {
                test_model_1.test.updateName(email, changeEmail);
            }
            catch (err) {
                res.send(err.message);
            }
        });
        /**
         * 라우트: 테스트 삭제
         */
        this.testRouter.delete("/test/:name", function (req, res) {
            let email = req.params.name;
            try {
                test_model_1.test.deleteName(email);
            }
            catch (err) {
                res.send(err.message);
            }
        });
    }
}
exports.TestRoutes = TestRoutes;
exports.testRoutes = new TestRoutes();
//# sourceMappingURL=test.route.js.map