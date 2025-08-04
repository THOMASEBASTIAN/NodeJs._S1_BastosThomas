import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('./data/campers.json');

export async function readDB() {
    try {
        const data = await fs.readFile(dbPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        // Si el archivo no existe o hay otro error, retorna un array vacío.
        console.error("Error al leer la base de datos:", error);
        return [];
    }
}

export async function writeDB(data) {
    try {
        await fs.writeFile(dbPath, JSON.stringify(data, null, 2)); // `null, 2` formatea el JSON para que sea legible
    } catch (error) {
        console.error("Error al escribir en la base de datos:", error);
    }
}
