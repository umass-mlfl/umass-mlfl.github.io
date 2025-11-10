---
layout: post
title: "Sherry Yang -- Learning World Models and Agents for High-Cost Environments"
---

{% include youtubePlayer.html yturl="" %}

## Bio

Sherry Yang is an Assistant Professor of Computer Science at NYU Courant and a Staff Research Scientist at Google DeepMind. She researches in machine learning with a focus on reinforcement learning and generative modeling. Her current research interests include learning world models and agents, and their applications in robotics and AI for science. Her research has been recognized by the Best Paper award at ICLR and various media outlets such as VentureBeat and TWIML. She has organized tutorials, workshops, and served as Area Chairs at major conferences (NeurIPS, ICLR, ICML, CVPR). Prior to her current role, she was a post-doc at Stanford working with Percy Liang. She received her Ph.D. from UC Berkeley advised by Pieter Abbeel and Master’s and Bachelor's degrees from MIT.

## Abstract

While neural networks have achieved superhuman performance in domains with low-cost simulations—from AlphaGo to LLMs—their application to the physical world is bottlenecked by a fundamental challenge: high-cost interactions. In fields like robotics, ML engineering, and the natural sciences, every action or experiment is expensive and time-consuming. This talk outlines strategies for building intelligent agents that learn efficiently despite these real-world constraints. We first address the physical world by showing how learned world models can serve as high-fidelity simulators for robotics, enabling extensive policy refinement before deployment on costly hardware. We then turn to complex engineering domains, where actions like running an ML program incur significant time delays, and discuss adaptations to reinforcement learning to make it robust for these long action settings. Finally, we show how compositional generative models can navigate the vast hypothesis spaces in science, intelligently proposing experiments to accelerate the pace of discovery.
