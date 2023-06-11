import { Region } from './region';
import { TypePokemon } from './typePokemon';

export class Pokemon {
  public id:string = '';
  public name: string = '';
  public urlPhoto: string = '';
  public regionId: string = '';
  public region: Region[] = [];
  public typeId: string = '';
  public typePokemon: TypePokemon[] = [];
}
