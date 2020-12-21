import Joi from "@hapi/joi";
import User from "../../models/user";

// 회원가입
export const register = async ctx => {
    // Request Body 검증하기
    const schema = Joi.object().keys({
        username: Joi.string()
        .alphanum()
        .min(3)
        .max(20)
        .required(),
        password: Joi.string().required(),
    });
    const result = schema.validate(ctx.request.body);
    if ( result.error) {
     ctx.status = 400;
     ctx.body = result.error;
     return;   
    }
    const {username, password} = ctx.request.body;
    try {
        // uesrname 존재 유무 확인
        const exists = await User.findByUsername(username);
        if(exists) {
            ctx.status = 409; // confilct
            return;
        }

        const user = new User({
            username
        });
        await user.setPassword(password); // 비밀번호 설정
        await user.save(); // 데이터베이스 저장

        // // 응답할 데이터에서 hashedPassword 필드 제거
        // const data = user.toJSON();
        // delete data.hashedPassword;
        ctx.body = user.serialize();

        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true
        });
    } catch (e) {
        ctx.throw(500, e)
    }
}
export const login = async ctx => {
   const {username, password} = ctx.request.body;

   // username, password가 없으면 에러
   if (!username || !password) {
       ctx.status = 401;
       return;
   }
    try {
        const user = await User.findByUsername(username);
        if (!user) {
            ctx.status = 401;
            return;
        }
        const vaild = await user.checkPassword(password);
        if(!vaild) {
            ctx.status = 401;
            return;
        }
        ctx.body = user.serialize();
        const token = user.generateToken();
        ctx.cookies.set('access_token', token, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
            httpOnly: true
        });
    } catch (e) {
        ctx.throw(500, e);
        
    }
}
export const check = async ctx => {
    const {user} = ctx.state;
    if (!user) {
        //로그인 중 아님
        ctx.status = 401;
        return;
    }
    ctx.body =user;
}
export const logout = async ctx => {
    ctx.cookies.set('access_token');
    ctx.status = 204;
}

