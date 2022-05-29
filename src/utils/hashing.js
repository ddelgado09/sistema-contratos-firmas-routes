import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

class Hashing {
    static getRandomBytes(length = 16) {
        return randomBytes(length).toString('hex');
    }

    static hashPassword(input) {
        if (typeof input !== 'string') {
            return false;
        }

        const salt = Hashing.getRandomBytes();
        const hashedPassword = scryptSync(input, salt, 64).toString('hex');

        return `${salt}:${hashedPassword}`;
    }

    static validateHash(input, hash) {
        if (typeof input !== "string" || typeof hash !== "string") return false;

        const [salt, key] = hash.split(':');
        const hashedBuffer = scryptSync(input, salt, 64);

        const keyBuffer = Buffer.from(key, 'hex');
        return timingSafeEqual(hashedBuffer, keyBuffer);
    }
}

export default Hashing;