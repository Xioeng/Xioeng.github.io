---
title: "Localization in Sensory-Compromised Environments using Environmental PDEs"
date: "2026-03-31"
author: "Jose Fuentes"
tags: ["Raspberry Pi", "SeaRobotics Surveyor", "Python", "YSI EXO2", "Gaussian Processes", "Particle Filters", "PDEs", "Autonomous Surface Vehicles"]
readTime: "8 min read"
excerpt: "A localization framework using spatiotemporal fields governed by PDEs as unique environmental signatures for autonomous navigation."
description: "Utilizing Rao-Blackwellized Particle Filters and multimodal environmental data for robust localization."
pubDate: "2026-03-31"
---

## Overview

In many marine and underwater environments, traditional localization methods like GPS are often unavailable or unreliable. We proposed a localization framework that utilizes spatiotemporal fields—governed by **Partial Differential Equations (PDEs)**—as unique localization signatures. This research forms a core component of my work on localization in sensory-compromised scenarios.

By using a numerical PDE solver to provide predicted fields over a domain, we can treat environmental features like temperature or salinity as a map for navigation. This allows autonomous vehicles to determine their position by matching real-time sensor readings against these predicted multimodal "landmarks."

## The Challenge

Navigating in open water or coastal environments presents significant technical hurdles:
* **Featureless Environments**: Traditional visual or LiDAR-based SLAM often fails in open water where there are no distinct structural landmarks.
* **Sensor Drift**: Real-world sensors suffer from inherent drift, which can quickly lead to catastrophic localization errors if not accounted for.
* **Computational Complexity**: Running high-fidelity PDE solvers alongside complex filtering algorithms in real-time requires efficient mathematical partitioning.

## Technologies & Tools

This framework integrates advanced numerical methods with robotic filtering techniques:
* **Numerical PDE Solvers**: Used to model Shallow Water Equations and Advection-Diffusion equations.
* **Rao-Blackwellized Particle Filter (RBPF)**: A sophisticated filtering technique that reduces the computational load by partitioning the vehicle state.
* **Multimodal Sensing**: Fusing data from salinity, temperature, and dissolved oxygen sensors.
* **Autonomous Surface Vehicles (ASV)**: The primary hardware platform for field validation.

## Technical Approach

### Rao-Blackwellized Particle Filter (RBPF)
To address the high dimensionality of the localization problem, we utilize a **factorization approach**. The vehicle state is partitioned into a nonlinear component (sampled by particles) and a linear sensor bias component (tracked analytically via per-particle Kalman filters). This partitioning significantly reduces the number of particles required for accurate localization compared to a standard particle filter, making it viable for real-time deployment.

A conceptual overview of this localization process, illustrating how the filtering is structured to manage environmental PDE maps and multimodal measurements, is shown in Figure 1.

<figure style="margin: 20px 0; text-align: center;">
  <img src="/images/posts/localization_pde_scheme.png" alt="PDE-Governed Localization Framework Diagram" style="width: 100%; max-width: 600px; display: block; margin: 0 auto;" />
  <figcaption style="font-size: 0.95rem; color: #666; margin-top: 10px; font-style: italic;">Figure 1: Conceptual overview of the PDE-governed localization process using the RBPF to fuse multimodal environmental data with physics-based signatures.</figcaption>
</figure>

### PDE-Governed Signatures
We consider two primary classes of PDEs to create our "environmental maps":
* **Shallow Water Equations (SWE)**: Describing free-surface flows in coastal and riverine environments.
* **Advection-Diffusion Equations**: Modeling the transport and mixing of scalar quantities like temperature, salinity, and dissolved oxygen.

## Field Experiments & Results

The framework was validated through both simulation studies and field experiments using an ASV. My ongoing work with the Florida Department of Environmental Protection (FDEP) in Biscayne Bay provided a perfect real-world testbed for these methods.

### Key Findings
* **Improved Accuracy**: The RBPF consistently outperformed standard particle filters in terms of final position error and Root Mean Square Error (RMSE).
* **Spatial Variability**: Field data confirmed that environmental fields (salinity, temperature, and dissolved oxygen) provide sufficient spatial variability to serve as reliable localization signatures.
* **Robustness**: The system remained effective even when accounting for realistic sensor drift over extended missions.

## Experimental Videos

Below are video demonstrations of the localization framework applied to the two primary PDE scenarios.

### Scenario 1: Shallow Water Equations (SWE)

This scenario demonstrates the framework's performance using features derived from free-surface flow models, typical in coastal and riverine settings.

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; margin-bottom: 20px;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" src="/videos/posts/swe_animation_censored.mp4" title="Video: Localization using Shallow Water Equations signatures" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

### Scenario 2: Advection-Diffusion Equation

This scenario showcases localization performance by tracking the transport and mixing of scalar environmental fields like temperature and salinity.

<div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; margin-bottom: 20px;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" src="/videos/posts/adv_diff_ani_censored.mp4" title="Video: Localization using Advection-Diffusion field signatures" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Conclusion

By treating the environment itself as a source of information through the lens of physics-based models, we can enable autonomous vehicles to navigate safely in "blind" conditions. This framework provides a robust path forward for long-term autonomy in marine environments where traditional sensing modalities fail.

This research is a key milestone in augmenting agent autonomy in marine environments and will be further detailed in my upcoming Ph.D. dissertation.