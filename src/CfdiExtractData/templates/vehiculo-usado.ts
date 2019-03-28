export default ({ minimalData } = {}) => {
	if(minimalData) {
        return {
            'vehiculousado:VehiculoUsado': {
                position: 'vehiculoUsado',
                attributes: ['version']
            }
        }
    }

    return {
        'vehiculousado:VehiculoUsado': {
            position: 'vehiculoUsado',
            attributes: [
                'version', 'montoAdquisicion', 'montoEnajenacion', 'claveVehicular', 'marca',
                'tipo', 'modelo', 'numeroMotor', 'numeroSerie', 'niv', 'valor'
            ],
            nodes: {
                'vehiculousado:InformacionAduanera': {
                    position: 'informacionAduanera',
                    attributes: ['numero', 'fecha', 'aduana']
                }
            }
        }
    }
};
