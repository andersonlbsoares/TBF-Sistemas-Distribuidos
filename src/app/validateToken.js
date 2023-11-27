import TokenService from "./services/TokenService.js";

export function validateToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' }); // Status 401: Unauthorized
    }
    try {
        let decoded;
        if (token.startsWith('Bearer ')) {
            const tokenWithoutPrefix = token.slice(7);
            decoded = TokenService.validateToken(tokenWithoutPrefix);
        } else {
            decoded = TokenService.validateToken(token);
        }
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}
