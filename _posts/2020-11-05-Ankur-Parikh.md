---
layout: post
title: "Ankur Parikh -- Towards High Precision Text Generation"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=tG0ixUpUgpo" %}

## Bio

Ankur Parikh is a senior research scientist at Google NYC and adjunct assistant professor at NYU. His research interests are in natural language processing and machine learning with a recent focus on high precision text generation. Ankur received his PhD from Carnegie Mellon in 2015 and has received a best paper runner up award at EMNLP 2014 and a best paper in translational bioinformatics at ISMB 2011.

## Abstract

Despite large advances in neural text generation in terms of fluency, existing generation techniques are prone to hallucination and often produce output that is unfaithful or irrelevant to the source text. In this talk, we take a multi-faceted approach to this problem from 3 aspects: data, evaluation, and modeling. From the data standpoint, we propose ToTTo, a tables-to-text-dataset with high quality annotator revised references that we hope can serve as a benchmark for high precision text generation task. While the dataset is challenging, existing n-gram based evaluation metrics are often insufficient to detect hallucinations. To this end, we propose BLEURT, a fully learnt end-to-end metric based on transfer learning that can quickly adapt to measure specific evaluation criteria. Finally, we propose a model based on confidence decoding to mitigate hallucinations. Collaborators: This is joint work with Thibault Sellam, Ran Tian, Xuezhi Wang, Sebastian Gehrmann, Manaal Faruqui, Bhuwan Dhingra, Diyi Yang, and Dipanjan Das.
