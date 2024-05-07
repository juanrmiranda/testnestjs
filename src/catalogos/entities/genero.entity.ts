import { tk_CatalogTable } from 'tkcore/tk_CatalogTable';
import {Entity} from 'typeorm';

@Entity({schema: "catalogos"})
export class Genero extends tk_CatalogTable{}
