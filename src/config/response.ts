import { Result, ResultEmailSendSuccess } from "../types/response.types"
import { EMAIL_VERIFICATION_TIME } from "./setting.config"

// success
export const signUpSuccess: Result = {
    code: 1000,
    message: "Sign up successfully 🎉"
}

export const emailSendSuccess: ResultEmailSendSuccess = {
    code: 1001,
    message: "Sent a auth code to your email.",
    timeout: EMAIL_VERIFICATION_TIME
}

export const signInSuccess: Result = {
    code: 1001,
    message: "Sign in successfully 🎉"
}
export const tokenRecreate: Result = {
    code: 1002,
    message: "Token Recreate"
}
export const signOutSuccess: Result = {
    code: 1003,
    message: "Sign out successfully🎉"
}
export const createMemberSuccess: Result = {
    code: 1004,
    message: 'Create Member successfully🎉'
}

export const updateMemberSuccess: Result = {
    code: 1005,
    message: 'Update Member successfully🎉'
}

export const deleteMemberSuccess: Result = {
    code: 1006,
    message: 'Delete Member successfully🎉'
}

export const changePasswordSuccess: Result = {
    code: 1011,
    message: 'Change Password successfully🎉'
}

export const createPostSuccess: Result = {
    code: 1004,
    message: 'Create Post successfully🎉'
}

export const updatePostSuccess: Result = {
    code: 1005,
    message: 'Update Post successfully🎉'
}

export const deletePostSuccess: Result = {
    code: 1006,
    message: 'Delete Post successfully🎉'
}

export const createCommentSuccess: Result = {
    code: 1004,
    message: 'Create Comment successfully🎉'
}

export const updateCommentSuccess: Result = {
    code: 1005,
    message: 'Update Comment successfully🎉'
}

export const deleteCommentSuccess: Result = {
    code: 1006,
    message: 'Delete Comment successfully🎉'
}

export const createReplySuccess: Result = {
    code: 1004,
    message: 'Create Reply successfully🎉'
}

export const updateReplySuccess: Result = {
    code: 1005,
    message: 'Update Reply successfully🎉'
}

export const deleteReplySuccess: Result = {
    code: 1006,
    message: 'Delete Reply successfully🎉'
}

export const likesUpdateSuccess: Result = {
    code: 1011,
    message: "Updated likes🎉"
}
export const dislikesUpdateSuccess: Result = {
    code: 1012,
    message: "Updated dislikes🎉"
}


// Duplicate //
export const emailDuplicateError: Result = {
    code: 2001,
    message: "The email is a duplicate."
}

export const nicknameDuplicateError: Result = {
    code: 2002,
    message: "The nickname is a duplicate."
}

export const UpdateSuccess: Result = {
    code: 1005,
    message: 'Update successfully🎉'
}

export const updateDateSuccess: Result = {
    code: 1005,
    message: 'Update Date successfully🎉'
}

export const passwordChangeSuccess: Result = {
    code: 1005,
    message: "Password change successfully"
}

// invalid //

export const authCodeValidationError: Result = {
    code: 3003,
    message: "Invalid authentication code."
}

export const headersValidationError: Result = {
    code: 3001,
    message: "Invalid header information. "
}

export const idValiodationError: Result = {
    code: 3002,
    message: "This ID is not available."
}

export const nicknameValiodationError: Result = {
    code: 3003,
    message: "This is an invalid nickname."
}

export const memberValidationError: Result = {
    code: 3004,
    message: "The id or password is incorrect."
}

export const passwordIncorrectError: Result = {
    code: 3011,
    message: 'Old Password is incorrect.'
}

// failed
export const emailFailedSend: Result = {
    code: 4000,
    message: "Email sending failed, please try again."
}

export const tokenVerificationFailed: Result = {
    code: 4001,
    message: "The token has expired."
}

export const notFoundApiKey: Result = {
    code: 4002,
    message: "Not found API KEY"
}