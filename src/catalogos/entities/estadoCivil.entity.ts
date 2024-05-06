import { tk_CatalogTable } from "src/tkcore/tk_CatalogTable";
import { Entity } from "typeorm";

@Entity({schema: "catalogos"})
export class EstadoCivil extends tk_CatalogTable{}
