import { ManyToOne, JoinColumn, Column } from 'typeorm';

// Define una función de fábrica para generar decoradores personalizados
function ManyToOneRestricNullable() {
    return function (type: any, name?: string) {
        return function (target: any, propertyName: string) {
            ManyToOne(type, {onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })(target, propertyName);
            JoinColumn({ name:  name ?? propertyName.toLowerCase() })(target, propertyName);
            Column({ name: name ?? propertyName.toLowerCase(), nullable: true })(target, propertyName);
        };
    };
}
function ManyToOneRestric() {
    return function (type: any, name?: string) {
        return function (target: any, propertyName: string) {
            ManyToOne(type, {onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })(target, propertyName);
            JoinColumn({ name:  name ?? propertyName.toLowerCase() })(target, propertyName);
            Column({ name: name ?? propertyName.toLowerCase() })(target, propertyName);
        };
    };
}
// Crea los decoradores personalizados con las opciones predeterminadas
export const tk_ManyToOneRestricNullable = ManyToOneRestricNullable();
export const tk_ManyToOneRestric = ManyToOneRestric();
