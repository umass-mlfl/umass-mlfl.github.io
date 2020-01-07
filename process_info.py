import csv
import json
import sys

THIS_SEMESTER_FILE = "this_semester.txt"
VIDEO_ARCHIVE_FILE = "video_archive.txt"
ABSTRACT_ARCHIVE_FILE = "abstract_archive.txt"

THIS_SEMESTER_KEYS = ["speaker", "title", "bio", "date"]
VIDEO_ARCHIVE_KEYS = ["speaker", "title", "date", "video"]
ABSTRACT_ARCHIVE_KEYS = ["speaker", "title", "bio", "date", "abstract"]

def make_table(records, keys, filename):
  table = []
  for record in records:
    record_list = []
    for key in keys:
      record_list.append(record[key])
    table.append(record_list)
  obj = {"data": table}
  with open(filename, 'w') as f:
    f.write(json.dumps(obj))

def main():
  master_file, current_semester, current_year = sys.argv[1:]

  this_semester = []
  video_archive = []
  abstract_archive = []
  
  with open(master_file, 'r') as f:
    all_talks = csv.DictReader(f, delimiter="\t")

  
    for talk in all_talks:
      if talk["semester"] == current_semester and str(talk["year"]) == current_year:
        this_semester.append(talk)
      else:
        if "video" in talk and talk["video"]:
          video_archive.append(talk)
        abstract_archive.append(talk)



    print(len(video_archive))
    make_table(this_semester, THIS_SEMESTER_KEYS, THIS_SEMESTER_FILE)
    make_table(video_archive, VIDEO_ARCHIVE_KEYS, VIDEO_ARCHIVE_FILE)
    make_table(abstract_archive, ABSTRACT_ARCHIVE_KEYS, ABSTRACT_ARCHIVE_FILE)
 

if __name__ == "__main__":
  main()
