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

def get_this_semester_dates():
  with open(CONFIG_FILE, 'r') as f:
    config = yaml.load(f, Loader=yaml.FullLoader)
    start_date = config["current_sem_start"]
    end_date = config["current_sem_end"]
    return start_date, end_date

def is_this_semester(date_str, semester_dates):
  date = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
  return date >= semester_dates[0] and date <= semester_dates[1]

def is_future(date_str, semester_dates):
  date = datetime.datetime.strptime(date_str, '%Y-%m-%d').date()
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
      
      if is_future(talk["date"], this_sem_dates):
        continue
      if is_this_semester(talk["date"], this_sem_dates):
        this_semester.append(talk)
      else:
        archive.append(talk)

    assert len(keys) == len(set(keys))
    make_table(this_semester, THIS_SEMESTER_FILE)
    refresh_posts(this_semester)
    make_table(archive, ARCHIVE_FILE)
 

if __name__ == "__main__":
  main()
