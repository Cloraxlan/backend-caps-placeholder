
export default interface User {
    email: string;
    name: string;
    tokens: Array<SessionToken>
}
export interface SessionToken{
    // v4 UUID
    //import { v4 as uuidv4 } from 'uuid';
    value: string;
    //Unix epoch time when token expires
    expires: number
}