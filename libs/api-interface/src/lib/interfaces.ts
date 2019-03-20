export interface Message {
  message: string;
}

export interface Payload {
  username: string;
  iat?: number;
  expiresIn?: string;
}
