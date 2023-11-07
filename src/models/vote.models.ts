import * as types from "../types/check.types"
import * as setting from "../config/setting.config"
import { write } from "fs"


export const checkVote = async (dataAccess: any, id: string, ip: string): Promise<any> => {
    const sql: string = `
        SELECT * FROM vote
        WHERE type = ?
        AND ip = ?`
    const values: string[] = [id, ip]

    const data: any = await dataAccess.selectOne(sql, values)
    if (data) {
        return data
    } else {
        return false
    }
}
export const checkIp = async (dataAccess: any, id: any, ip: string): Promise<any> => {
    const sql: string = `
        SELECT * FROM vote
        WHERE ip = ?
        AND type = ?`;
    const values: string[] = [ip, id]

    const data: any = await dataAccess.selectOne(sql, values)
    if (data) {
        return data
    } else {
        return false
    }
}
export const setVote = async (dataAccess: any, id: any, ip: any, vote: number): Promise<any> => {
    const sql: string = `
        UPDATE vote SET
            vote = ?
        WHERE type = ?
        AND ip = ?`;
    const values: string[] = [vote, id, ip]
    return dataAccess.update(sql, values)
}

export const getVote = async (dataAccess: any, ip: any): Promise<any> => {
    let sql: string = `
        SELECT * FROM vote 
        WHERE ip = ?
    `;

    return await dataAccess.selectAll(sql, [ip])
}
export const getMeme = async (dataAccess: any, id: any): Promise<any> => {
    let sql: string = `
        SELECT * FROM meme_list 
        WHERE idx = ?
    `;

    return await dataAccess.selectOne(sql, [id])
}

export const count = async (dataAccess: any, count: any, id: any): Promise<any> => {
    const sql: string = `
        UPDATE meme_list SET
            count = ?
        WHERE idx = ?`;
    const values: string[] = [count, id]
    return dataAccess.update(sql, values)
}

export const getMembersTotalCount = async (dataAccess: any, email: string | undefined, name: string | undefined, role: string | undefined): Promise<any> => {
    let sql: string = `
        SELECT count(*) as total_count FROM gf_member gm WHERE is_delete='N'`

    if (email) sql += ` AND email like '%${email}%'`
    if (name) sql += ` AND nickname like '%${name}%'`
    if (role) sql += ` AND role='${role}'`

    return dataAccess.selectOne(sql, [])
}

export const insertVote = async (dataAccess: any, ip: any, id: any, vote: number): Promise<any> => {
    let sql: string = `
        INSERT INTO vote SET
                ip = ?,
                type = ?,
                time = NOW(),
                vote = ?
        `
    const values: string[] = [ip, id, vote]

    return dataAccess.insert(sql, values)
}


export const removeVote = async (dataAccess: any, id: any, ip: any,): Promise<any> => {
    let sql: string = `
        DELETE FROM vote
        WHERE type= ?
        AND ip = ?
        `
    const values: string[] = [id, ip]

    return dataAccess.insert(sql, values)
}

export const getMemeList = async (dataAccess: any): Promise<any> => {
    let sql: string = `
        SELECT * FROM meme_list
    `;

    return await dataAccess.selectAll(sql, [])
}


