function XYZ(cliente, nombre, impuesto) {
    this._cliente = function() {
        return cliente;
    }
    this._nombre = function() {
        return nombre;
    }
    this._impuesto = function() {
        return impuesto || [];
    }
};
/*consultas*/
XYZ.prototype.getNombre = function() {
    return this._nombre();
};
XYZ.prototype.setNombre = function(nombre) {
    this.nombre.push(nombre)
};
/*visualizacion*/