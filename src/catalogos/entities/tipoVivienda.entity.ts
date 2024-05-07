import { tk_CatalogTable } from 'tkcore/tk_CatalogTable';
import {Entity} from 'typeorm';

@Entity({schema: "catalogos"})
export class TipoVivienda extends tk_CatalogTable{}
