


function bmi_category_and_health_risk(bmi) {

  var category_and_health_risk = []
  
  if (bmi <= 18.4) {
    return category_and_health_risk = { bmi: bmi, category: 'Underweight', health_risk: 'Malnutrition risk' }
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    return category_and_health_risk = { bmi: bmi, category: ' Normal weight', health_risk: 'Low risk' }
  }
  if (bmi >= 25 && bmi <= 29.9) {
    return category_and_health_risk = { bmi: bmi, category: ' Overweight', health_risk: ' Enhanced risk' }
  }
  if (bmi >= 30 && bmi <= 34.9) {
    return category_and_health_risk = { bmi: bmi, category: ' Moderately obese', health_risk: '  Medium risk' }
  }
  if (bmi >= 35 && bmi <= 39.9) {
    return category_and_health_risk = { bmi: bmi, category: 'Severely obese', health_risk: 'High risk' }
  }
  if (bmi >= 40) {
    return category_and_health_risk = { bmi: bmi, category: 'Very severely obese', health_risk: 'Very high risk' }
  }

}

function calculate_bmi(req) {
  var responseJson = {}
  var key = 'BMIResult';
  responseJson[key] = [];

  req.body.forEach(item => {
    var bmi = (item.WeightKg / (item.HeightCm / 100)).toFixed(2)

    var data = {
      Gender: item.Gender,
      HeightCm: item.HeightCm,
      WeightKg: item.WeightKg
    };

    temp = bmi_category_and_health_risk(bmi)
    data.category = temp.category
    data.health_risk = temp.health_risk
    data.bmi = temp.bmi

    responseJson[key].push(data)
  });
 
  const groupByCategory = responseJson.BMIResult.reduce((acc, it) => {
    acc[it.category] = acc[it.category] + 1 || 1;
    return acc;
  }, {});

  const groupByHealthRisk = responseJson.BMIResult.reduce((acc, it) => {
    acc[it.health_risk] = acc[it.health_risk] + 1 || 1;
    return acc;
  }, {});

  // console.log(groupByCategory)
  // console.log(groupByHealthRisk)
  responseJson.categoryAnalysis = groupByCategory
  responseJson.healthRiskAnalysis =groupByHealthRisk
  console.log(JSON.stringify(responseJson))
  return responseJson
}


module.exports ={ 
  bmi_category_and_health_risk : bmi_category_and_health_risk,
  calculate_bmi : calculate_bmi
}
