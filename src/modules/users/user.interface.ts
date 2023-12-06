export type Tuser ={
   id:string,
   password:string,
   needsPassword:boolean;
   role:"admin"|"student"|"faculty";
   status :"in-progress"|"blocked";
   isDeleted :boolean;

}
export type TNewUser ={
   role :string,
   password :string,
   id:string
}