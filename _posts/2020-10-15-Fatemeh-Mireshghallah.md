---
layout: post
title: "Fatemeh Mireshghallah -- Privacy and Fairness in Deep Neural Network Inference"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=nbFjjOHLvHQ" %}

## Bio

Fatemehsadat Mireshghallah is a 3rd year CS Ph.D. student at UC San Diego. She received her B.Sc. in Computer Engineering with honors from Sharif University of Technology in 2018 and she is a recipient of the National Center for Women & IT (NCWIT) Aspirations in Computing Collegiate award in 2020, for her work on light-weight privacy-preserving ML. Her thesis research at UCSD is focused on designing practical and low-overhead privacy-preserving solutions for deployed cloud-based deep learning models. She was a research intern at Microsoft Research AI in summer 2020 where she worked on privacy-preserving text generation.

## Abstract

Cloud-based execution of machine learning models is becoming increasingly prevalent. Futuristic mixed or augmented reality and robotic applications rely on remote cloud localization services. Consumers also use these services to perform mundane everyday tasks such as simply applying filters on images, or calling smart home devices or virtual assistants. Their personal information is collected and sent to a service-provider on the cloud where a machine learning task is executed and the query is responded to. This execution model could have enormous privacy ramifications when consumers use it in their home or private industrial setup. In this talk, I will talk about two methods that we proposed (Shredder and Cloak) to address the privacy and latency issues in the aforementioned setup. These methods do not rely on encryption and aims to reduce the information content of the query with as little as possible compromise on the inference accuracy by adding noise to the query sent to the cloud. I will conclude the talk by discussing the effects that different privacy mitigations have on the fairness of the deployed models.
