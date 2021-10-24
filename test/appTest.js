const assert = require('chai').assert
const app = require('../utility/utility');


describe('testing a function bmi_category_and_health_risk() ',function() {
  it('Testing bmi_category_and_health_risk return not null ',function(){
    let result = app.bmi_category_and_health_risk(18.4)
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.isNotEmpty(result)
  });

  it('Testing BMI',function(){
    let result = app.bmi_category_and_health_risk(18.4)
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.equal(result.bmi,18.4,'checking correct BMI')
  });

  it('Testing BMI return type as Number',function(){
    let result = app.bmi_category_and_health_risk(18.4)
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.isNumber(18.4)
  });


  it('Testing Category',function() {
    let result = app.bmi_category_and_health_risk(18.4)
    
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.equal(result.category,'Underweight','Underweight')
  }) 

  it('Testing Category return type as string',function() {
    let result = app.bmi_category_and_health_risk(18.4)
    
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.isString(result.category)
  }) 

  it('Testing Health_risk',function() {
    let result = app.bmi_category_and_health_risk(18.4)
    
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.equal(result.health_risk,'Malnutrition risk','checking Malnutrition risk')
  })

  it('Testing Health_risk return type as string',function() {
    let result = app.bmi_category_and_health_risk(18.4)
    
    const expectedResult ={
      bmi: 18.4,
      category: 'Underweight',
      health_risk: 'Malnutrition risk'
    }
    assert.isString(result.health_risk)
  })

});
