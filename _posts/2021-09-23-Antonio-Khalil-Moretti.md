---
layout: post
title: "Antonio Khalil Moretti -- Variational Combinatorial Sequential Monte Carlo Methods for Bayesian Phylogenetic Inference"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=eV3IXFAp1Qg " %}

## Bio

Antonio is currently a senior data scientist on the search algorithm team at Walmart Labs using machine learning to improve customer experience. Antonio recently completed a PhD in the Computer Science Department at Columbia University in the lab of Itsik Pe'er. He has developed a number of variational Bayesian inference methods for open problems in computational biology. At the heart of these questions has been a curiosity about how information is naturally encoded or represented in living systems, through neuronal firing activity or through the molecular sequences comprising the genome. To address these questions, his research has focused on the development of expressive statistical methodologies along with tractable inference algorithms for fast approximate inference on structured sequential data.

## Abstract

Bayesian phylogenetic inference is often conducted via local or sequential search over topologies and branch lengths using algorithms such as random-walk Markov chain Monte Carlo (MCMC) or Combinatorial Sequential Monte Carlo (CSMC). However, when MCMC is used for evolutionary parameter learning, convergence requires long runs with inefficient exploration of the state space. We introduce Variational Combinatorial Sequential Monte Carlo (VCSMC), a powerful framework that establishes variational sequential search to learn distributions over intricate combinatorial structures. We then develop nested CSMC, an efficient proposal distribution for CSMC and prove that nested CSMC is an exact approximation to the (intractable) locally optimal proposal. We use nested CSMC to define a second objective, VNCSMC which yields tighter lower bounds than VCSMC. We show that VCSMC and VNCSMC are computationally efficient and explore higher probability spaces than existing methods on a range of tasks.  
