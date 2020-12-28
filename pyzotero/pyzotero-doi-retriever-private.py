#!/usr/bin/env python
# coding: utf-8

# # Retrieve published versions of articles on arXiv with `pyzotero`

# ## Load entire Zotero library

# In[194]:


from pyzotero import zotero
zot = zotero.Zotero(5486616, 'user', 'tqkLzFUD5C0ljayjBvLOZpzr')
items = zot.everything(zot.top())


# ## Finds arXiv preprints in library

# In[195]:


preprints = []

for item in items:
    if 'publicationTitle' in item['data']:
        if (
            any('arxiv' in str for str in [item['data']['publicationTitle'].lower(), item['data']['url'].lower()]) and 
            (' ' not in item['data']['url'])
        ):
            preprints.append(item)


# ## Scrape URLs for DOIs

# In[204]:


import requests
import re
import textwrap

regex = 'name="citation_doi" content=(.*?)/>'
pattern = re.compile(regex)


new = {}
keys, titles, DOIs = [], [], []
for item in preprints:
    r = requests.get(item['data']['url'])
    match = re.search(pattern, r.text)
    if match:
        DOI = match[1].replace('"', '').strip()
        new[item['data']['key']] = DOI
        keys.append(item['data']['key'])
        titles.append(item['data']['title'])
        DOIs.append(DOI)


# In[205]:


print(f'{len(new)} DOIs have been found among {len(preprints)} preprints.')
print('\n')
print('\n'.join(f'{key:<9} {textwrap.shorten(title, width=60):<60} {DOI:<30}' for key, title, DOI in zip(keys, titles, DOIs)))


# ## Update items in library

# In[198]:


success = []
for key, DOI in new.items():
    to_update = zot.item(key)
    to_update['data']['DOI'] = DOI
    success.append(zot.update_item(to_update))
    if all(success):
        print('All preprints have been updated with new DOI.')
    else:
        pass
    


# In[ ]:




