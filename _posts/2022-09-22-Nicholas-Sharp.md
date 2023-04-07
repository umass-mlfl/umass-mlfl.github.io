---
layout: post
title: "Nicholas Sharp -- The Computational Geometry of Neural Implicit Surfaces"
---

{% include youtubePlayer.html yturl="https://youtu.be/CVuy7_WwHBs" %}

## Bio

Nicholas Sharp is a Senior Research Scientist in NVIDIA's Toronto AI Lab. His research develops new algorithms and representations for processing geometric data robustly and efficiently, with applications in computer graphics/vision and geometric machine learning. He received his PhD from Carnegie Mellon University advised by Prof. Keenan Crane, and was a postdoc at the University of Toronto with Prof. Alec Jacobson, affiliated with the Fields Institute for Mathematics and the Vector Institute for AI. Nick's work has been recognized with best paper awards (SIGGRAPH & SGP), a software award (SGP), an NSF graduate research fellowship, and a Fields Institute postdoctoral fellowship. He also happily leads several open-source software libraries for 3D computing, including Polyscope and geometry-central.  www.nmwsharp.com

## Abstract

Neural implicit surfaces describe a 3D shape as the level set of a neural network applied to spatial coordinates, and have proven remarkably effective for applications in computer graphics and vision. However, although these representations make learning and fitting tasks straightforward, basic geometric queries such as intersecting a ray against a surface or testing whether two surfaces intersect become much more difficult. This talk will first introduce some core concepts in neural shape representations, and then describe a new approach for geometric queries on neural implicit surfaces by applying a classic numerical technique called range analysis to compute guaranteed bounds on the output of a given neural network. The resulting algorithms enable geometric analysis of neural shape representations for applications in 3D geometry and machine learning.
