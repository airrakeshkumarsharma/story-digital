import { configs } from "@configs";
import { NextFunction, Request, Response } from "express"
import * as jwt from "jsonwebtoken"

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const storyDigitalAuthKey: any = req.headers["x-story-digital"];

    try {
        const decoded: any = jwt.verify(storyDigitalAuthKey, configs.auth.JWT_SECRET);

        req.user = decoded;

        next()
    } catch (err) {
        // err

        next(new Error(err.message))
    }

}