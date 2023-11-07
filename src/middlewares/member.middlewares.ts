import { Request, Response, NextFunction } from 'express';
import * as response from '../config/response';
import * as dataAccess from '../utils/dataAccess.utils';
import * as models from '../models/vote.models';
import * as setting from "../config/setting.config"

export const userCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body
    const check = await dataAccess.findOne(`gf_member`, `email`, { column: "email", condition: "=", data: email, type: "AND" }, { column: "member_pw", condition: "=", data: password, type: "AND" }, { column: "is_delete", condition: "=", data: 'N', type: "AND" })

    if (check) {
        next()
    } else {
        res.status(400).json(response.memberValidationError)
    }
}

export const emailCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body
    const check = await dataAccess.findOne(`gf_member`, `email`, { column: "email", condition: "=", data: email, type: "AND" }, { column: "is_delete", condition: "=", data: 'N', type: "AND" })

    if (!check) {
        next()
    } else {
        res.status(400).json(response.emailDuplicateError)
    }
}

export const nicknameCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { nickname } = req.body
    const check = await dataAccess.findOne(`gf_member`, `nickname`, { column: "nickname", condition: "=", data: nickname, type: "AND" }, { column: "is_delete", condition: "=", data: 'N', type: "AND" })

    if (!check) {
        next()
    } else {
        res.status(400).json(response.nicknameDuplicateError)
    }
}

export const passwordCheck = async (req: Request, res: Response, next: NextFunction) => {
    const member_idx = req.params.member_idx
    const { oldPassword } = req.body
    const check = await dataAccess.findOne(`gf_member`, `nickname`, { column: "member_idx", condition: "=", data: member_idx, type: "AND" }, { column: "member_pw", condition: "=", data: oldPassword, type: "AND" })

    if (check) {
        next()
    } else {
        res.status(400).json(response.passwordIncorrectError)
    }
}

export const authCodeCheck = async (req: Request, res: Response, next: NextFunction) => {
    const { authCode } = req.body
    const check = await dataAccess.findOne(
        "gf_auth_code",
        "auth_code",
        { column: "auth_code", condition: "=", data: authCode, type: "AND" },
        { column: "reg_date", condition: ">=", data: `DATE_ADD(NOW(), INTERVAL - ${setting.EMAIL_VERIFICATION_TIME} MINUTE) AND is_used = 0`, type: "AND" })

    if (check) {
        next()
    } else {
        res.status(400).json(response.authCodeValidationError)
    }
}