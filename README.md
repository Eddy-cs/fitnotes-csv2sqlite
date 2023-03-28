# fitnotes-csv2sqlite

fitnotes-csv2sqlite is a tool that allows you to import your workout data from an Excel file into the FitNotes app (by James Gay).

## Prerequisites

Before starting, you need to have the following:

- An Excel file with your workout data in the same format as the example file located in the "worksheet" folder (you can copy and paste you data on this file as long as it follows the same pattern)
- The FitNotes app installed on your Android device

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Eddy-cs/fitnotes-csv2sqlite.git
```

2. Install node.js:

Follow the instructions for your OS to install node.js.

3. Install the required dependencies:

```bash
npm install
```

## How to use

1. Copy your workout data to the provided Excel file (located on the worksheet folder) and save it as a CSV document in the input folder of the repository.
2. Export the FitNotes database by going to the Settings menu in the app and selecting "Export Database". This will create a backup file named "FitNotes_Backup.fitnotes".
3. Move the exported database file "FitNotes_Backup.fitnotes" to the input folder of the repository.
4. Open a command prompt or terminal window, navigate to the current repository, and execute the following command:

```bash
node fitnotesDatabaseWrite.js
```

This will write your workout data to the FitNotes database file. 5. After running the script, go back to the FitNotes app and import your data by going to the Settings menu and selecting "Import Database". Select the backup file "FitNotes_Backup.fitnotes" and wait for the import to finish.

Congratulations! You have successfully imported your workout data to the FitNotes app.
