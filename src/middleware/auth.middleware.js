import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { asynchHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";

export const verifyJwt = asynchHandler(async (req, res, next) => {
    try {
        const token =
            req.cookies?.access - token ||
            req.header("Authorization"?.replace("Bearer ", ""));

        if (!token) {
            throw new ApiError(401, "unAuthorized request");
        }

        const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodeToken._id).select(
            "-password -refreshToken"
        );
        if (!user) {
            throw new ApiError(401, "Invalid Token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || " invalid access token");
    }
});
