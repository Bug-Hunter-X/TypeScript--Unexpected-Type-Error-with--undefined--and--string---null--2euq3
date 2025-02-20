# TypeScript: Unexpected Type Error with 'undefined' and 'string | null'

This repository demonstrates a common yet subtle TypeScript type error related to the interaction between 'undefined', 'null', and union types.

## The Problem

When a function accepts a parameter of type `string | null`, TypeScript doesn't automatically treat `undefined` as a valid input, even when using strict null checks. This can lead to unexpected type errors if the function is called with `undefined`.

The `bug.ts` file illustrates this issue.  The `greet` function is designed to handle both string names and a null value representing the absence of a name. However, calling the function with `undefined` results in a type error.

## The Solution

The solution involves explicitly handling the `undefined` case.  This can be done by either:

1.  Changing the function parameter type to `string | null | undefined`.
2.  Adding a check for `undefined` within the function.

The `bugSolution.ts` file provides a corrected version of the function using both approaches. Choose the approach that best suits your coding style and program's logic.

## How to Reproduce

1.  Clone this repository.
2.  Open a terminal in the repository directory.
3.  Run `tsc bug.ts` (This will generate the error.)
4.  Run `tsc bugSolution.ts` (This will compile without errors.)