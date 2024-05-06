# BRC-669
A modifiable ordinal standard. Desired ordinals can be updated based on several different parent-child relationships. This standard offers a modular structure, enabling the division of ordinals into as many parts as desired, thus facilitating updates at a lower cost.

## Initial Setup

This document provides a detailed protocol for setting up the necessary files and configurations to inscribe an ordinal using the BRC-669 protocol. Follow these steps sequentially to ensure proper setup.


**Inscribe the Main Parent:**

Start by inscribing the main parent. Place the ID of this main parent into the corresponding section within the inscription.js file.


**Inscribe a Child to the Main Parent:**

Create a child under the main parent and refer to it as the "layered parent".


**Inscribe the inscription.js File:**

Inscribe the inscription.js file and place its ID into the specified section within the inscription.html file.


**Inscribe the inscription.html File:**

Inscribe the inscription.html file. You may delegate your collection to this inscription ID or inscribe any number of inscription.html files as needed.


**Inscribe initialize.js, loader.js, and style.css Files:**

Inscribe these files and place their IDs into the appropriate sections within the library.json file.


**Inscribe the library.json File:**

Inscribe the library.json file as a child of the layered parent.


**Finalizing Setup**

Ensure all files are correctly inscribed and linked as per the instructions above. Check all ID placements for consistency and accuracy to prevent any loading or execution issues.