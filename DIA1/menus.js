import inquirer from 'inquirer';
import chalk from 'chalk';
// Importa las funciones que crearás para cada rol
import { coordinatorMenu } from './coordinator.js'; 
// import { trainerMenu } from './trainer.js';
// import { camperMenu } from './camper.js';

export async function mainMenu() {
    console.log(chalk.blue('########################################'));
    console.log(chalk.blue('########## CAMPUSLANDS OS ##############'));
    console.log(chalk.blue('########################################'));

    const { role } = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Seleccione su rol:',
            choices: [
                { name: 'Coordinadora', value: 'coordinator' },
                { name: 'Trainer', value: 'trainer' },
                { name: 'Camper', value: 'camper' },
                new inquirer.Separator(),
                { name: 'Salir', value: 'exit' }
            ]
        }
    ]);

    switch (role) {
        case 'coordinator':
            await coordinatorMenu();
            break;
        // case 'trainer':
        //     await trainerMenu();
        //     break;
        // case 'camper':
        //     await camperMenu();
        //     break;
        case 'exit':
            console.log(chalk.yellow('Saliendo...'));
            process.exit(0);
    }
}