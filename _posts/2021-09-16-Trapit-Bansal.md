---
layout: post
title: "Trapit Bansal -- Few-Shot Natural Language Processing via Self-Supervised Meta-Learning"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=Ek0-boGpg5E" %}

## Bio

Trapit is a Ph.D. student advised by Prof. Andrew McCallum at UMass Amherst. His recent research focuses on improving the generalization of natural language processing models with limited human-labeled data through meta-learning, self-supervised learning, and multi-task learning. In the past, he has also worked on machine learning methods for recommendation systems, information extraction, knowledge representation, and reinforcement learning for multi-agent systems. During his Ph.D., he has interned at Facebook, OpenAI, Google Research, and Microsoft Research. His work has also received a best paper award at ICLR 2018. Before starting his Ph.D., he obtained a B.S. and M.S. in Mathematics from the Indian Institute of Technology, Kanpur.

## Abstract

Humans show a remarkable capability to accurately solve a wide range of problems efficiently -- utilizing a limited amount of computation and experience. Deep learning models, by stark contrast, can be trained to be highly accurate on a narrow task while being highly inefficient in terms of the amount of compute and data required to reach that accuracy. Few-shot learning considers this problem of learning models that generalize to new tasks with very little supervision. Natural language processing (NLP) has seen recent breakthroughs with unsupervised pre-training of large models that can be applied to many NLP tasks, however, few-shot learning of new tasks is still inefficient. In this talk, I will present a sequence of work on meta-learning for improving few-shot learning of NLP tasks. Meta-learning, or learning to learn, treats the learning process itself as a learning problem from data, to learn systems that can generalize to new tasks efficiently. However, meta-learning requires a distribution over tasks with relevant labeled data that can be difficult to obtain, severely limiting the practical utility of meta-learning methods. I will present solutions that construct task distributions from unlabeled text data to enable large-scale meta-learning. The resulting self-supervised meta-learning methods optimize the pre-training directly for future fine-tuning with few examples, which leads to improved few-shot learning of new tasks. By providing useful training tasks for meta-learning, these approaches help lift a pertinent bottleneck for training meta-learning methods and should enable many future applications of meta-learning in NLP, such as hyper-parameter optimization, continual learning, neural architecture search, and more.
