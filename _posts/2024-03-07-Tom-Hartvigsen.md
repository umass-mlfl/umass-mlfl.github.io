---
layout: post
title: "Tom Hartvigsen -- Lifelong Editing for Language Models"
---

{% include youtubePlayer.html yturl="https://youtu.be/HAcQcyx1yGA" %}

## Bio



## Abstract

Despite impressive capabilities, language models still generate factually incorrect, biased, and hallucinatory content. When we find such misbehaviors, we need ways to update our models while avoiding excessive finetuning costs and retaining the model behaviors we like. One burgeoning approach to keeping language models factual is model editing, which aims to inject new facts into language model weights. However, most existing methods 1) edit a model only once, despite a quickly-changing world, and 2) update language model weights directly, which can cause dramatic side-effects to model behavior. In this talk, I will introduce GRACE, our editing method that leaves a language model's weights untouched. GRACE works by learning and caching replacement activations that induce corrected language models outputs. New activations are selectively retrieved during inference when new inputs resemble prior edits. Beyond achieving edits without weight updates, GRACE unlocks success in a hard, new lifelong model editing setup, where we repeatedly edit the same model thousands of times in a row. After introducing GRACE, I will briefly showcase our other recent efforts to improve model editing evaluation and to interface model editors with other test-time interventions.
