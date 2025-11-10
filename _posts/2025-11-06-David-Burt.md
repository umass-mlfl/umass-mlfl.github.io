---
layout: post
title: "David Burt -- Consistent Validation for Predictive Methods in Spatial Settings  "
---

{% include youtubePlayer.html yturl="" %}

## Bio

David Burt is a postdoc in Professor Tamara Broderick’s group at the MIT Laboratory For Information and Decision Systems. Previously,  he was a PhD student in the Machine Learning Group at the University of Cambridge, supervised by Professor Carl Edward Rasmussen. He develops methods for validation and uncertainty quantification for spatiotemporal data.

## Abstract

Spatial prediction tasks are key to weather forecasting, studying air pollution impacts, and other scientific endeavors. Determining how much to trust predictions made by statistical or physical methods is essential for the credibility of scientific conclusions. Unfortunately, classical approaches for validation fail to handle mismatch between locations available for validation and (test) locations where we want to make predictions. This mismatch is often not an instance of covariate shift (as commonly formalized) because the validation and test locations are fixed (e.g., on a grid or at select points) rather than independent and identically distributed from two distributions. We formalize a check on validation methods: that they become arbitrarily accurate as validation data becomes arbitrarily dense. We show that classical and covariate-shift methods can fail this check. We propose a method that builds from existing ideas in the covariate-shift literature, but adapts them to the validation data at hand. We prove that our proposal passes our check. And we demonstrate its advantages empirically on simulated and real data.
