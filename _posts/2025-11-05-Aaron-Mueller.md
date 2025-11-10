---
layout: post
title: "Aaron Mueller -- Time- and Context-aware Interpretability"
---

{% include youtubePlayer.html yturl="" %}

## Bio

Aaron Mueller is an assistant professor of Computer Science and, by courtesy, of Data Science at Boston University. His research centers on developing language modeling methods and evaluations inspired by causal and linguistic principles, and applying these to precisely control and improve the generalization of computational models of language. He completed a Ph.D. at Johns Hopkins University and was a Zuckerman postdoctoral fellow at Northeastern and the Technion. His work has been published in ML and NLP venues (such as ICML, ACL, and EMNLP) and has won awards at TMLR and ACL. He is a recurring organizer of the BlackboxNLP and BabyLM workshops, and has recently been featured in IEEE Spectrum (2024) and MIT Technology Review (2025).

## Abstract

Language has a rich temporality: it is expressed and parsed incrementally through time, and meaning is iteratively composed from a sequence and its context. Interpretability research has not deeply engaged with this structure: most methods assume that mechanisms are global and static. In this talk, I will present three efforts aimed at studying the temporal and positional dynamics of language model internals. First, I will introduce methods for automatically discovering circuits—task-specific subgraphs of the computation graph—with explicit attention to when and where information flows across token positions. Then, I will introduce Temporal Sparse Autoencoders, which relax the standard assumption that features remain stationary over time; this method enables us to trace how concepts dynamically increase in complexity and number as context size increases. Finally, I will show a case study using garden-path sentences, where a time-aware perspective helps explain incremental sentence processing and how models revise their interpretation of a sequence as new information is received. Together, these works show that interpretability must capture not just what models represent, but also how they evolve through time. I argue that this perspective will help us build a more predictive and precise science of language model behavior and control.
