#!/usr/bin/env python
# coding: utf-8

# ## Chapter 1.2.2. - *Understanding author incentives and purpose* 
# 
# (continued from end of Chapter 1.2.1.)
# 
# ...and wouldn't you believe it, there is! We can consider the research *intended purpose and incentives* of "generic research entity types."

# ### ***PREFACE:***
# 
# Two quick notes before we get started: 
# 
# 1\. What is a "generic research entity type?" Well, it's a (bit of an awkward) name for a type of individual/group that would conduct research and publish data. A non-exhaustive list includes:  
#   
#   - **Academic** - students, professors, research aides, organized labs and groups, reserach institutes, etc. 
# 
#   - **Governmental** - state and local governments, individual bureaucrats, federal departments and associations (e.g., Dept. of Defense, NASA), international bodies like the U.N.
# 
#   - **Commerical** - companies and corporations (espeically advisory companies - e.g.,  management consulting firms)
# 
# Going forward, I'll refer to these generics as "reseacher types" with the caveat that we aren't necessarily referring to individual researchers. Name suggestions for this concept are welcome! 
# 
# 2\. Also, we can certainly do the forthcoming data sourcing practice on a dataset-by-dataset level (and I would encourage you to do so)! 
# 
#   * But, applying this practice in the context of research entity-types rather than specific entities can be a useful way to expedite the data sourcing process, as different entities belonging to the same researcher type can have similar/shared purposes and incentives. 
# 
# Now we're ready to dive in! 

# <div>
# <img src="../imgs/incentives.png" width="500"/>
# <figcaption><em> When you're a [research entity], everything looks like a [carrot], or something like that... </em></figcaption>
# <div> 
# <br>
# 
# ### ***DISCUSSION 1:***
# What does it mean to consider the intended purpose and incentives of a generic entity? For me, it's all about answering two key questions: 
# 
# * To identify an **intended purpose,** I ask myself: *"How did the person/group/researcher type who published this data want it to be used?"*
# 
# * To identify **incentives,** I ask myself: *"Why did this person/group/researcher type conduct the research that gave rise to this data resource in the first place?*
# 
# Take a few minutes to brainstorm some potential answers to these questions in the context of researcher types, and then take a look at the following table! 
# 
# <center>
#                                                    <strong>Table 2. Research type incentives</strong> 
# <br><br>
# 
# | **Researcher type** | **Researcher sub-type**    | **Potential incentives**                                                  | **Potential intended purposes**                                |
# |---------------------|----------------------------|---------------------------------------------------------------------------|----------------------------------------------------------------|
# | Academic            | Professor                  | Boosting reputation, securing tenure, "scooping" competitors              | To suggest a causal relationship between ___ and ___           |
# | Academic            | Student                    | Jockeying for authorship position, ensuring lab employment                | (Commonly aligned with a supervising faculty/lab)              |
# | Governmental        | Department of Defense      | Lobbying for funding, influencing other dept.'s spending & efforts        | To demonstrate a security vulnerability to ___ from ___        |
# | Governmental        | U.N.                       | Motivating international sanctions, initiatives, coalition-building, etc. | To coordinate the policies of ___ and ___                      |
# | Commercial          | Financial Analyst          | Identifying investment opportunities, improving perceived performance     | To encourage/expedite internal or external financial decisions |
# | Commercial          | Management Consulting Firm | Generating & securing additional clientele through discovered needs       | To be read and create demand for their services                |
# </center>

# This is in no way a complete list (where would you make changes? additions? deletions?) - but hopefully it can help you see that researchers may be operating with conscious/unconscious biases when collecting the data that ultimately underpins their research. Then, how should this knowledge impact your data sourcing process? 
# 
# * Always keep in mind that most research (and supporting data) suffers from *publication bias,* or the failure to publish the results of a study on the basis of the direction and/or strength of the study findings. Relatedly, studies can suffer from a *"newsworthy bias,"* where individuals only publish research and accompanying data which demonstrates an interesting or notable result, which can already suggest anomalies in the collected data. 
# 
# * Opting for alternate researcher types when there are egregious conflicts on interest (e.g., climate studies data collected by petroleum companies) is a logical first step. Most of the time, maintaining a weak preference for academic & governmental sources is recommended.
# 
# * More generally, you can select data sources such that the original dataset's intended purpose and related incentives are orthogonal to your current study's purpose; i.e., if you wanted to collect data on non-exercise cancer risk factors, you could think about using the covariates data from another study that proposes a link between cancer risk and being sedentary. 

