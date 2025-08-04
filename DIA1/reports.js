import { readDB } from './db.js';
import chalk from 'chalk';

export async function listHighRiskCampers() {
    const campers = await readDB();
    
    // Filtramos los campers usando métodos de array de JS
    const highRiskCampers = campers.filter(camper => camper.Riesgo === 'Alto');

    if (highRiskCampers.length === 0) {
        console.log(chalk.yellow('No se encontraron campers con riesgo alto.'));
        return;
    }

    console.log(chalk.red.bold('--- Campers con Bajo Rendimiento (Riesgo Alto) ---'));
    
    // Iteramos y mostramos la información
    highRiskCampers.forEach(camper => {
        console.log(`
            ID: ${chalk.cyan(camper.ide)}
            Nombre: ${camper.Nombre} ${camper.Apellidos || ''}
            Ruta: ${camper.Ruta}
            Estado: ${chalk.magenta(camper.Estado)}
        `);
    });
}