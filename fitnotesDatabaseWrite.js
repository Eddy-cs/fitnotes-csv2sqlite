import sqlite3 from "sqlite3";
import { open } from "sqlite";
import parsedWorkoutData from "./csvParser.js";
sqlite3.verbose();

async function writeToFitnotes(workoutData) {
  const db = await open({
    filename: "./input/FitNotes_Backup.fitnotes",
    driver: sqlite3.Database,
  });

  let setCounter = 0;

  for (let i = 0; i < workoutData.length; i++) {
    let sql = `SELECT * FROM exercise WHERE name = "${workoutData[i].exercise}"`;

    const result = await db.get(sql);

    if (result) {
      db.run(
        `INSERT INTO training_log (_id, exercise_id, date, reps, metric_weight, unit) VALUES(NULL, ${result._id}, "${workoutData[i].date}", ${workoutData[i].set[0]}, ${workoutData[i].set[1]}, 2)`
      );
      setCounter++;
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`Succesfully inserted: ${setCounter} sets`);
    } else {
      db.run(
        `INSERT INTO exercise(_id, name,  category_id, exercise_type_id) VALUES(NULL, "${workoutData[i].exercise}", 1, 0)`
      );
      console.log(
        `\rNew exercise inserted:"${workoutData[i].exercise}" inserted`
      );
      i--;
    }
  }

  db.close();
}

writeToFitnotes(parsedWorkoutData);
