import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema()
export class Usuario {
  @Prop({ required: true }) 
  nombre: string;

  @Prop({ required: true, unique: true }) 
  email: string;

  @Prop({ required: true }) 
  password: string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);