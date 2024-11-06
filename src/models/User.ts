import { Model, DataTypes } from "sequelize";
import { sequelize} from "../instances/mysql";

export interface UserInstance extends Model{
    id: number
    name: string
    age: number
    email: string
    endereco: string
    bairro: string
    CEP: number
}
export const User = sequelize.define<UserInstance>("User,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING
    },
    age:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    },
    email:{
        type:DataTypes.STRING
    },
    endereco:{
        type:DataTypes.STRING
    },
    bairro:{
        type:DataTypes.STRING
    },
    CEP:{
        type:DataTypes.INTEGER
    },
},{
    tableName:'Users',
    timestamps:false
})