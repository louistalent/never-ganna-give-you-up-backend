import express, { Request, Response } from 'express';
import * as utils from "../utils/common.utils"
import * as response from "../config/response"
import * as models from "../models/vote.models"
import * as dataAccess from '../utils/dataAccess.utils';
import jwt, { JwtPayload } from "jsonwebtoken"
import * as nodemailer from "../utils/nodemailer"

const parseIp = (req: any) => {
    return req.headers['x-forwarded-for']?.split(',').shift()
        || req.socket?.remoteAddress
}

export const setVote = async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        let ip_ = parseIp(req);
        const ip = ip_.replaceAll('::ffff:', '');
        const res1 = await models.checkVote(dataAccess, id, ip);

        if (res1) {
            // ip check
            const res2 = await models.checkIp(dataAccess, id, ip);
            if (res2) {
                // remove vote
                const result_ = await models.removeVote(dataAccess, id, ip);
                if (result_) {
                    const meme = await models.getMeme(dataAccess, id);
                    if (meme) {
                        const result2 = await models.count(dataAccess, Number(meme.count) - 1, id);
                        if (result2)
                            res.status(200).json({
                                data: 'remove',
                            })
                    } else {
                        res.status(400).json('getMeme')
                    }
                }
            }
            else {
                res.status(200).json({
                    data: 'nothing',
                })
            }
            // const res2 = await models.setVote(dataAccess, ip, id, 1);
        } else {
            const result = await models.insertVote(dataAccess, ip, id, 1);
            if (result) {
                const meme = await models.getMeme(dataAccess, id);
                if (meme) {
                    const result2 = await models.count(dataAccess, Number(meme.count) + 1, id);
                    if (result2)
                        res.status(200).json({
                            data: 'insert',
                        })
                } else {
                    res.status(400).json('getMeme')
                }
            } else {
                res.status(400).json('insertVote')
            }
        }
    } catch (error: any) {
        console.log("setVote", error)
        res.status(400).json(error)
    }
}

export const getMemeList = async (req: Request, res: Response) => {
    try {
        let ip_ = parseIp(req);
        const ip = ip_.replaceAll('::ffff:', '');

        const voteList = await models.getVote(dataAccess, ip);
        if (voteList) {
            console.log(voteList);
            let meme = await models.getMemeList(dataAccess);
            for (let i = 0; i < voteList.length; i++) {
                for (let j = 0; j < meme.length; j++) {
                    if (voteList[i].type == meme[j].idx && voteList[i].ip == ip) {
                        meme[j][`voted`] = true;
                    }
                }
            }
            res.status(200).json({
                'data': meme,
            })
        }

    } catch (error: any) {
        console.log("getMemeList", error)
        res.status(400).json(error)
    }
}

