import collections
import os
import csv
import json
import sys
import yaml
import datetime

CONFIG_FILE = "_config.yml"
THIS_SEMESTER_FILE = "this_semester.txt"
ARCHIVE_FILE = "archive.txt"
POST_DIR = "_posts"
HEADSHOTS_PATH = "assets/headshots/"

def make_table(records, filename):
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

def check_images(this_semester):
  for talk in this_semester:
    maybe_path = HEADSHOTS_PATH + talk["key"] + ".jpg"
    if not os.path.exists(maybe_path):
      print("\n".join(
      ["WARNING: Possibly missing headshot for " + talk["speaker"] + " in " + HEADSHOTS_PATH + ".",
       "     Please name the file " + maybe_path]))
    

def get_this_semester_dates():
  with open(CONFIG_FILE, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)
    start_date = config["current_sem_start"]
    end_date = config["current_sem_end"]
    return start_date, end_date

def is_this_semester(date, semester_dates):
  return date >= semester_dates[0] and date <= semester_dates[1]

def is_future(date, semester_dates):
  return date > semester_dates[1]

def main():
  master_file, = sys.argv[1:]

  this_sem_dates = get_this_semester_dates()

  this_semester = []
  archive = []
  
  with open(master_file, 'r') as f:
    all_talks = csv.DictReader(f, delimiter="\t")
  
    keys = []
    for talk in all_talks:
      key = "".join(talk["speaker"].split())
      talk["key"] = key
      keys.append(key)

      date_obj =  datetime.datetime.strptime(talk["date"], '%Y-%m-%d').date()
      
      if is_future(date_obj, this_sem_dates):
        continue
    
      talk["prettyDate"] = date_obj.strftime("%B %d")

      if is_this_semester(date_obj, this_sem_dates):
        this_semester.append(talk)
      else:
        archive.append(talk)

    if not len(keys) == len(set(keys)):
      for key, count in collections.Counter(keys).items():
        if count > 1:
          print("WARNING: Duplicate key detected. Please manually adjust the keys for the following cases:")
          print("\t".join(["", key] + [talk["date"] for talk in this_semester + archive if talk["key"] == key]))
    make_table(this_semester, THIS_SEMESTER_FILE)
    make_table(archive, ARCHIVE_FILE)
 
    refresh_posts(this_semester)
    check_images(this_semester)

if __name__ == "__main__":
  main()
