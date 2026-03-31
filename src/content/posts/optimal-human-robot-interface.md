---
title: "Towards Optimal Human-Robot Interface Design for Underwater Teleoperation"
date: "2026-03-31"
author: "Jose Fuentes"
tags: ["Human Robot Interaction", "Teleoperation", "Underwater Robotics", "Optimal Control", "BlueROV", "MediaPipe", "Python", "PyMavlink", "OpencV", "Digital Twins"]
readTime: "7 min read"
excerpt: "Enhancing the teleoperation of underwater vehicles through intuitive human body movements and optimized interface design."
description: "Developing efficient and intuitive HRI for complex dynamical systems."
pubDate: "2026-03-31"
---

## Overview

Efficient and intuitive Human-Robot Interfaces (HRI) are crucial for expanding the user base of operators and enabling new applications in critical areas such as precision agriculture, automated construction, rehabilitation, and environmental monitoring. 

We investigate the design of intuitive human-robot interfaces specifically for the teleoperation of complex dynamical systems, such as underwater vehicles. The proposed framework seeks an optimal interface that complies with key concepts such as **user comfort, efficiency, continuity, and consistency**. Our research demonstrates that optimal interfaces arising from common robot tasks are inherently user-friendly and significantly reduce the learning curve for new operators.

## The Challenge

Traditional teleoperation of underwater vehicles often requires extensive training and specialized hardware (like Joysticks or Gamepads), which may not be intuitive for all users. Maintaining precise control in underwater environments—where visibility is low and dynamics are complex—poses a significant challenge. 

Our research addresses this by developing a mapping that translates natural human body movements into robot commands, ensuring that the interface is both "natural" and mathematically optimal for the task at hand.

## Experimental Setup: BlueROV & Body Tracking

Our experimental testbed utilizes a **BlueROV2** underwater vehicle. Instead of traditional controllers, we leverage vision-based tracking to interpret the operator's physical gestures as navigation commands.

<figure style="margin: 20px 0; text-align: center; display: flex; flex-wrap: wrap; justify-content: center; gap: 24px;">
  <div style="flex: 1 1 260px; max-width: 48%;">
    <img src="/images/posts/HI_mapping.png" alt="HRI Setup - Configuration" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
    <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">The HRI testbed: Mapping human body gestures to BlueROV2 movements in real-time.</figcaption>
  </div>
  <div style="flex: 1 1 260px; max-width: 48%;">
    <img src="/images/posts/HI_tank_setup.png" alt="HRI User Study" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
    <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">User performing teleoperation with the optimal HRI interface.</figcaption>
  </div>
</figure>

### Interface Configuration
* **Natural Mapping**: Direct correlation between body lean/gestures and robot thrust.
* **Optimal Control**: Algorithms that filter movements to ensure smooth, efficient trajectories.
* **Low Latency**: Achieving a response time of approximately **100ms** to ensure a tight feedback loop for the operator.

## Key Results

Our framework was validated through a comprehensive user study. The results highlighted the efficiency of the "Optimal Interface" design:

* **Rapid Proficiency**: New users were able to achieve proficiency in the teleoperation task in **under one minute**.
* **High Efficiency**: Operators successfully navigated complex paths with minimal physical strain.
* **Consistency**: The interface remained intuitive across different users, proving the robustness of the "natural mapping" approach.

## Watch Video

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" src="https://www.youtube.com/embed/1PQ4jdE06vU" title="Optimal HRI for Underwater Teleoperation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Technologies & Tools

Our research leverages several state-of-the-art frameworks:

* **Google MediaPipe**: Used for real-time human pose and gesture estimation.
* **Python**: Core language for interface optimization and communication.
* **BlueROV / ArduSub**: The underwater robotics platform and firmware.
* **Digital Twins**: Used for initial testing and user training before field deployment.

## Technical Approach

### Optimal Interface Design
We use a mathematical framework to find the "best" mapping between the human's input space and the robot's action space. This involves optimizing for **efficiency** (completing the task quickly) while maintaining **comfort** (minimizing awkward body positions).

### Continuity and Consistency
For an interface to be usable, small changes in human movement should result in small changes in robot movement (continuity), and the same gesture should always result in the same robot behavior (consistency).

## Conclusion

By moving away from rigid, traditional control schemes toward intuitive, body-based interfaces, we lower the barrier to entry for complex robotics tasks. Whether it is monitoring a coral reef or assisting in underwater construction, an optimal HRI ensures that the human operator can focus on the mission rather than the mechanics of the controller.

This research contributes to the broader goal of making robots more accessible and easier to collaborate with across diverse industries.