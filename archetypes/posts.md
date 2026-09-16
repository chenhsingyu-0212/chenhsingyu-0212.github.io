+++
# Filename -> URL: /posts/<filename>/ (see [permalinks] in hugo.toml).
# Use an ASCII filename so the URL stays ASCII; the title can be Chinese.
# If you rename an existing post, add aliases = ["/posts/<old-slug>/"] to keep
# the old link working.
title = "{{ replace .File.ContentBaseName "-" " " | title }}"
date = {{ .Date }}
draft = true
summary = ""
categories = []
tags = []
translationKey = "{{ .File.ContentBaseName }}"
+++

Write your post in Markdown here.
