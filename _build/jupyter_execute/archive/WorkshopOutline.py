#!/usr/bin/env python
# coding: utf-8

# ## **SSDS's Grappling with GDP** (GearUp Messy Data Workshop Series)
# 
# <div>
# <img src="imgs/gdp_headerimage.png" width="1000"/>
# <div>

# #### *0. Preparatory Work/Prerequisites:* 
# 
# * Python installation & usage: 
# 
#     * Accessing local Python install/JupyterBooks 
# 
#     * Python basics crashcourse: variables, variable types, data containers, functions, packages & importing
# 
#     * Resources for learning more about Python & troubleshooting 

# #### *0. Motivating the Need for Robust Data:*
# 
# * Robust data acts as the foundation for robust results.
# 
# * Depending on your application/research, the robust-ness of data may be defined by some/all of the following considerations: data source, continuity, and timeliness. 
# 
# * Workshop centers on understanding these issues in the context of generating a timeseries US GDP dataset.

# #### *1. GDP Background*
# 
# What is GDP? Definition and example. 
#   
#   * Why do we care about GDP? Useful "big picture" stat (analogs used for large-scale social inquiries). 
# 
#   * Qualities of GDP data: computed and published by government agencies, multiple approaches for calculation, *laggy* 
# 
#   * GDP as an example of timeseries data. Why timeseries data more generally? Can evaluate changes and continuities through time. Not the only kind of messy data though!
# 
#   * Okay, so GDP is a useful indicator. How do we got about obtaining/creating a GDP dataset in practice? 

# #### *2. Issues in Data Sourcing*
#   
# * If there are multiple datasets reporting the same statistic/indicator, whose dataset are you going to use? 
# 
#     * E.g., multiple agencies produce GDP data (local Fed's, BEA, World Bank).

# * For each data author, what incentives are they/their organization subject to? How could those manifest in the data? 
# 
#     * Incentives for misreporting? E.g., misclassifying a job/industry to inflate production in a specific sector to incentivize future funding?  

# * What approach is used to compute/generate the dataset? Is this approach supported/resonable? Is it transparent? Can you or another individual replicate the data generation process to check? 
# 
#     * E.g., expenditure, production, and income approach. 

# #### *3. Issues in Data Continuity*
# 
# Primary issue with data continuity: missing data/data gaps. In the context of timeseries: 

# 
# * Identification: How do you know if your dataset has gaps? How are data gaps represented in your dataset (could be dependent on data author)? How many data gaps are there? How long are they? 

# * Comprehension: Why are the gaps there/where do they come from? Is one of the constituent datasets missing? Do any gaps overlap with your scope of analysis? 

# * Remediation: How can you deal with these data gaps? Should you exclude any points with gaps from your analysis? Should you fill the data gaps in? If so, what method should you use to fill in those gaps? 

# **Note:** Timeseries data is not the only data format! Other datasets and formats are also susceptible to continuity breaks. 
# 
# * Classification data - evaluating different groups, and a group of interest isn't represented. 
# 
# * Cross-sectional data, etc.
# 

# #### **3.1 CODING SESSION: DATA FILL METHODS** 

# Exogenous fill methods - filling in gaps in your working dataset with points from another dataset. 
# 
# Endogenous fill methods - using existing points in the working dataset to estimate missing values. 

# * Issues with exogenous fill methods: 
# 
#   * Need for resampling 
# 
#   * Mis-alignment of data point occurence 
# 
#   * ***Key: Addressing both of these concerns by considering data sourcing and authorship. GDP as a monthly/quarterly measure, collection dates, etc. 
# 
#   * *Code demonstration of different results using different methods* 

# * Issues with endogenous fill methods: 
# 
#     * Determining the best interpolation methods: mean, median, min/max, knn, glrm. 
# 
#     * Determining the interpolation scope: how many surrounding datapoints do we estimate from? 
# 
#     * *Code demonstration of different results using different methods* 

# *Consequences of Data Filling* 
# 
# * Consider a downstream use of GDP data: maybe built into a regression, maybe used as filter, etc. 
# 
# * Craft and present example of how using different fill methods would lead to different results/conclusions in downstream analysis. 

# #### **3.2 CODING SESSION: DATA FILL OPTIMIZATION - VECTORIZATION**
# 
# * What is vectorizing/vectorization? 
#   
# * When can we vectorize/under what conditions? (Order-dependent or independent operations)
#   
# * In Python, what tools do we use to vectorize?
#    
# * How do we vectorize? *Coding demonstration* 
#   
# * Enjoy making your code run faster? Stay posted for the SSDS MOPS Workshop (**M**anaging & **O**ptimizing **P**erformance and **S**calability - and Memory!)

# #### *4. Issues in Data Timeliness*
# 
# Consider your research application - are you trying to build a time-sensitive indicator? Derive some key statistic to motivate decisions? Make a real-time estimation/prediction? 

# * If yes, data timeliness can become an issue. With GDP, it's often reported quarterly, but with a quarter lag - i.e., data for 2004 Q2 GDP is published at the end of 2004 Q3. 
# 
# * *Maybe a review exercise?*: address data timeliness issues by building a coincident timely estimate. A mini re-hash of the entire workshop where you have to consider what estimator to use, identify a data source for it, consider its authorship, working on filling gaps, 
