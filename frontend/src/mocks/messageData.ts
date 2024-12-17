import { Message } from "../types/chat"

export const mockMessages: Message[] = [
  {
    threadId: "a1b2c3d4-e5f6-7890-abcd-1234567890aa",
    messageId: "m1a2b3c4-d5e6-7890-abcd-1234567891aa",
    messageModel: "",
    messageAuthor: "user",
    messageContent: `Visualize the crime rates in major U.S. cities based on these data\n\nList of U.S. states and territories by violent crime rate
    Data in this table are from the FBI and for the year 2022.^[[1]](https://en.wikipedia.org/wiki/List_of_U.S._states_and_territories_by_violent_crime_rate#cite_note-FBI_2022-1)^

| Location | Violent\
crime | Homicide | Rape | Robbery | Aggravated\
assault |
| --- | --- | --- | --- | --- | --- |
|  **United States** | 380.7 | 6.3 | 40.0 | 66.1 | 268.2 |
| --- | --- | --- | --- | --- | --- |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/19px-Flag_of_Maine.svg.png) [Maine](https://en.wikipedia.org/wiki/Maine "Maine") | 103.3 | 2.2 | 32.0 | 10.0 | 59.0 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/23px-Flag_of_New_Hampshire.svg.png) [New Hampshire](https://en.wikipedia.org/wiki/New_Hampshire "New Hampshire") | 125.6 | 1.8 | 39.6 | 16.1 | 68.1 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/19px-Flag_of_Connecticut.svg.png) [Connecticut](https://en.wikipedia.org/wiki/Crime_in_Connecticut "Crime in Connecticut") | 150.0 | 3.8 | 18.1 | 44.9 | 83.3 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/17px-Flag_of_Rhode_Island.svg.png) [Rhode Island](https://en.wikipedia.org/wiki/Crime_in_Rhode_Island "Crime in Rhode Island") | 172.3 | 1.5 | 38.0 | 24.6 | 108.3 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/22px-Flag_of_Wyoming.svg.png) [Wyoming](https://en.wikipedia.org/wiki/Crime_in_Wyoming "Crime in Wyoming") | 201.9 | 2.6 | 62.8 | 7.9 | 128.7 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/23px-Flag_of_New_Jersey.svg.png) [New Jersey](https://en.wikipedia.org/wiki/Crime_in_New_Jersey "Crime in New Jersey") | 202.9 | 3.1 | 16.8 | 47.6 | 135.4 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/23px-Flag_of_Kentucky.svg.png) [Kentucky](https://en.wikipedia.org/wiki/Crime_in_Kentucky "Crime in Kentucky") | 214.1 | 6.8 | 33.8 | 38.1 | 135.4 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/23px-Flag_of_Vermont.svg.png) [Vermont](https://en.wikipedia.org/wiki/Crime_in_Vermont "Crime in Vermont") | 221.9 | 3.4 | 36.8 | 13.3 | 168.5 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/23px-Flag_of_Virginia.svg.png) [Virginia](https://en.wikipedia.org/wiki/Crime_in_Virginia "Crime in Virginia") | 234.0 | 7.3 | 30.2 | 38.4 | 158.1 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/19px-Flag_of_Idaho.svg.png) [Idaho](https://en.wikipedia.org/wiki/Crime_in_Idaho "Crime in Idaho") | 241.4 | 2.7 | 48.7 | 8.2 | 181.7 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/23px-Flag_of_Utah.svg.png) [Utah](https://en.wikipedia.org/wiki/Crime_in_Utah "Crime in Utah") | 241.8 | 2.0 | 59.5 | 29.6 | 150.7 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/23px-Flag_of_Mississippi.svg.png) [Mississippi](https://en.wikipedia.org/wiki/Crime_in_Mississippi "Crime in Mississippi") | 245.0 | 7.8 | 33.7 | 25.6 | 178.0 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/23px-Flag_of_Florida.svg.png) [Florida](https://en.wikipedia.org/wiki/Crime_in_Florida "Crime in Florida") | 258.9 | 5.0 | 30.2 | 33.6 | 190.1 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/23px-Flag_of_Hawaii.svg.png) [Hawaii](https://en.wikipedia.org/wiki/Crime_in_Hawaii "Crime in Hawaii") | 259.6 | 2.1 | 37.9 | 66.1 | 153.5 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/23px-Flag_of_West_Virginia.svg.png) [West Virginia](https://en.wikipedia.org/wiki/Crime_in_West_Virginia "Crime in West Virginia") | 277.9 | 4.6 | 44.4 | 10.0 | 218.9 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/19px-Flag_of_North_Dakota.svg.png) [North Dakota](https://en.wikipedia.org/wiki/Crime_in_North_Dakota "Crime in North Dakota") | 279.6 | 3.5 | 56.7 | 27.6 | 191.8 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/21px-Flag_of_Pennsylvania.svg.png) [Pennsylvania](https://en.wikipedia.org/wiki/Crime_in_Pennsylvania "Crime in Pennsylvania") | 279.9 | 7.9 | 29.5 | 68.1 | 174.5 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/23px-Flag_of_Minnesota.svg.png) [Minnesota](https://en.wikipedia.org/wiki/Crime_in_Minnesota "Crime in Minnesota") | 280.6 | 3.2 | 40.7 | 57.0 | 179.7 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/23px-Flag_of_Nebraska.svg.png) [Nebraska](https://en.wikipedia.org/wiki/Crime_in_Nebraska "Crime in Nebraska") | 282.8 | 3.2 | 55.3 | 29.1 | 195.2 |
| ![](https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/23px-Flag_of_Iowa.svg.png) [Iowa](https://en.wikipedia.org/wiki/Crime_in_Iowa "Crime in Iowa") | 286.5 | 1.7 | 42.5 | 21.6 | 220.7 |

Rate by year   
    `,
    messageTimestamp: "2024-11-01T08:30:00.000Z",
  },
  {
    threadId: "a1b2c3d4-e5f6-7890-abcd-1234567890aa",
    messageId: "m1a2b3c4-d5e6-7890-abcd-1234567892aa",
    messageModel: "gpt-4o",
    messageAuthor: "assistant",
    messageContent: `
    The dataset represents **violent crime rates** and their components (homicide, rape, robbery, and aggravated assault) across U.S. states and territories for the year **2022**, as reported by the FBI. Here's an analysis of the trends and insights:\n\n---\n\n### **Key Observations**:\n\n1. **United States Overall Crime Rate**:  \n   - The **violent crime rate** for the entire United States stands at **380.7** incidents per 100,000 people.  \n   - Among the components, **aggravated assault** contributes the most significantly at **268.2**, followed by **robbery** (66.1) and **rape** (40.0).  \n   - Homicide is the smallest contributor at **6.3**.\n\n2. **States with the Lowest Violent Crime Rates**:\n   - **Maine**:  \n     - **103.3** (lowest overall).  \n     - Aggravated assault contributes **59.0**, while homicide remains very low at **2.2**.  \n   - **New Hampshire**:  \n     - **125.6** incidents, with rape contributing **39.6** and homicide only **1.8**.  \n   - These states highlight a trend where lower violent crime rates correspond with very low homicide and robbery numbers.\n\n3. **States with the Highest Violent Crime Rates**:\n   - **Iowa**:  \n     - **286.5** violent crime rate, driven by aggravated assault at **220.7**.  \n   - **Nebraska**:  \n     - **282.8**, with significant contributions from aggravated assault (**195.2**) and rape (**55.3**).  \n   - **Minnesota** and **Pennsylvania** also report rates over **279**, primarily due to aggravated assault.\n\n   - While these rates are significantly lower than the national average, they reveal that aggravated assault remains the dominant crime type in many states.\n\n4. **Crime Type Trends**:\n   - **Aggravated Assault**:  \n     - It is the dominant driver of violent crime in nearly all states. States like **West Virginia** and **Iowa** stand out with higher aggravated assault rates exceeding **200**.  \n   - **Homicide**:  \n     - Rates remain consistently low across states, with most states reporting values between **1.5** to **7.9**. **Mississippi** (**7.8**) and **Pennsylvania** (**7.9**) report relatively higher homicide rates.  \n   - **Rape and Robbery**:  \n     - States like **Wyoming** (62.8) and **North Dakota** (56.7) report higher rape rates.  \n     - Robbery contributes more in states like **Hawaii** (**66.1**) and **Pennsylvania** (**68.1**), showcasing variability across regions.\n\n---\n\n### **Regional Trends**:\n- **Northeastern States**:  \n   - Generally have lower violent crime rates. States like **Maine**, **New Hampshire**, and **Connecticut** showcase safer environments overall.  \n- **Midwestern States**:  \n   - States such as **Iowa** and **Nebraska** display relatively higher violent crime rates due to aggravated assault.  \n- **Southern States**:  \n   - States like **Mississippi** have a higher homicide rate compared to the national average.  \n- **Western States**:  \n   - States like **Idaho** and **Utah** exhibit moderate violent crime rates but stand out for rape and aggravated assault rates.\n\n---\n\n### **Insights**:\n- **Aggravated assault** dominates violent crime rates in nearly all states, making it the most critical factor when analyzing overall trends.  \n- **Low violent crime states** tend to have significantly reduced levels of robbery and homicide, suggesting socio-economic and law enforcement stability.  \n- **High violent crime states** do not necessarily have high homicide rates, indicating that violent crime issues can stem primarily from aggravated assault rather than homicides.\n\n---[DYNAMIC_COMPONENT_BEGIN]<LineChart width={800} height={400} data={[{Location:"United States",Violent:380.7,Homicide:6.3,Rape:40.0,Robbery:66.1,Aggravated:268.2},{Location:"Maine",Violent:103.3,Homicide:2.2,Rape:32.0,Robbery:10.0,Aggravated:59.0},{Location:"New Hampshire",Violent:125.6,Homicide:1.8,Rape:39.6,Robbery:16.1,Aggravated:68.1},{Location:"Connecticut",Violent:150.0,Homicide:3.8,Rape:18.1,Robbery:44.9,Aggravated:83.3},{Location:"Rhode Island",Violent:172.3,Homicide:1.5,Rape:38.0,Robbery:24.6,Aggravated:108.3},{Location:"Wyoming",Violent:201.9,Homicide:2.6,Rape:62.8,Robbery:7.9,Aggravated:128.7},{Location:"New Jersey",Violent:202.9,Homicide:3.1,Rape:16.8,Robbery:47.6,Aggravated:135.4},{Location:"Kentucky",Violent:214.1,Homicide:6.8,Rape:33.8,Robbery:38.1,Aggravated:135.4},{Location:"Vermont",Violent:221.9,Homicide:3.4,Rape:36.8,Robbery:13.3,Aggravated:168.5},{Location:"Virginia",Violent:234.0,Homicide:7.3,Rape:30.2,Robbery:38.4,Aggravated:158.1},{Location:"Idaho",Violent:241.4,Homicide:2.7,Rape:48.7,Robbery:8.2,Aggravated:181.7},{Location:"Utah",Violent:241.8,Homicide:2.0,Rape:59.5,Robbery:29.6,Aggravated:150.7},{Location:"Mississippi",Violent:245.0,Homicide:7.8,Rape:33.7,Robbery:25.6,Aggravated:178.0},{Location:"Florida",Violent:258.9,Homicide:5.0,Rape:30.2,Robbery:33.6,Aggravated:190.1},{Location:"Hawaii",Violent:259.6,Homicide:2.1,Rape:37.9,Robbery:66.1,Aggravated:153.5},{Location:"West Virginia",Violent:277.9,Homicide:4.6,Rape:44.4,Robbery:10.0,Aggravated:218.9},{Location:"North Dakota",Violent:279.6,Homicide:3.5,Rape:56.7,Robbery:27.6,Aggravated:191.8},{Location:"Pennsylvania",Violent:279.9,Homicide:7.9,Rape:29.5,Robbery:68.1,Aggravated:174.5},{Location:"Minnesota",Violent:280.6,Homicide:3.2,Rape:40.7,Robbery:57.0,Aggravated:179.7},{Location:"Nebraska",Violent:282.8,Homicide:3.2,Rape:55.3,Robbery:29.1,Aggravated:195.2},{Location:"Iowa",Violent:286.5,Homicide:1.7,Rape:42.5,Robbery:21.6,Aggravated:220.7}]}><XAxis dataKey="Location" interval={0} tick={{fontSize:10}}/><YAxis/><CartesianGrid strokeDasharray="3 3"/><Tooltip/><Legend/><Line type="monotone" dataKey="Violent" stroke="#8884d8" name="Violent Crime"/><Line type="monotone" dataKey="Homicide" stroke="#82ca9d" name="Homicide Rate"/><Line type="monotone" dataKey="Rape" stroke="#ffc658" name="Rape Rate"/><Line type="monotone" dataKey="Robbery" stroke="#ff7300" name="Robbery Rate"/><Line type="monotone" dataKey="Aggravated" stroke="#a4de6c" name="Aggravated Assault"/></LineChart>[DYNAMIC_COMPONENT_END]---\n\n### **Conclusion**:\nThe overall violent crime landscape in the U.S. shows notable regional disparities. While states like **Maine** and **New Hampshire** boast extremely low crime rates, others like **Iowa** and **Nebraska** face elevated levels, primarily driven by aggravated assault. Addressing specific components of violent crime (e.g., aggravated assault and robbery) will be crucial for improving public safety nationwide.
    `,
    messageTimestamp: "2024-11-01T08:30:00.000Z",
  },
  {
    threadId: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
    messageId: "m1a2b3c4-d5e6-7890-abcd-1234567890ab",
    messageModel: "",
    messageAuthor: "user",
    messageContent: "Population trends in Saskatchewan",
    messageTimestamp: "2024-11-01T08:30:00.000Z",
  },
  {
    threadId: "a1b2c3d4-e5f6-7890-abcd-1234567890ab",
    messageId: "m4d5e6f7-g8h9-0123-def0-4567890123de",
    messageModel: "gpt-4",
    messageAuthor: "assistant",
    messageContent: `
    Based on the 2021 Census data for Saskatchewan, the province exhibits an aging population trend. Here's a summary of the key points:

- **Age Distribution:**
  - **0 to 14 years:** 19.7%
  - **15 to 64 years:** 62.8%
  - **65 years and over:** 17.5%

- **Median and Average Age:**
  - **Median age:** 38.8 years
  - **Average age:** 39.8 years

**Trend Analysis:**

1. **Aging Population:** 
   - The proportion of residents aged 65 and over (17.5%) indicates a significant and growing elderly population. This is consistent with broader demographic trends where populations are aging due to lower birth rates and increased life expectancy.

2. **Working-Age Stability:** 
   - With 62.8% of the population in the 15 to 64 age bracket, Saskatchewan maintains a substantial working-age population, which is crucial for economic stability and growth.

3. **Youth Population:** 
   - The 19.7% of the population under 15 years old suggests a moderate youth population. Depending on historical data, this could indicate stable or declining birth rates.

4. **Median and Average Age Increase:** 
   - An average age of 39.8 and a median age of 38.8 years point towards an overall increase in the population's age, reinforcing the aging trend.

**Implications:**

- **Healthcare and Services:** An aging population may lead to increased demand for healthcare services, senior housing, and other age-related services.
  
- **Labor Market:** A stable working-age population can support economic activities, but it's essential to ensure that there are sufficient opportunities and resources for this demographic.

- **Education and Youth Services:** Depending on trends in the youth population, there may be varying needs for educational facilities and youth services.

To visualize this demographic distribution and better understand the trends over time, a chart can be beneficial. Below is a React component using Recharts to depict the age distribution based on the provided data:

[DYNAMIC_COMPONENT_BEGIN]<BarChart width={600} height={400} data={[{ ageGroup: '0-14', percentage: 19.7 },{ ageGroup: '15-64', percentage: 62.8 },{ ageGroup: '65+', percentage: 17.5 }]}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="ageGroup" /><YAxis /><Tooltip /><Legend /><Bar dataKey="percentage" fill="#8884d8" /></BarChart>[DYNAMIC_COMPONENT_END]

According to the data, Saskatchewan's population distribution is characterized by an aging trend, with a significant proportion of residents aged 65 and over. This demographic shift has various implications for social services, labor markets, and other sectors. If you need further analysis or specific data breakdowns, feel free to ask!
    `,
    messageTimestamp: "2024-11-01T09:05:00.000Z",
  },
  {
    threadId: "a1b2c3d4-e5f6-7890-abcd-1234567890ac",
    messageId: "m1a2b3c4-d5e6-7890-abcd-1234567891ac",
    messageModel: "",
    messageAuthor: "user",
    messageContent:
      "What percentage of the world's population has access to the internet, and how has this changed since 2010?",
    messageTimestamp: "2024-11-01T08:30:00.000Z",
  },
  {
    threadId: "a1b2c3d4-e5f6-7890-abcd-1234567890ac",
    messageId: "m1a2b3c4-d5e6-7890-abcd-1234567892ac",
    messageModel: "gpt-4o",
    messageAuthor: "assistant",
    messageContent:
      '### **Summary of Internet Usage Trends (2005-2023)**\n\n#### **Global Trends**\n- The percentage of worldwide internet users increased significantly:\n  - **2005:** 16%  \n  - **2010:** 30%  \n  - **2017:** 48%  \n  - **2023:** 67%  \n\n- The growth was more pronounced in developing regions, where internet penetration rose from **8% in 2005** to **60% in 2023**, though still lagging behind developed regions.\n\n- In developed regions, internet usage grew from **51% in 2005** to **93% in 2023**, nearing saturation levels.\n\n[DYNAMIC_COMPONENT_BEGIN]<ComposedChart width={600} height={400} data={[{year:2005, Worldwide:16, Developing:8, Developed:51}, {year:2010, Worldwide:30, Developing:21, Developed:67}, {year:2017, Worldwide:48, Developing:41.3, Developed:81}, {year:2023, Worldwide:67, Developing:60, Developed:93}]}> <XAxis dataKey="year" /> <YAxis /> <Tooltip /> <Legend /> <Bar dataKey="Worldwide" barSize={20} fill="#8884d8" /> <Bar dataKey="Developing" barSize={20} fill="#82ca9d" /> <Bar dataKey="Developed" barSize={20} fill="#ffc658" /> <Line type="monotone" dataKey="Worldwide" stroke="#413ea0" /> <Line type="monotone" dataKey="Developing" stroke="#ff7300" /> <Line type="monotone" dataKey="Developed" stroke="#387908" /> </ComposedChart>[DYNAMIC_COMPONENT_END]\n\n#### **Regional Trends**\n| **Region**                         | **2005** | **2010** | **2017** | **2023** |\n|------------------------------------|----------|----------|----------|----------|\n| **Africa**                         | 2%       | 10%      | 21.8%    | 37%      |\n| **Americas**                       | 36%      | 49%      | 65.9%    | 87%      |\n| **Arab States**                    | 8%       | 26%      | 43.7%    | 69%      |\n| **Asia and Pacific**               | 9%       | 23%      | 43.9%    | 66%      |\n| **Commonwealth of Independent States** | 10%      | 34%      | 67.7%    | 89%      |\n| **Europe**                         | 46%      | 67%      | 79.6%    | 91%      |\n\nn#### **Key Insights**\n1. **Developing vs. Developed Regions:**  \n   - Developing regions made substantial strides in internet adoption, closing the digital gap from **8% (2005)** to **60% (2023)**.  \n   - Developed regions achieved near-universal internet access, increasing from **51% to 93%** in the same period.  \n\n2. **Regional Leaders:**  \n   - **Europe** and the **Commonwealth of Independent States** lead internet adoption, surpassing **90%** by 2023.  \n   - **The Americas** and **Arab States** saw consistent growth, reaching **87%** and **69%**, respectively.  \n   - **Africa** lags significantly but shows promising growth, increasing from **2% in 2005** to **37% in 2023**.\n\n3. **Asia-Pacific Region:**  \n   - With its large population, Asia-Pacific made notable gains from **9%** in 2005 to **66%** in 2023, highlighting the region\'s growing connectivity.\n\n---\n\n### **Conclusion**  \nThe period between 2005 and 2023 saw a global surge in internet usage, particularly in developing regions, where accessibility increased dramatically. Despite this progress, challenges remain, especially in regions like **Africa**, where internet penetration still trails other parts of the world. Developed regions, on the other hand, are approaching full connectivity. Moving forward, further investment in infrastructure and technology in underconnected regions will be key to achieving global digital inclusivity.',
    messageTimestamp: "2024-11-01T08:30:00.001Z",
  },
]
