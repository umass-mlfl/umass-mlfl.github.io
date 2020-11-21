---
layout: post
title: "Marcus Gualtieri -- Learning Robotic Pick-Place with Uncertain Object Shapes"
---

{% include youtubePlayer.html yturl="https://www.youtube.com/watch?v=KNyHbM0PcZU" %}

## Bio

Marcus Gualtieri is a PhD student in computer science at Northeastern University who studies robotic manipulation and is advised by Robert Platt. Previous to this, he developed simulation and control software for adaptive optics research in Dayton, Ohio. Marcus received an M.S. in computer science from Northeastern and a B.S. in software engineering from Florida Tech.

## Abstract

Pick-place is the problem of rearranging objects by fixing them one-by-one in the hand and placing them stably. In open environments, such as households, hospitals, or grocery stores, objects are noisily and partially observed by the robot's sensors. Calculating grasps that are likely to fix objects and placements that are likely to be stable is not, in this setting, straight-forward. In this talk I will discuss how machine learning has influenced approaches to this problem and how this problem has motivated machine learning research. There have been two main approaches to pick-place with uncertain object shapes. First, reinforcement learning has been used to jointly learn perception and control. One major challenge with this approach is the 6-dimensional, continuous action space that robots encounter, i.e., part of the "curse of dimensionality". I will discuss how we addressed this challenge by learning hierarchical attention. Second, several modular systems have been proposed, where perception is handled by machine learning and control by geometric planning algorithms, and each module is designed separately. Challenges that arise here include (i) most established pick-place planners require the full geometry of the objects and (ii) these planners do not consider uncertainty in the shape of the objects. I will discuss how 3D point-based object instance segmentation and shape completion have recently been used to address these challenges. Hopefully this discussion will highlight how machine learning has enabled robots to work in increasingly open environments and what gaps still remain.
