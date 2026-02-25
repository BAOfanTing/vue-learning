//定义接口限制person的具体属性
export interface PersonInter {
    id:string,
    name:string,
    age:number,
    x?:string 
}


//自定义类型
//export type Persons = Array<PersonInter>;
export type Persons = PersonInter[];