# Storybook x HMR reproduce

## Issues

- https://github.com/storybooks/storybook/issues/3348
- https://github.com/storybooks/storybook/issues/3703
- https://github.com/elderfo/react-native-storybook-loader/issues/56

## Objectives

- To reproduce problem of Storybook with HMR.

## Results

- HMR works fine.
- Suspect React-Native version:
  - We found issue in project using React Native version `^0.54.2`.
  - This project React Native version `0.56.0`.
  - All Storybook packages version are the same at `^3.4.8`.


