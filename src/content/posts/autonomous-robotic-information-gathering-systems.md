---
title: "Autonomous Robotic Information Gathering Systems"
date: "2025-10-15"
author: "Xioeng"
tags: ["Raspberry Pi", "SeaRobotics Surveyor", "Python", "YSI EXO2", "Gaussian Processes", "Autonomous Surface Vehicles"]
readTime: "8 min read"
excerpt: "Robotic Information Gathering (RIG) is a process of optimizing information-theoretic metrics from efficient exploration using teams of robots with motion constraints and probabilistic models."
description: "Mapping environmental features using a team of robots"
pubDate: "2025-10-15"
---

## Overview

Robotic Information Gathering (RIG) is a process of optimizing an information-theoretic metric from efficient exploration of a region of interest by robots with motion constraints while considering inferences from a probabilistic model within a limited mission time. Effective data collection in collaborative information-gathering systems relies heavily on maintaining uninterrupted connectivity. Yet, real-world communication disruptions often pose challenges to information-gathering processes.


## The Challenge

One of the key challenges in multi-robot information gathering is maintaining reliable communication while exploring unknown environments. Our research focuses on developing decentralized systems that can operate even with limited communication bandwidth.

We introduce a novel method: a limited communication decentralized information-gathering system for multiple robots to explore environmental phenomena characterized as unknown spatial fields. Our method leverages quadtree structures to ensure comprehensive workspace coverage and efficient exploration.

## 3 Robots Setup

Our experimental setup utilizes three robots working in concert to gather spatial data. The robots coordinate their movements to optimize information gain while respecting communication constraints.

<figure style="margin: 20px 0; text-align: center;">
  <img src="/images/posts/rig_3robots.png" alt="3 Robots Setup - Configuration" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
  <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">The Three Robot Setup for Information Gathering</figcaption>
</figure>

### Robot Configuration
- Coordinated autonomous navigation
- Decentralized decision making
- Quadtree-based workspace partitioning

### Exploration Pattern
- Systematic coverage of region of interest
- Adaptive exploration based on sensor data
- Real-time communication protocols

## Temperature Rig

One of our primary experimental testbeds is the Temperature Rig, deployed at Florida International University. This system demonstrates the RIG methodology in a real-world environmental monitoring scenario.

<figure style="margin: 20px 0; text-align: center;">
  <img src="/images/posts/rig_temperature.png" alt="Temperature Data Collection at FIU" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
  <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">Temperature Rig - Three Robots Collecting Temperature Data</figcaption>
</figure>

### Data Collection
Three robots collect temperature data across a geographic area, building a spatial temperature map in real-time. The system maintains decentralized operation while coordinating through limited communication channels.

### Key Results
- Efficient coverage of large areas
- Accurate temperature field estimation
- Robust performance despite communication disruptions

## Watch Video

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" src="https://www.youtube.com/embed/WNDXamTPiTw" title="RIG in Action - Autonomous Robotic Information Gathering" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Technologies & Tools

Our research leverages several key technologies and frameworks:

- **Python**: Primary development language
- **Scikit-Learn**: Machine learning algorithms
- **Gaussian Processes**: Probabilistic modeling of spatial fields
- **ROS (Robot Operating System)**: Robot communication and control
- **SearRobot**: Custom robot platform
- **Surveyor ASV**: Autonomous surface vehicle platform

## Technical Approach

### Information-Theoretic Optimization
We use information theory metrics to drive robot exploration decisions, maximizing the reduction in uncertainty about the environmental field being observed.

### Decentralized Control
Rather than relying on a central planner, each robot makes decisions based on local information and limited communication with neighbors.

### Gaussian Processes
Gaussian process models provide probabilistic estimates of the spatial field, allowing us to quantify uncertainty and guide exploration accordingly.

## Results and Applications

The RIG methodology has applications across multiple domains:

- **Environmental Monitoring**: Temperature, humidity, pollution mapping
- **Agricultural Sensing**: Soil moisture, nutrient distribution mapping
- **Disaster Response**: Radiation, contamination mapping in hazardous areas
- **Ocean Monitoring**: Autonomous surface vehicles for oceanographic research

## Conclusion

Autonomous Robotic Information Gathering Systems represent an important advancement in collaborative robotics and environmental sensing. By combining decentralized control, information-theoretic optimization, and probabilistic modeling, we enable robots to efficiently explore and map complex environmental phenomena even in the face of communication constraints.

This research opens doors for autonomous systems to tackle real-world monitoring and exploration challenges across diverse application domains.
