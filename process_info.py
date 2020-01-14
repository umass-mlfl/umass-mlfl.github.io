import os
import csv
import json
import sys

THIS_SEMESTER_FILE = "this_semester.txt"
ARCHIVE_FILE = "archive.txt"
POST_DIR = "_posts"

THIS_SEMESTER_KEYS = ["speaker", "title", "bio", "date"]
ARCHIVE_KEYS = ["speaker", "title", "date", "bio", "abstract", "video", "website"]

def make_table(records, keys, filename):
  _unused = """table = []
  for record in records:
    record_list = []
    for key in keys:
      record_list.append(record[key])
    table.append(record_list)"""
  obj = {"data": records}
  with open(filename, 'w') as f:
    f.write(json.dumps(obj))

POST_TEMPLATE = """---
layout: post
title: "%%SPEAKER%% -- %%TITLE%%"
---

{% include youtubePlayer.html yturl="%%YTURL%%" %}

## Bio

%%BIO%%

## Abstract

%%ABSTRACT%%
"""

def generate_post(talk):

  new_post = POST_TEMPLATE.replace(
                "%%TITLE%%", talk["title"]).replace(
                "%%SPEAKER%%", talk["speaker"]).replace(
                "%%YTURL%%", talk["video"]).replace(
                "%%BIO%%", talk["bio"]).replace(
                "%%ABSTRACT%%", talk["abstract"])

  new_post_filename = POST_DIR + "/" + "-".join([talk["date"]] + talk["speaker"].split()) + ".md"
  
  with open(new_post_filename, 'w') as f:
    f.write(new_post)
  

def refresh_posts(this_semester):
  for f in os.listdir(POST_DIR):
    os.remove(os.path.join(POST_DIR, f))

  for talk in this_semester:
    if talk["video"]:
      generate_post(talk)

def main():
  master_file, current_semester, current_year = sys.argv[1:]

  this_semester = []
  archive = []
  
  with open(master_file, 'r') as f:
    all_talks = csv.DictReader(f, delimiter="\t")

  
    for talk in all_talks:
      if talk["semester"] == current_semester and str(talk["year"]) == current_year:
        this_semester.append(talk)
      else:
        archive.append(talk)

    make_table(this_semester, THIS_SEMESTER_KEYS, THIS_SEMESTER_FILE)
    refresh_posts(this_semester)
    make_table(archive, ARCHIVE_KEYS, ARCHIVE_FILE)
 

if __name__ == "__main__":
  main()
