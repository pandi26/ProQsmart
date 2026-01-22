Assignment Submission — Problem 1 & Problem 2

This repository contains my solution for Problem 1 (CSV + Heatmap Table) and Problem 2 (Tree Table).
The implementation focuses on correctness, clean architecture, ownership thinking, UX sensibility, and engineering maturity, as outlined in the evaluation criteria.

 Problem 1 — CSV + Heatmap Table
Features Implemented

CSV upload and parsing using a safe, validated parser

Tabular rendering of CSV data

Row-wise heatmap visualization

Percentage difference calculation

Column-level sorting, freezing, and hiding

Graceful handling of invalid input

Correctness (Baseline)
CSV Parsing

Handles empty files, invalid rows, and missing headers

Non-numeric values are skipped or safely handled

Heatmap Logic

Colors are calculated per row, using that row’s min–max range

No global scaling assumptions

Percentage Difference

Clearly defined formula

Computed against a chosen base column

Table Interactions

Sorting works at column level

Columns can be frozen and hidden independently

UI updates correctly on all interactions



Business logic is implemented in custom hooks

UI components are kept presentational

No magic numbers — all heatmap thresholds are derived from data

Minimal prop drilling using hooks and shared state

Assumptions & Trade-offs
Assumptions

Heatmap comparison is row-relative

CSV headers define table structure

Percentage difference uses a consistent base column

Trade-offs

Client-side parsing is sufficient for the current dataset size

For very large CSVs, this can be moved to a Web Worker or backend

 Problem 2 — Tree Table (Hierarchical Data)
Problem Summary

The given data is flat, but logically hierarchical:

Category
 └── Sub Category 1
      └── Sub Category 2
           └── Item


The goal was to convert this into a tree-based table UI with expand/collapse behavior.

Data Modeling

Flat rows are transformed into a typed tree structure

Tree construction is handled by a pure function

Strong typing ensures correctness and future extensibility

Key Principles

Data transformation is separate from rendering

Tree nodes are explicit (category, subCategory, item)

Item Code is treated as a unique identifier

UI Architecture

Recursive TreeRow component

Expand / collapse handled at each node

Indentation based on depth level

Clear visual separation between:

Category rows

Sub-category rows

Item rows

Ownership & Edge Cases
Considered Edge Cases

Missing categories or subcategories

Empty datasets

Deeply nested structures

Future Improvements

Aggregated totals at category levels

Virtualized rendering for large trees

Lazy loading of child nodes

Keyboard accessibility

 How to Run the Project
npm install
npm start

 Demo Video

Demo Link:
https://drive.google.com/file/d/1nc5a7aTmxoAX9NileXPOfH_dE95Ioz0c/view?usp=drive_link

In the demo, I focused on correctness first, then structured the solution so data logic and UI are clearly separated. I documented assumptions, handled edge cases, and designed the components to be extensible for future requirements.

 Final Notes

This solution is designed not just to satisfy the assignment, but to reflect how I would approach owning and maintaining a production UI.
