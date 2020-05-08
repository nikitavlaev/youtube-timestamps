# Youtube timestamps
Chrome plugin for video timestamps
## Purpose
Often when watching a video lecture or an interview, there is a need for quick movement between its logical parts. For this, there is already a popular solution in the form of a set of hyperlinks with headings - “timestamps”, but at the moment there is no automated way to generate them. A browser plug-in is offered as the final product, which adds the desired functionality to the youtube.com website.
## MVP
Client side: basic plugin, that handles user interaction and data interchange  
Server side: simple model, predicting times and descriptions of timestamps, based on video subtitles  
Proposed pipeline:
  1. Retrieve video id from user side
  1. Get subtitles of that video
  1. Mark subtitles, which are likely to be timestamps
  1. Generate descriptions for the results of the previous step
  1. Show timestamps to user
## Tech stack
Server side: Python, Flask, Sklearn (and many different utility libs)
## WIP
Check branches to see current progress
