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
## Plan
1. Create dataset 
   1. Create a table of playlists for model training
   1. Make a script that constructs a dataframe using a format, suitable for training
1. Train a model
   1. Magic!
1. Create a server app, that runs model
1. Build that basic plugin
1. Great! You have created one another app, that no one will ever use
## Tech stack
Server side: Python, Flask, Sklearn (and many different utility libs)
## Progress
1. Research
   1. Necessary Youtube API learned
   1. Few words about subtitles->timestamps part 
   1. Something about BERT
   1. Booked flight to Eastern islands to learn dark woodoo magic
1. Dataset
   1. Playlist table is ready
   1. Dataframe gathering script is ready
1. Model training
   1. Super intelligent words
## WIP
