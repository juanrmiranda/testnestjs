import { ManyToOne, JoinColumn, Column } from 'typeorm';
import { snakeCase } from 'lodash';

// Define una función de fábrica para generar decoradores personalizados
function ManyToOneRestricNullable() {
    return function (type: any, name?: string) {
        return function (target: any, propertyName: string) {
            const columnName = name ? name : snakeCase(propertyName);
            ManyToOne(type, {onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })(target, propertyName);
            JoinColumn({ name:  columnName })(target, propertyName);
            Column({ name: columnName, nullable: true })(target, propertyName);
        };
    };
}
function ManyToOneRestric() {
    return function (type: any, name?: string) {
        return function (target: any, propertyName: string) {
            const columnName = name ? name : snakeCase(propertyName);
            ManyToOne(type, {onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })(target, propertyName);
            JoinColumn({ name:  columnName })(target, propertyName);
            Column({ name: columnName })(target, propertyName);
        };
    };
}
// Crea los decoradores personalizados con las opciones predeterminadas
export const tk_ManyToOneRestricNullable = ManyToOneRestricNullable();
export const tk_ManyToOneRestric = ManyToOneRestric();