# ### ***DISCUSSION 2:***
# 
# Of special note is the fact that for both researcher types and specific researchers within a type, incentives and intended purpose of analogous studies (and their related data) *can change over time* - this is especially important to consider in the context of timeseries analysis. To understand how changing incentives and intended purpose can impact collected data, let's see an example: 
# 
# <div>
# <img src="../imgs/small_business.png" width="500"/>
# <div><br>
# 
# We're going to zoom in on the contribution of portion of national GDP generated by small businesses. Essentially all of the recent studies and available data on small business GDP (SGDP) is spearheaded by one author within one organization, the federal government's Small Business Administration. Here's some info about two reports released by this same author: 
# 
# * [Report 1](http://www.richschwinn.com/index/sgdp_v1.8_SBA.pdf): 
# 
#   * Published: April 2007 
#   
#   * Data timeframe: 1998-2004
# 
# * [Report 2](https://permanent.fdlp.gov/websites/www.sba.gov/advo/research/rs299.pdf): 
# 
#   * Published: December 2017
# 
#   * Data timeframe: 1998-2014 
# 
# *(Note: All data used in the following dicussion were sourced from these reports.)*
# 
# As part of both reports, SGDP as a percentage of GDP (both nominal figures) is calculated. In the overlapping timeframes of the two reports (i.e., 1998-2004), would we expect there to be dramatic differences in the SGDP as a percentage of GDP data? Why? Could incentives and intended purpose changed - how so? 
# 
# Let's take a look with some code: 

# ### ***CODING EXERCISE:***

# In[1]:


# required imports: 
import os                           # use: file management and access 
import numpy as np                  # use: some calculations
import pandas as pd                 # use: data intake and manipulation 
import matplotlib.pyplot as plt     # use: data viz. 


# In[2]:


""" DATA SOURCING: CHANGING INCENTIVES AND INTENDED PURPOSE """
# importing the data (index column has year values): 
datasets_dir = os.path.dirname(os.getcwd()) + os.sep + 'sample_datasets' + os.sep 
sgdp_data = pd.read_csv(datasets_dir + 'sgdp_sba.csv' , encoding='utf-8', header=0, index_col=0)

# 2017 subset of data: 
print(sgdp_data['2017_report_sgdp_share'])


# In[3]:


# some scatter plots of the data: 
plt.scatter(sgdp_data.index, sgdp_data['2007_report_sgdp_share'], label='2007: SGDP SHARE OF GDP (%)', color='limegreen')
plt.scatter(sgdp_data.index, sgdp_data['2017_report_sgdp_share'], label='2017: SGDP SHARE OF GDP (%)', color='blue')

# 2007 best fit line: 
xvals = [1998, 2004]
yvals = [sgdp_data.loc[[1998]]['2007_report_sgdp_share'].values[0], sgdp_data.loc[[2004]]['2007_report_sgdp_share'].values[0]]
plt.plot(xvals, yvals, linewidth=2, linestyle='--', color='seagreen')

# 2017 best fit line: 
a, b = np.polyfit(sgdp_data.index, sgdp_data['2017_report_sgdp_share'], 1)
plt.plot(sgdp_data.index, a*sgdp_data.index + b, linewidth=2, linestyle='--', color='steelblue')

# formatting options: 
plt.title("SGDP DATA: 2007 vs. 2017 REPORT")
plt.xlabel("Year"), plt.ylabel("SGDP SHARE OF NON-FARM GDP (%)")
plt.legend(loc='upper right')
plt.tight_layout()


# ### ***DISCUSSION 3:***
# 
# Even from this quick visualization, major discrepancies are apparent: 
# 
# * The 2007 report contained only initial and ending figures for SGDP share as a % of GDP, while the 2017 report offered data points for all years reviewed in the report. 
# 
# * The trend in SGDP share is directionally opposite for the two reports. 
# 
# * The two reports aim to measure the same metric, but have differing figures for their shared years of measurement (1998, 2004). 
# 
# What might be the cause of the lack of granular data in the 2007 report? How about the apparent switch in the trend of SGDP share? Is there reason to suspect a shift in intended purpose and incentives (recall that both reports were sanctioned by the Small Business Administration, and their respective years of publication)?

# ### ***CONCLUSION:***
# 
# Ultimately, while we aren't here to play whistleblower, in this case and almost all others, it's worth noting that which dataset you elect to use may have great impact on your research results - especially when it comes to multiple data resources claiming to measure the same metric; i.e., suppose you wanted to investigate small business health in the decade before and after the Great Recession. How would which dataset you use impact your results? How so? 
# 
# In short, incentives & intended purposes of research can change across researcher types, for the same researcher type, and even for the same researcher. These changes may not give rise to drastically misreported or conflicting data - but in research, the details matter. So, it's always worth thinking about what incentives and intended purpose can imply for data resources, and your research. 
