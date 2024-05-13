import requests
from bs4 import BeautifulSoup
import pandas as pd 

# URL of the webpage to scrape
url = "https://xenoblade.fandom.com/wiki/Aetia_Region_Quests"

# Send a GET request to the URL
response = requests.get(url)

# Parse HTML content
soup = BeautifulSoup(response.text, 'html.parser')

# Find the table with class 'xc1 questlist chronological'
table = soup.find('table', class_='xc1 questlist chronological')

# Check if the table was found
if table:
    # Initialize lists to store data points
    quest_npc = []
    quest_available = []
    quest_name = []
    quest_location = []

    # Find all rows in the table excluding the header row
    rows = table.find_all('tr')[1:]

    # Iterate over each row
    for row in rows:
        # Find all td elements in the row
        data_points = row.find_all('td')

        # Extract data from each td element and append to respective lists
        for idx, data_point in enumerate(data_points):
            if idx == 0:
                # Example: Assigning 'quest_npc' as the name for the first td
                quest_npc.append(data_point.text.strip())
            elif idx == 1:
                # Example: Assigning 'quest_available' as the name for the second td
                quest_available.append(data_point.text.strip())
            elif idx == 2:
                # Example: Assigning 'quest_name' as the name for the third td
                quest_name.append(data_point.text.strip())
            elif idx == 3:
                # Example: Assigning 'quest_location' as the name for the fourth td
                quest_location.append(data_point.text.strip())

    # Check if all lists have the same length
    if len(set(map(len, [quest_npc, quest_available, quest_name, quest_location]))) == 1:
        # Creating a DataFrame
        df = pd.DataFrame({
            'Quest NPC': quest_npc,
            'Quest Available': quest_available,
            'Quest Name': quest_name,
            'Quest Location': quest_location
        })

        # Print the DataFrame
        print(df)
    else:
        print("Error: Lists have different lengths.")
else:
    print("Table not found on the webpage.")
