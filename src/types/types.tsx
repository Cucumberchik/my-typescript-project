export type TypeUser = {
    name: string,
    kind: string,
    url: string,
    user?: TypeUser
}
export interface TypeApi {
    value: TypeUser[];
    key?: number,
    user?: TypeUser
}