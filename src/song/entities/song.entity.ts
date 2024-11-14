import { IsEmpty, IsNumber, IsPositive, IsString } from "class-validator"

export class Song {
  id:number
  @IsString()
  @IsEmpty()
  cim:string
  @IsString()
  @IsEmpty()
  szero :string
  @IsEmpty()
  @IsNumber()
  @IsPositive()
  Hossz :number 
  @IsEmpty()
  @IsNumber()
  @IsPositive()
  ar :number
  
}
