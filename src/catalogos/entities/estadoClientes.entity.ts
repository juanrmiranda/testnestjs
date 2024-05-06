import { tk_CatalogTable } from "src/tkcore/tk_CatalogTable";
import { Entity } from "typeorm";

@Entity({schema: "catalogos"})
export class EstadoCliente extends tk_CatalogTable{}