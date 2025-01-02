export enum Role {
  Admin = 'admin',
  User = 'user'
}

export type User = {
  id: number
  name: string
  role: Role
  username: string
  token: string
}
