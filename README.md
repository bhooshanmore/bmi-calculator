# Minimal Mistakes

**[Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes)** is a two column responsive Jekyll theme perfect for powering your GitHub hosted blog. 

## Minimal Mistakes is all about:

* Responsive templates. Looking good on mobile, tablet, and desktop.
* Gracefully degrading in older browsers. Compatible with Internet Explorer 8+ and all modern browsers. 
* Minimal embellishments -- content first.
* Optional large feature images for posts and pages.
* Simple and clear permalink structure.
* [Custom 404 page](http://mmistakes.github.io/minimal-mistakes/404.html) to get you started.
* Support for Disqus Comments

![screenshot of Minimal Mistakes theme](http://mmistakes.github.io/minimal-mistakes/images/mm-theme-post-600.jpg)

See a [live version of Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes/) hosted on GitHub.

## Getting Started

Minimal Mistakes takes advantage of Sass and data files to make customizing easier. These features require Jekyll 2.x and will not work with older versions of Jekyll.

To learn how to install and use this theme check out the [Setup Guide](http://mmistakes.github.io/minimal-mistakes/theme-setup/) for more information.

## Added below packages.
 1) "apicache": "^1.6.3"
 2) "body-parser": "^1.19.0"
 3) "cors": "^2.8.5"
 4) "dotenv": "^10.0.0"
 5) "express": "^4.17.1"
 6) "express-rate-limit": "^5.5.0"
 7) "needle": "^3.0.0"
 8) "swagger-jsdoc": "^6.1.0"
 9) "swagger-ui-express": "^4.1.6"
 10) "winston": "^3.3.3"
 11) "winston-daily-rotate-file": "^4.5.5"

## devDependencies
1) "chai": "^4.3.4"
2) "eslint": "^8.1.0"
3) "mocha": "^9.1.3"
4) "nodemon": "^2.0.14"

## Added express-rate-limit 
   To limit number hit per min ,current config is 5 request per 10 min limit

## Sample Json
```[
    {
        "Gender": "Male",
        "HeightCm": 171,
        "WeightKg": 96
    },
    {
        "Gender": "Male",
        "HeightCm": 161,
        "WeightKg": 85
    },
    {
        "Gender": "Male",
        "HeightCm": 180,
        "WeightKg": 77
    },
    {
        "Gender": "Female",
        "HeightCm": 166,
        "WeightKg": 62
    },
    {
        "Gender": "Female",
        "HeightCm": 150,
        "WeightKg": 70
    },
    {
        "Gender": "Female",
        "HeightCm": 167,
        "WeightKg": 82
    }
]
```

### Expected output:
``` {
    "BMIResult": [
        {
            "Gender": "Male",
            "HeightCm": 171,
            "WeightKg": 96,
            "category": "Very severely obese",
            "health_risk": "Very high risk",
            "bmi": "56.14"
        },
        {
            "Gender": "Male",
            "HeightCm": 161,
            "WeightKg": 85,
            "category": "Very severely obese",
            "health_risk": "Very high risk",
            "bmi": "52.80"
        },
        {
            "Gender": "Male",
            "HeightCm": 180,
            "WeightKg": 77,
            "category": "Very severely obese",
            "health_risk": "Very high risk",
            "bmi": "42.78"
        },
        {
            "Gender": "Female",
            "HeightCm": 166,
            "WeightKg": 62,
            "category": "Severely obese",
            "health_risk": "High risk",
            "bmi": "37.35"
        },
        {
            "Gender": "Female",
            "HeightCm": 150,
            "WeightKg": 70,
            "category": "Very severely obese",
            "health_risk": "Very high risk",
            "bmi": "46.67"
        },
        {
            "Gender": "Female",
            "HeightCm": 167,
            "WeightKg": 82,
            "category": "Very severely obese",
            "health_risk": "Very high risk",
            "bmi": "49.10"
        }
    ],
    "categoryAnalysis": {
        "Very severely obese": 5,
        "Severely obese": 1
    },
    "healthRiskAnalysis": {
        "Very high risk": 5,
        "High risk": 1
    }
}
```
