# Project: File Differences Utility

A simple Python utility to compare two text files and highlight their differences. This project provides functions to find differences on a line-by-line and character-by-character basis and format the output for easy reading.

## Features

- Reads files and splits them into lines.
- Compares two files line by line to find discrepancies.
- For differing lines, identifies the exact character where the difference begins.
- Generates a human-readable report of all differences.

## Core Functions

The main logic is contained in `diff.py`, which includes the following key functions:

- `get_file_lines(filename)`: Reads a file into a list of strings.
- `multiline_diff(lines1, lines2)`: Compares two lists of strings and returns a list of differences.
- `singleline_diff(line1, line2)`: Finds the first differing character index between two strings.
- `singleline_diff_format(line1, line2, idx)`: Formats a single difference for display.
- `file_diff_format(filename1, filename2)`: The main function that ties everything together to produce a full diff report for two files.

## Prerequisites

This project requires Python 3. No external libraries are needed.

## Usage

To use this utility, you can import the `file_diff_format` function from `diff.py` into another Python script.

### Example

Let's say you have two files:

**file1.txt:**
```
Hello world
Python is fun
```

**file2.txt:**
```
Hello world!
Python is fun
```

You can compare them with the following script:

```python
from diff import file_diff_format

report = file_diff_format('file1.txt', 'file2.txt')
print(report)
```

### Expected Output

```
Line 0:
Hello world
===========^
Hello world!
```

