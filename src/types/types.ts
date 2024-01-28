export interface HashOutput {
  hash: string;
  salt: string;
}

export interface createUserInput {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
}
