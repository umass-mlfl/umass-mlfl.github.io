---
layout: post
title: "Samory Kpotufe -- Some Recent Insights on Transfer-Learning"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=1kpHC9HZXVQ" %}

## Bio

I graduated (Sept 2010) in Computer Science at the University of California, San Diego, advised by Sanjoy Dasgupta. I then was a researcher at the Max Planck Institute for Intelligent Systems. At the MPI I worked in the department of Bernhard Schoelkopf, in the learning theory group of Ulrike von Luxburg. Following this, I spent a couple years as an Assistant Research Professor at the Toyota Technological Institute at Chicago. I then spent 4 years at ORFE, Princeton University as an Assistant Professor. Recently I was a visiting member at the Institute of Advanced Study from January to July 2020.

## Abstract

A common situation in Machine Learning is one where training data is not fully representative of a target population due to bias in the sampling mechanism or due to prohibitive target sampling costs. In such situations, we aim to ’transfer’ relevant information from the training data (a.k.a. source data) to the target application. How much information is in the source data about the target application? Would some amount of target data improve transfer? These are all practical questions that depend crucially on 'how far' the source domain is from the target. However, how to properly measure 'distance' between source and target domains remains largely unclear. In this talk we will argue that much of the traditional notions of 'distance' (e.g. KL-divergence, extensions of TV such as D_A discrepancy, density-ratios, Wasserstein distance) can yield an over-pessimistic picture of transferability. Instead, we show that some new notions of 'relative dimension' between source and target (which we simply term 'transfer-exponents') capture a continuum from easy to hard transfer. Transfer-exponents uncover a rich set of situations where transfer is possible even at fast rates; they encode relative benefits of source and target samples, and have interesting implications for related problems such as 'multi-task or multi-source learning'. In particular, in the case of transfer from multiple sources, we will discuss (if time permits) a strong dichotomy between minimax and adaptive rates: no adaptive procedure exists that can achieve the same rates as minimax (oracle) procedures.  The talk is based on earlier work with Guillaume Martinet, and ongoing work with Steve Hanneke.
