This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Introduction

Learn how to use Histogram Component in your application.


### About Histogram Component

This is a React Component which displays a histogram based on data passed to it.

### Live example

Check out the [Histogram Component](https://github.com/bbatjargal/histogram-chart).


### Features

- The user is able to click on a particular bar of the histogram to highlight it.
- Hovering or clicking on the bar shows the key and value of the dictionary entry represented by the bar by a tooltip.

### Usage

Define Histogram tag in your JSX code and need to pass data property as a dictionary.

For example:

```html
<Histogram data={{"apples": 10, "oranges": 5, "pears": 15}} />
```

The above code will produce a bar chart, for apples, oranges and pears, where the height of the bar for the respective fruits is 10 for apples, 5 for oranges and 15 for pears. If we user hovers over or clicks the apples bar, the tooltip will show ‘Apples: 10’.

### Optional properties
- <strong>ylabel:</strong> <em>Y-Axis label</em>
- <strong>xlabel:</strong> <em>X-Axis label</em>
- <strong>width:</strong> <em>An width for the chart. By default 800px.</em>
- <strong>height:</strong> <em>An height for the chart. By default 500px.</em>

For example:

```html
<Histogram data={data} 
        ylabel="Counts" 
        xlabel="Fruits"
        width="800"
        height="500" />
```


## How to run

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
