export interface Message {
  message: string;
}

export interface Payload {
  email: string;
  iat?: number;
  expiresIn?: string;
}
