---
title: "Learning-based Adaptive Navigation for Scalar Fields"
date: "2026-03-31"
author: "Jose Fuentes"
tags: ["SeaRobotics Surveyor", "Partial Differential Equations", "Navigation", "Machine Learning", "Gaussian Processes", "ROS", "Autonomous Surface Vehicles"]
readTime: "7 min read"
excerpt: "Developing robust, learning-enhanced gradient-based algorithms for efficient environmental monitoring and feature tracking in scalar fields."
description: "Adaptive navigation and contour tracking using Gaussian Processes."
pubDate: "2026-03-31"
---

## Overview

Scalar field features such as extrema (hotspots), contours, and saddle points are essential for applications in environmental monitoring, search and rescue, and resource exploration. Traditional navigation methods often rely on predefined, static trajectories, which can lead to inefficient mapping in unknown or dynamic environments. 

We developed a new adaptive navigation framework that leverages machine learning techniques—specifically Gaussian Processes—to enhance exploration efficiency and effectiveness in scalar fields. This system allows autonomous agents to identify and track environmental features while remaining robust to noisy data and physical obstacles.

## The Challenge

Navigating scalar fields in real-world environments presents several hurdles that traditional search patterns fail to address:

* **Sensor Noise**: Real-time data from environmental sensors is often subject to interference, making accurate gradient estimation difficult.
* **Obstacle Interference**: Static and dynamic obstacles can interrupt ideal trajectories, requiring the robot to deviate while maintaining its mission objective.
* **Exploration Efficiency**: Mapping an entire region to find a specific feature is resource-intensive; there is a need for algorithms that focus on areas of high interest.

## Technologies & Tools

Our research leverages several key technologies and frameworks:

* **Python**: Primary development language for algorithm implementation.
* **Gaussian Processes (GP)**: Used for probabilistic modeling and quantifying uncertainty in spatial fields.
* **ROS (Robot Operating System)**: Middleware for robot communication and hardware control.
* **Autonomous Surface Vehicles (ASV)**: Specialized platforms used for marine-based environmental monitoring.

## Technical Approach

### Learning-Enhanced Gradient Navigation
By incorporating learning-based adjustments into classic gradient-following, the robot computes the gradient at its current location and determines the next optimal exploration point. This approach incorporates data-driven adjustments to improve upon traditional methods.

### Probabilistic Field Updates
As the robot moves, the Gaussian Process model updates in real-time. This allows the system to differentiate between actual field features and sensor noise, ensuring the robot doesn't get "stuck" due to faulty data.

##  Setup

A single SeaRobotics Surveyor equipped with an YSI EXO2 sonde gathers environmental data such as Temperature, Oxygen, and Chlorophyll.

<figure style="margin: 20px 0; text-align: center;">
  <img src="/images/posts/GD_robot.png" alt="ASV Setup - Configuration" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
  <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">The Autonomous Surface Vehicle platform used for adaptive navigation experiments.</figcaption>
</figure>

## Field Experiments

We validated the methodology through field experiments conducted at the **Green Library Lake** at Florida International University (FIU). 

<figure style="margin: 20px 0; text-align: center;">
  <img src="/images/posts/GD_temperature_final.png" alt="Temperature Data Collection at FIU" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
  <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">Task Execution: Robot seeking the highest temperature concentration while updating its map.</figcaption>
</figure>

### Experimental Tasks
* **Hotspot Seeking**: The robot performs an initial mission to estimate the scalar field and then autonomously navigates toward the field's highest concentration.
* **Contour Tracking**: The system tracks specific level curves; if a curve crosses an obstacle, the robot triggers an avoidance routine while maintaining its track.

## Watch Video

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" src="https://www.youtube.com/embed/WgwoR-ZNZtE" title="Learning-based Adaptive Navigation for Scalar Field Mapping and Feature Tracking" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Results and Applications

This adaptive navigation methodology has immediate applications across several domains:

* **Environmental Monitoring**: Tracking thermal plumes, chemical spills, or algae blooms in water bodies.
* **Search and Rescue**: Using signal strength as a scalar field to locate emergency beacons.
* **Disaster Response**: Mapping radiation or contamination levels in hazardous zones.

## Conclusion

Learning-based Adaptive Navigation represents a significant advancement in how autonomous systems interact with their environments. By combining Gaussian Processes with robust gradient navigation, we enable robots to efficiently map and track complex environmental phenomena.

This research is supported by grants from the **NSF**, **ONR**, **DHS**, **DoD**, and the **FDEP**.