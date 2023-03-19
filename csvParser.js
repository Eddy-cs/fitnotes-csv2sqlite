import fs from "fs";

const data = fs.readFileSync("./input/data.csv", { encoding: "utf-8" });
let file = data.split("\r\n").map((row) => row.split(","));

function toMetricWeight(lbs) {
  return lbs * 0.453592;
}

function csvWorkoutMaper(csvWorkoutFile) {
  const dates = csvWorkoutFile[2].slice(1).filter((date) => date !== "");
  const workoutData = [];
  let currentExercise = "";

  for (let row = 3; row < csvWorkoutFile.length; row++) {
    let currentColumn = 1;
    let currentRow = csvWorkoutFile[row];
    let currentDate = 0;

    if (!currentRow[0].includes("SET")) {
      currentExercise = currentRow[0];
      continue;
    }

    while (csvWorkoutFile[row].length > currentColumn) {
      if (currentRow[currentColumn] !== "") {
        let workout = {
          exercise: currentExercise,
          date: dates[currentDate],
          set: [
            Number(currentRow[currentColumn]),
            toMetricWeight(currentRow[currentColumn + 1]),
          ],
        };
        workoutData.push(workout);
      }
      currentColumn += 2;
      currentDate++;
    }
  }

  return workoutData;
}

const parsedWorkoutData = csvWorkoutMaper(file);

export default parsedWorkoutData;
