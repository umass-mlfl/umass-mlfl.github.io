---
layout: post
title: "Yonatan Belinkov -- Causal Mediation Analysis for Interpreting Neural NLP: The Case of Gender Bias"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=ew-P4vU-2yI" %}

## Bio

Yonatan Belinkov is a Postdoctoral Fellow at the Harvard School of Engineering and Applied Sciences (SEAS) and the MIT Computer Science and Artificial Intelligence Laboratory (CSAIL). His research focuses on interpretability and robustness of neural network models of human language. His research has been published at various NLP/ML venues. His PhD dissertation at MIT analyzed internal language representations in deep learning models, with applications to machine translation and speech recognition. He is a Harvard Mind, Brain, and Behavior Fellow. He will be joining the Technion Computer Science department in Fall 2020.

## Abstract

The success of neural network models in various tasks, coupled with their opaque nature, has led to much interest in interpreting and analyzing such models. Common analysis methods for interpreting neural models in natural language processing typically examine either their structure (for example, probing classifiers) or their behavior (challenge sets, saliency methods), but not both. In this talk, I will propose a new methodology grounded in the theory of causal mediation analysis for interpreting which parts of a model are causally implicated in its behavior. This methodology enables us to analyze the mechanisms by which information flows from input to output through various model components, known as mediators. I will demonstrate an application of this methodology to analyzing gender bias in pre-trained Transformer language models. In particular, we study the role of individual neurons and attention heads in mediating gender bias across three datasets designed to gauge a model’s sensitivity to gender bias. Our mediation analysis reveals that gender bias effects are (i) sparse, concentrated in a small part of the network; (ii) synergistic, amplified or repressed by different components; and (iii) de-composable into effects flowing directly from the input and indirectly through the mediators. I will conclude by laying out a few ideas for future work on analyzing neural NLP models. 
