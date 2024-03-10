---
layout: post
title: "Michael Niemeyer -- Neural Representations for 3D Asset Reconstruction, Generation, and Beyond"
---

{% include youtubePlayer.html yturl="https://youtu.be/M23H5cG8yJc" %}

## Bio

Michael is a research scientist at Google working on 3D computer vision and generative modeling in Federico Tombari’s lab. In 2022, he completed his PhD at the Max Planck Institute in Tuebingen supervised by Andreas Geiger. The works Occupancy Networks and Differentiable Volumetric Rendering were selected among the top 15 most influential papers at CVPR 2019 and 2020, and he received the best paper award at CVPR 2021 for the GIRAFFE project.

## Abstract

Neural field-based representations such as Neural Radiance Fields have revolutionized 3D computer vision in recent years. While they achieve impressive results in tasks such as view synthesis or generative modeling, neural fields are still only reluctantly used and integrated into larger-scale graphics, animation, or simulation software and products. Common reasons are slow and compute-intense inference and the reliance on ray-marching instead of following the more traditional rasterization pipeline that many modern compute devices are built for. In this talk, we first investigate the reconstruction use case: How can radiance field representations be transformed into mesh-based representations? And how can this be efficiently done in challenging scenarios such as highly-reflective surfaces? Next, we shift focus to the generative use case: We investigate how 3D assets can be generated purely from text prompts as well as how subject-driven reconstructions can be obtained from collections of images. Finally, we discuss first attempts of how neural fields can be used for SLAM to achieve real-time reconstructions from input image streams.
