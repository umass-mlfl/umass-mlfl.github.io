---
layout: post
title: "Jean Honorio -- Fair Sparse Regression with Clustering: An Invex Relaxation for a Combinatorial Problem"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=6wiJQ8zX0K4" %}

## Bio

Jean Honorio is an Assistant Professor in the Computer Science Department at Purdue University, as well as in the Statistics Department (by courtesy). Prior to joining Purdue, Jean was a postdoctoral associate at MIT, working with Tommi Jaakkola. His Erdős number is 3. His work has been partially funded by NSF. He is an editorial board reviewer of JMLR, and has served as area chair of NeurIPS, senior PC member of IJCAI and AAAI, PC member of NeurIPS, ICML, AISTATS among other conferences and journals.

## Abstract

We study the problem of fair sparse regression on a biased dataset where bias depends upon a hidden binary attribute. The presence of a hidden attribute adds an extra layer of complexity to the problem by combining sparse regression and clustering with unknown binary labels. The corresponding optimization problem is combinatorial but we propose a continuous relaxation, resulting in an invex optimization problem. To the best of our knowledge, this is the first invex relaxation for a combinatorial problem. We show that our method recovers the correct support of the regression parameter vector, as well as the exact value of the hidden attribute for each sample. The above theoretical guarantees hold as long as the number of samples is logarithmic in terms of the dimension of the regression parameter vector.  The result above serves as a gentle introduction to a unifying framework, which uses the power of continuous relaxations (beyond convexity), Karush-Kuhn-Tucker conditions, primal-dual certificates and concentration inequalities. This framework has allowed us to produce novel algorithms for several NP-hard combinatorial problems, such as learning Bayesian networks, graphical games, inference in structured prediction, and community detection.  
