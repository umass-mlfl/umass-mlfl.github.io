# Machine Learning and Friends Lunch

How to update this website: there are three things you need to update on a regular basis.

## MLFL Metadata

Once a semester, update the following lines in `_config.yml`

```
# MLFL settings
current_semester_name: "Spring 2020"
current_sem_start: 2020-01-20
current_sem_end: 2020-04-29
```

This affects what the semester is called, and which talks appear in "This semester" vs "Archive".

## Speaker data

Speaker data is recorded in a Google sheets spreadsheet, which you should have access to if you are a MLFL organizer. 
Any time there are new updates to the Website Data spreadsheet, 
download the sheet as a TSV (File > Download > Tab-separated values (.tsv)). Then, run

`python process_info.py /path/to/new/tsv/file.tsv`

and then commit and push. This script is compatible with Python 3.7.6.

## Speaker headshots

Speaker headshots are stored in `assets/headshots/`. They are stored as square images named `FirstnameLastname.jpg`. 
You may have to update the code if there are duplicate names. `process_info` will print a warning if this happens.
